import { makeStyles } from "tss-react/mui"

import { Alert as MuiAlert } from "@mui/material"

import ErrorSvg from "@/assets/svgs/bridge/alert-error.svg"
import SuccessSvg from "@/assets/svgs/bridge/alert-success.svg"

const useStyles = makeStyles()(() => ({
  root: {
    borderRadius: "1rem",
    padding: "1.2rem 1.6rem",
  },
  standardError: {
    backgroundColor: "#FFE1DB",
    color: "#FF684B",
    fontWeight: 600,
  },
  standardSuccess: {
    backgroundColor: "#DFFCF8",
    color: "#0F8E7E",
    fontWeight: 600,
  },
  icon: {
    marginRight: 8,
  },
  message: {
    fontFamily: "var(--default-font-family) !important",
    lineHeight: 1.5,
    fontWeight: 600,
  },
}))

const Alert = props => {
  const { children, ...restProps } = props

  const { classes } = useStyles()

  return (
    <MuiAlert
      iconMapping={{
        success: <SuccessSvg className="w-[3.2rem] h-auto" />,
        error: <ErrorSvg className="w-[3.2rem] h-auto" />,
      }}
      classes={{
        root: classes.root,
        icon: classes.icon,
        standardError: classes.standardError,
        standardSuccess: classes.standardSuccess,
        message: classes.message,
      }}
      {...restProps}
    >
      {children}
    </MuiAlert>
  )
}

export default Alert
