import { usePathname } from "next/navigation"
import { useMemo } from "react"

import { Stack } from "@mui/material"
import { styled } from "@mui/system"

import { isProduction } from "@/utils"

const AnnouncementStack = styled<any>(Stack, {
  shouldForwardProp: prop => prop !== "production",
})(({ theme, production }) => ({
  lineHeight: "2.6rem",
  background: production ? "#62e6d4" : (theme as any).vars.palette.primary.main,
  textAlign: "center",
  color: production ? (theme as any).vars.palette.text.primary : (theme as any).vars.palette.primary.contrastText,
  fontSize: "1.6rem",
  padding: "1.2rem",
  display: "inline-block",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    lineHeight: "2rem",
  },
}))

const Announcement = () => {
  const pathname = usePathname()

  const isHome = pathname === "/"
  const isPortal = pathname === "/portal"

  const announcementContent = useMemo(() => {
    if (isProduction && (isHome || isPortal)) {
      return (
        <>
          Scroll {process.env.NEXT_PUBLIC_SCROLL_ENVIRONMENT} is now live. <strong>Try it!</strong>
        </>
      )
    } else if (!isProduction) {
      return (
        <>
          You are on the Scroll {process.env.NEXT_PUBLIC_SCROLL_ENVIRONMENT} Testnet website. Return to <strong>Mainnet</strong>
        </>
      )
    }
    return null
  }, [isProduction, isHome, isPortal])

  const rightHref = useMemo(() => {
    if (isProduction && (isHome || isPortal)) {
      return "/portal"
    } else if (!isProduction) {
      return "https://scroll.io/"
    }
    return ""
  }, [isProduction, isHome, isPortal])

  return (
    announcementContent && (
      <a href={rightHref} rel="noopener noreferrer">
        <AnnouncementStack production={isProduction}>{announcementContent}</AnnouncementStack>
      </a>
    )
  )
}

export default Announcement
