"use client"

import { useEffect, useState, useCallback } from "react"
import Img from "react-cool-img"

import { CircularProgress, Modal } from "@mui/material"

import useCheckViewport from "@/hooks/useCheckViewport"

const ImageViewer = ({ src, alt, imageStyle, onClose, ...restProps }) => {
  const { isMobile } = useCheckViewport()
  const [style, setStyle] = useState({})
  const [loading, setLoading] = useState(true)

  // Close modal on Escape key press
  useEffect(() => {
    const handleEscape = e => {
      if (e.key === "Escape") {
        handleClose()
      }
    }
    window.addEventListener("keydown", handleEscape)
    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [])

  // Adjust image size based on aspect ratio and viewport
  useEffect(() => {
    const handleAdjustImage = () => {
      if (imageStyle?.aspectRatio && window.innerWidth / window.innerHeight > imageStyle.aspectRatio) {
        setStyle({ height: `calc(100% - ${isMobile ? "2rem" : "10rem"})` })
      } else {
        setStyle({ width: `calc(100% - ${isMobile ? "2rem" : "10rem"})` })
      }
    }
    handleAdjustImage()

    window.addEventListener("resize", handleAdjustImage)
    return () => {
      window.removeEventListener("resize", handleAdjustImage) // Fixed cleanup
    }
  }, [imageStyle, isMobile])

  // Handle modal close and reset loading state
  const handleClose = useCallback(() => {
    setLoading(true)
    onClose()
  }, [onClose])

  return (
    <Modal
      sx={{ display: "flex", justifyContent: "center", alignItems: "center", py: "4rem" }}
      onClose={handleClose}
      {...restProps}
    >
      <>
        <Img
          src={src}
          alt={alt}
          style={{ display: loading ? "none" : "inline-block", ...style }}
          onLoad={() => setLoading(false)}
        />
        {loading && <CircularProgress size={isMobile ? 36 : 50} />}
      </>
    </Modal>
  )
}

export default ImageViewer
