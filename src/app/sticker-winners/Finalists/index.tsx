"use client"

import { useRef } from "react"

import { Box, Typography } from "@mui/material"

import Gallery from "@/app/sticker-vote/components/Gallery"
import Title from "@/app/sticker-vote/components/Title"
import FinalistsSvg from "@/assets/svgs/sticker-vote/finalists.svg"
import Top2_5Svg from "@/assets/svgs/sticker-winners/top2-5.svg"
import WinnerSvg from "@/assets/svgs/sticker-winners/winner.svg"
import Link from "@/components/Link"
import ScrollExpandedBg from "@/components/ScrollExpandedBg"
import { STICKER_CONTEST_NOTION_URL } from "@/constants"

import Winner from "./Winner"
import data from "./data.json"

const StickerContest = () => {
  const contentRef = useRef<HTMLElement>(null)

  return (
    <ScrollExpandedBg sx={{ pt: ["3.6rem", "7.2rem"] }} anchorEl={contentRef} bottomColor="brand">
      <Box
        ref={contentRef}
        sx={{
          position: "relative",
          width: "100%",
          px: ["2rem", "2rem", "6rem"],
          pb: ["6rem", "12rem"],
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "& p.MuiTypography-root": { color: theme => `${(theme as any).vars.palette.primary.contrastText} !important` },
        }}
      >
        <Typography sx={{ fontSize: ["1.6rem", "2.4rem"], lineHeight: ["2.4rem", "3.2rem"], textAlign: "center", maxWidth: "100rem" }}>
          Thank you all creators! Here are the result of our contest which are voted by our community. Check out{" "}
          <Link className="text-same-size whitespace-nowrap" underline="always" href={STICKER_CONTEST_NOTION_URL} external>
            the contest details
          </Link>{" "}
          here.
        </Typography>
        <Title content={WinnerSvg}></Title>
        <Winner data={data.winner}></Winner>
        <Title content={Top2_5Svg}></Title>
        <Gallery data={data["top2-5"]}></Gallery>
        <Title content={FinalistsSvg}></Title>
        <Gallery data={data.remaining}></Gallery>
      </Box>
    </ScrollExpandedBg>
  )
}

export default StickerContest
