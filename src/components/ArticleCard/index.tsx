import { useRouter } from "next/navigation"

import { Box, Typography } from "@mui/material"
import { styled } from "@mui/system"

import WebpImage from "@/components/WebpImage"

const ArticleTitle = styled(Typography)(() => ({
  fontWeight: 700,
  lineHeight: "2.8rem",
  display: "table-cell",
  verticalAlign: "bottom",
  marginBottom: "0.6rem",
}))

const Card = styled(Box)(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "3rem",
  textAlign: "left",
  margin: "0 auto",
  overflow: "hidden",
  cursor: "pointer",
  color: (theme as any).vars.palette.text.primary,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.01)",
  },
  "&:hover *": {
    cursor: "pointer !important",
  },
  [theme.breakpoints.down("lg")]: {
    gap: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
  },
}))

const ArticleDate = styled(Typography)(({ theme }) => ({
  marginBottom: "0.5rem",
  fontSize: "1.4rem",
  fontWeight: 500,
  [theme.breakpoints.down("md")]: {
    marginTop: "1.4rem",
  },
}))

const ArticleSummary = styled(Typography)(({ theme }) => ({
  marginBottom: "2.2rem",
  overflow: "hidden",
  maxWidth: "44rem",
  lineHeight: "2.8rem",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}))

const ArticleInfo = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    gridRow: 2,
  },
}))

const ArticlePoster = styled(WebpImage)(({ theme }) => ({
  width: "100%",
  maxWidth: "51.7rem",
  height: "fit-content",
  borderRadius: "2.5rem",
  justifySelf: "flex-end",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    gridRow: 1,
    borderRadius: "1.5rem",
  },
}))

const ArticleCard = props => {
  const { blog } = props
  const router = useRouter()
  const handleClick = () => {
    if (blog.externalLink) {
      window.location.href = blog.externalLink
    } else {
      router.push("/blog/" + blog.id)
    }
  }

  return (
    <Card onClick={handleClick}>
      <ArticleInfo>
        <ArticleTitle variant="H4">{blog.title}</ArticleTitle>
        <ArticleSummary variant="Body3">{blog.summary}</ArticleSummary>
        <ArticleDate>
          {blog.date} ・ {blog.type}
        </ArticleDate>
      </ArticleInfo>
      <ArticlePoster src={blog.posterImg}></ArticlePoster>
    </Card>
  )
}

export default ArticleCard
