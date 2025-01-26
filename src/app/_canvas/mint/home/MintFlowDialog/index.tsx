import { useRef } from "react"
import { makeStyles } from "tss-react/mui"

import { AppBar, CircularProgress, Dialog, IconButton, Stack, SvgIcon, Toolbar, Typography } from "@mui/material"

import CloseSvg from "@/assets/svgs/nft/flow-close.svg"
import ScrollLogo from "@/components/ScrollLogo"
import useCanvasStore from "@/stores/canvasStore"

import MintFlow from "../../flow"

const useStyles = makeStyles()(theme => ({
  paper: {
    backgroundColor: theme.palette.text.primary,

    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
}))

const MintFlowDialog = props => {
  const { onClose } = props
  const scrollRef = useRef(undefined)
  const { classes } = useStyles()
  const { isProfileMinting, isFirstBadgeMinting } = useCanvasStore()

  return (
    <Dialog PaperProps={{ ref: scrollRef }} classes={{ paper: classes.paper }} fullScreen {...props}>
      <AppBar sx={{ position: "sticky", top: 0, backgroundColor: theme => theme.palette.text.primary, paddingRight: "0 !important" }}>
        <Toolbar sx={{ justifyContent: "space-between", px: ["2rem", "2rem", "6rem"], minHeight: "unset", height: ["6.2rem", "6.5rem"] }}>
          <ScrollLogo light></ScrollLogo>
          <Typography sx={{ fontSize: ["1.6rem", "1.8rem"], fontWeight: 600, color: theme => theme.palette.primary.contrastText }}>
            Mint Scroll Canvas
          </Typography>
          <Stack direction="row" sx={{ marginRight: "-0.8rem" }}>
            {isProfileMinting || isFirstBadgeMinting ? (
              <CircularProgress color="inherit" size={40} sx={{ p: "0.8rem" }} />
            ) : (
              <IconButton onClick={onClose}>
                <SvgIcon sx={{ fontSize: "2.4rem" }} component={CloseSvg} inheritViewBox></SvgIcon>
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </AppBar>

      <MintFlow scrollTarget={scrollRef.current}></MintFlow>
    </Dialog>
  )
}

export default MintFlowDialog
