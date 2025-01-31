import { useState } from "react"
import { makeStyles } from "tss-react/mui"

import { Typography } from "@mui/material"
import { Stack } from "@mui/system"

import ImageViewer from "@/app/sticker-vote/components/ImageViewer"
import StickerPicture from "@/app/sticker-vote/components/StickerPicture"
import SuccessionToView, { SuccessionItem } from "@/components/Motion/SuccessionToView"
import useCheckViewport from "@/hooks/useCheckViewport"

const useStyles = makeStyles()(theme => ({
  flex: {
    display: "flex",
    gap: "7.2rem",
    padding: "0 10rem",
    "& > *": {
      flex: 1,
    },
    [theme.breakpoints.down("lg")]: {
      padding: "0 6rem",
      gap: "4.8rem",
    },

    [theme.breakpoints.down("md")]: {
      padding: 0,
      gap: "2rem",
    },

    [theme.breakpoints.down("sm")]: {
      width: "100%",
      flexDirection: "column",
      gap: "1.6rem",
    },
  },
}))

const Winner = ({ data }) => {
  const { author, images, bg } = data
  const { classes } = useStyles()
  const { isMobile } = useCheckViewport()
  const [image, setImage] = useState({ src: "", alt: "", style: {} })

  const handleViewImage = (value) => setImage(value)
  const handleClose = () => setImage({ src: "", alt: "", style: {} })

  return (
    <>
      <Stack direction="column" sx={{ width: "100%" }} alignItems="center">
        <Typography
          sx={{
            fontSize: ["2rem", "3.2rem"],
            lineHeight: ["3.2rem", "4rem"],
            fontWeight: 600,
            mb: "1.6rem",
            textAlign: "center",
          }}
        >
          Finalist - {author}
        </Typography>
        <SuccessionToView className={classes.flex} threshold={isMobile ? 0 : 0.1}>
          {images.map((src, index) => (
            <SuccessionItem key={index}>
              <StickerPicture
                src={src}
                alt={`${author}-${index}`}
                bgColor={Array.isArray(bg) ? bg[index] : bg}
                onClick={handleViewImage}
              />
            </SuccessionItem>
          ))}
        </SuccessionToView>
      </Stack>
      <ImageViewer
        src={image.src}
        alt={image.alt}
        imageStyle={image.style}
        open={Boolean(image.src)}
        onClose={handleClose}
      />
    </>
  )
}

export default Winner
