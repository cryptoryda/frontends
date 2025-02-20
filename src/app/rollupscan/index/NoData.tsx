import { Box, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"

const Container = styled(Box)(() => ({
  marginTop: "12rem",
  marginBottom: "60rem",
  textAlign: "center",
})) as typeof Box

const NoResultsTypography = styled(Typography)(({ theme }) => ({
  fontFamily: "TransSansPremium",
  fontWeight: "500",
  fontSize: "2rem",
  lineHeight: "2.4rem",
  marginTop: "1rem",
  marginBottom: "1rem",
  color: theme.vars.palette.text.primary,
}))

const NoData = () => {
  return (
    <Container>
      <img alt="nodata" className="w-[100px]" src="/imgs/rollup/nodata.png" />
      <NoResultsTypography>No results found</NoResultsTypography>
      <Typography variant="body1" sx={{ color: "text.secondary" }}>
        We couldn’t find any result matching your search.
      </Typography>
      {/* <TryAgain> Try Again</TryAgain> */}
    </Container>
  )
}

export default NoData
