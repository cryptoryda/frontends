import Image from "next/image"
import { notFound } from "next/navigation"

import { Container, Typography } from "@mui/material"

import ScrollySad from "@/assets/images/common/scrolly-sad.png"
import { genMeta } from "@/utils/route"

export const generateMetadata = genMeta(() => ({
  titleSuffix: "Scroll Sessions Restricted",
  relativeURL: "/sessions-restricted",
}))

const SessionsRestricted = () => {
  if (process.env.NEXT_PUBLIC_SCROLL_ENVIRONMENT === "Sepolia") {
    notFound()
  }
  return (
    <Container
      sx={{
        height: ["calc(100vh - 6.2rem - 5rem)", "calc(100vh - 6.5rem - 13.4rem )"],
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: ["1.6rem", "3.2rem"],
      }}
    >
      <Image src={ScrollySad} alt="sessions-restricted" width={120} height={120}></Image>
      <Typography sx={{ fontSize: ["1.8rem", "2.4rem"], lineHeight: ["2.8rem", "3.2rem"], fontWeight: 600, textAlign: "center" }}>
        Scroll Sessions is not available<br></br>in your region.
      </Typography>
    </Container>
  )
}

export default SessionsRestricted
