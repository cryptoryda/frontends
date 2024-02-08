import { useRef } from "react"
import { makeStyles } from "tss-react/mui"

import {
  AppBar, // Slide,useScrollTrigger
  CircularProgress,
  Dialog,
  IconButton,
  Stack,
  SvgIcon,
  Toolbar,
  Typography,
} from "@mui/material"

import CloseSvg from "@/assets/svgs/nft/flow-close.svg"
import ScrollLogo from "@/components/ScrollLogo"
import { SCROLL_ORIGINS_NFT } from "@/constants"

import MintFlow from "../flow"

const useStyles = makeStyles()(theme => ({
  paper: {
    backgroundColor: (theme as any).vars.palette.text.primary,

    [theme.breakpoints.down("sm")]: {
      margin: 0,
    },
  },
}))

const MintFlowDialog = props => {
  const scrollRef = useRef()
  const { classes } = useStyles()

  // const trigger = useScrollTrigger({ target: scrollRef?.current })
  // console.log(trigger, "trigger")
  return (
    <Dialog PaperProps={{ ref: scrollRef }} classes={{ paper: classes.paper }} fullScreen open={props.open} {...props}>
      {/* <Slide appear={false} direction="down" in={!trigger}> */}
      <AppBar
        sx={{
          position: "sticky",
          top: 0,
          backgroundColor: theme => (theme as any).vars.palette.text.primary,
          paddingRight: "0 !important",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: ["2rem", "2rem", "6rem"] }}>
          <ScrollLogo light></ScrollLogo>
          <Typography
            sx={{
              fontSize: ["1.6rem", "1.8rem"],
              fontWeight: 600,
              color: theme => (theme as any).vars.palette.primary.contrastText,
            }}
          >
            Mint {SCROLL_ORIGINS_NFT}
          </Typography>
          <Stack direction="row" justifyContent="flex-end" sx={{ width: "8rem" }}>
            {props.minting ? (
              <CircularProgress color="inherit" size={24} />
            ) : (
              <IconButton onClick={props.onClose}>
                <SvgIcon sx={{ fontSize: "2.4rem" }} component={CloseSvg} inheritViewBox></SvgIcon>
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </AppBar>
      {/* </Slide> */}

      <MintFlow scrollTarget={scrollRef.current}></MintFlow>
    </Dialog>
  )
}

export default MintFlowDialog
