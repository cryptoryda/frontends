"use client"

import { useQuery } from "@tanstack/react-query"
import { default as NavLink } from "next/link"
import { useParams, useRouter } from "next/navigation"
import { useEffect, useMemo } from "react"

import { CircularProgress, Stack, SvgIcon, Typography } from "@mui/material"

import BadgeDetail from "@/app/_canvas/badge/[id]/BadgeDetail"
import ValidSvg from "@/assets/svgs/canvas/check.svg"
import WarningSvg from "@/assets/svgs/canvas/circle-warning.svg"
import ShareSvg from "@/assets/svgs/canvas/share.svg"
import ScrollButton from "@/components/Button"
import Link from "@/components/Link"
import { CHAIN_ID } from "@/constants"
import { useRainbowContext } from "@/contexts/RainbowProvider"
import { useAsyncMemo } from "@/hooks"
import useSnackbar from "@/hooks/useSnackbar"
import { checkBadgeEligibility, checkIfHasBadgeByAddress, fetchNotionBadgeByAddr, mintBadge } from "@/services/canvasService"
import useCanvasStore from "@/stores/canvasStore"
import { generateShareTwitterURL, switchNetwork } from "@/utils"

import Back from "./Back"

const BadgeContractDetail = () => {
  const router = useRouter()
  const { address } = useParams<{ address: string }>()
  const isNewTab = window.history.length === 1
  const { walletCurrentAddress, connect, chainId, provider } = useRainbowContext()
  const { profileMinted, changeIsBadgeMinting, isBadgeMinting, userBadges, queryUserBadges, queryUserBadgesLoading } = useCanvasStore()

  const {
    data: badgeForMint,
    isFetching,
    isFetched,
  } = useQuery({
    queryKey: ["notionBadge", address],
    queryFn: async () => {
      const badge = await fetchNotionBadgeByAddr(address)
      return badge
    },
    initialData: {},
  })

  const alertWarning = useSnackbar()

  const isL2 = useMemo(() => chainId === CHAIN_ID.L2, [chainId])

  const isOwned = useAsyncMemo(async () => {
    if (provider && isL2 && badgeForMint.badgeContract) {
      const hasBadge = await checkIfHasBadgeByAddress(provider, walletCurrentAddress, badgeForMint.badgeContract)
      return hasBadge
    }
  }, [provider, isL2, walletCurrentAddress, badgeForMint])

  const isEligible = useAsyncMemo(async () => {
    if (provider && isL2 && badgeForMint.badgeContract) {
      const eligibility = await checkBadgeEligibility(provider, walletCurrentAddress, badgeForMint)
      return eligibility
    }
  }, [provider, isL2, walletCurrentAddress, badgeForMint])

  const shareBadgeURL = useMemo(() => {
    const viewURL = `${process.env.NEXT_PUBLIC_FRONTENDS_URL}/canvas/badge-contract/${address}`
    return generateShareTwitterURL(viewURL, `Find out your eligibility to mint a ${badgeForMint.name} badge on Scroll Canvas.`)
  }, [address, badgeForMint])

  const badgeId = useMemo(() => userBadges.find(item => item?.badgeContract === address)?.id, [userBadges, address])

  useEffect(() => {
    if (!userBadges.length && isOwned) {
      queryUserBadges(provider, walletCurrentAddress)
    }
  }, [isOwned, userBadges])

  const handleMint = async () => {
    try {
      changeIsBadgeMinting(address, true)

      let result = await mintBadge(provider, walletCurrentAddress, badgeForMint)
      if (result) {
        router.replace(`/canvas/badge/${result}`)
      }
    } catch (e) {
      alertWarning(
        <>
          {e.message}{" "}
          {e.link && (
            <a href={e.link} target="_blank" rel="noopener noreferrer">
              🔗
            </a>
          )}
        </>,
      )
    } finally {
      changeIsBadgeMinting(address, false)
    }
  }

  const renderTip = () => {
    if (!isL2) {
      return null
    } else if (isBadgeMinting.get(address)) {
      return (
        <>
          <CircularProgress sx={{ color: "#A5A5A5" }} size={18}></CircularProgress>
          <Typography sx={{ color: "#A5A5A5 !important", fontSize: ["1.6rem", "1.8rem"], lineHeight: ["2.4rem", "2.8rem"], fontWeight: 500 }}>
            Minting...
          </Typography>
        </>
      )
    } else if (profileMinted === false) {
      return (
        <>
          <SvgIcon sx={{ color: "#FAD880", fontSize: "2.4rem" }} component={WarningSvg} inheritViewBox></SvgIcon>
          <Typography sx={{ color: "#FAD880 !important", fontSize: ["1.6rem", "1.8rem"], lineHeight: ["2.4rem", "2.8rem"], fontWeight: 500 }}>
            You need a Scroll Canvas before minting a badge.
          </Typography>
        </>
      )
    } else if (isEligible === undefined || queryUserBadgesLoading) {
      return (
        <>
          <CircularProgress sx={{ color: "#A5A5A5" }} size={18}></CircularProgress>
          <Typography sx={{ color: "#A5A5A5 !important", fontSize: ["1.6rem", "1.8rem"], lineHeight: ["2.4rem", "2.8rem"], fontWeight: 500 }}>
            Checking...
          </Typography>
        </>
      )
    } else if (profileMinted && isOwned === false && isEligible) {
      if (badgeForMint.airdrop) {
        return (
          <>
            <SvgIcon sx={{ color: "#85E0D1", fontSize: "2.4rem" }} component={ValidSvg} inheritViewBox></SvgIcon>
            <Typography sx={{ color: "#85E0D1 !important", fontSize: ["1.6rem", "1.8rem"], lineHeight: ["2.4rem", "2.8rem"], fontWeight: 500 }}>
              You are eligible. Your badge will be airdroped by the issuer.
            </Typography>
          </>
        )
      }
      return (
        <>
          <SvgIcon sx={{ color: "#85E0D1", fontSize: "2.4rem" }} component={ValidSvg} inheritViewBox></SvgIcon>
          <Typography sx={{ color: "#85E0D1 !important", fontSize: ["1.6rem", "1.8rem"], lineHeight: ["2.4rem", "2.8rem"], fontWeight: 500 }}>
            You are eligible to mint the badge
          </Typography>
        </>
      )
    } else if (profileMinted && isOwned === false && !isEligible) {
      if (badgeForMint.airdrop) {
        return (
          <>
            <SvgIcon sx={{ color: "primary.main", fontSize: "2.4rem" }} component={WarningSvg} inheritViewBox></SvgIcon>
            <Typography sx={{ color: "#FF684B !important", fontSize: ["1.6rem", "1.8rem"], lineHeight: ["2.4rem", "2.8rem"], fontWeight: 500 }}>
              This is an airdrop-only badge. Selected account is not eligible.
            </Typography>
          </>
        )
      }
      return (
        <>
          <SvgIcon sx={{ color: "primary.main", fontSize: "2.4rem" }} component={WarningSvg} inheritViewBox></SvgIcon>
          <Typography sx={{ color: "#FF684B !important", fontSize: ["1.6rem", "1.8rem"], lineHeight: ["2.4rem", "2.8rem"], fontWeight: 500 }}>
            Selected account is not eligible to mint the badge yet.
          </Typography>
        </>
      )
    } else if (profileMinted && isOwned && badgeId) {
      return <NavLink href={`/canvas/badge/${badgeId}`} replace></NavLink>
    }
    return null
  }

  const renderAction = () => {
    if (!walletCurrentAddress) {
      return (
        <ScrollButton
          sx={theme => ({
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 3",
            },
          })}
          color="primary"
          onClick={connect}
        >
          Connect wallet
        </ScrollButton>
      )
    } else if (!isL2) {
      return (
        <ScrollButton
          sx={theme => ({
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 3",
            },
          })}
          color="primary"
          onClick={() => switchNetwork(CHAIN_ID.L2)}
        >
          Switch to Scroll
        </ScrollButton>
      )
    } else if (!profileMinted) {
      return (
        <ScrollButton
          sx={theme => ({
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 3",
            },
          })}
          color="primary"
          href="/canvas/mint"
        >
          Mint Scroll Canvas
        </ScrollButton>
      )
    } else if (isOwned) {
      return (
        <ScrollButton
          sx={theme => ({
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 3",
            },
          })}
          color="primary"
          href="/canvas"
        >
          Visit Scroll Canvas
        </ScrollButton>
      )
    } else if (profileMinted === true && !isOwned) {
      return (
        <ScrollButton
          sx={theme => ({
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 3",
            },
          })}
          color="primary"
          onClick={handleMint}
          loading={isBadgeMinting.get(address)}
          gloomy={!isEligible || badgeForMint.airdrop}
        >
          {isBadgeMinting.get(address) ? "Minting" : "Mint now"}
        </ScrollButton>
      )
    }
    return null
  }

  if (isFetched && !badgeForMint.badgeContract) {
    return <NavLink href="/404"></NavLink>
  }
  return (
    <BadgeDetail detail={badgeForMint} loading={isFetching} property={["issuer"]} breadcrumb={isNewTab ? null : <Back></Back>}>
      {renderAction()}

      {badgeForMint.thirdParty ? (
        <ScrollButton
          color="secondary"
          sx={theme => ({
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 2",
            },
          })}
          href={badgeForMint.issuer?.origin}
          target="_blank"
        >
          Visit {badgeForMint.issuer?.name}
        </ScrollButton>
      ) : (
        <ScrollButton
          color="secondary"
          sx={theme => ({
            [theme.breakpoints.down("sm")]: {
              gridColumn: "span 2",
            },
          })}
          href="/canvas"
        >
          Visit my canvas
        </ScrollButton>
      )}

      <Link external href={shareBadgeURL}>
        <SvgIcon sx={{ fontSize: "3.2rem", color: "primary.contrastText" }} component={ShareSvg} inheritViewBox></SvgIcon>
      </Link>
      <Stack sx={{ gridColumn: "span 3", gridRow: "2 / 3" }} direction="row" gap="0.8rem" alignItems="center">
        {renderTip()}
      </Stack>
    </BadgeDetail>
  )
}

export default BadgeContractDetail
