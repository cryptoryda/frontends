import { Skeleton, Stack, Typography } from "@mui/material"
import { useTheme } from "@mui/material/styles"

import NumberTypography from "@/components/NumberTypography"

const Statistic = props => {
  const { label, children, loading } = props
  const theme = useTheme()

  return (
    <Stack
      direction="column"
      sx={{
        flex: 1,
        borderRadius: ["0.8rem", "1.6rem"],
        p: ["0.8rem 1.2rem", "1.6rem 1.6rem"],
        minWidth: ["auto", "20rem"],
        backgroundColor: theme => theme.vars.palette.themeBackground.normal,
      }}
    >
      <Typography
        sx={{
          fontSize: ["1.4rem", "1.8rem"],
          lineHeight: ["2rem", "2.8rem"],
          fontWeight: 600,
          textAlign: "center",
          whiteSpace: ["pre-wrap", "pre-wrap", "nowrap"],
          [theme.breakpoints.down("md")]: {
            flex: 1,
            display: "inline-flex",
            alignItems: "center",
            alignSelf: "center",
          },
        }}
      >
        {label}
      </Typography>
      <NumberTypography
        sx={{ fontSize: ["2rem", "3.2rem"], lineHeight: ["3.2rem", "4rem"], fontWeight: 600, textAlign: "center", whiteSpace: "nowrap" }}
      >
        {loading ? <Skeleton sx={{ borderRadius: "1rem", width: "50%", display: "inline-block" }}></Skeleton> : <>{children}</>}
      </NumberTypography>
    </Stack>
  )
}

export default Statistic
