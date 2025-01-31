import { notFound } from "next/navigation"

import { genMeta } from "@/utils/route"

import Finalists from "./Finalists"
import Header from "./Header"

export const generateMetadata = genMeta(() => ({
  titleSuffix: "Scroll Sticker Winners",
  relativeURL: "/sticker-winners",
  description: "Congratulations to the winners of the sticker contest.",
}))

const StickerContest = () => {
  const isSepolia = process.env.NEXT_PUBLIC_SCROLL_ENVIRONMENT === "Sepolia"
  if (isSepolia) notFound()

  return (
    <>
      <Header />
      <Finalists />
    </>
  )
}

export default StickerContest
