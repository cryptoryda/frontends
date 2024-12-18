import { Box } from "@mui/material"

import { genMeta } from "@/utils/route"

import Header from "./Header"
import Mission from "./Mission"
import News from "./News"
import Perks from "./Perks"
import Positions from "./Positions"
import WorkApproach from "./WorkApproach"

export const generateMetadata = genMeta(() => ({
  titleSuffix: "Join Us",
  relativeURL: "/join-us",
}))

const Career = () => {
  return (
    <Box sx={{ marginTop: "-6.5rem", paddingTop: "6.5rem", overflow: "hidden" }}>
      <Header />
      <Mission />
      <WorkApproach />
      <Perks />
      <News />
      <Positions />
    </Box>
  )
}

export default Career
