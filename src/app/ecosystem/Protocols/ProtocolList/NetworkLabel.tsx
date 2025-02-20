import { makeStyles } from "tss-react/mui"

import { Chip } from "@mui/material"

const useStyles = makeStyles()(theme => ({
  root: {
    height: "auto",
    padding: "0.4rem 1.2rem",
    borderRadius: "1.6rem",
    backgroundColor: theme.vars.palette.themeBackground.light,
  },
  label: {
    fontSize: "1.6rem",
    lineHeight: 1.5,
    fontWeight: 600,
    padding: 0,
    color: "#84623A",
  },
}))

const NetworkLabel = props => {
  const { children, ...restProps } = props
  const { classes } = useStyles()
  return <Chip classes={{ root: classes.root, label: classes.label }} label={children} {...restProps}></Chip>
}
export default NetworkLabel
