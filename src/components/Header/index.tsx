"use client"

import { usePathname } from "next/navigation"
import React, { useEffect, useState } from "react"

import { AppBar, Slide } from "@mui/material"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import { styled } from "@mui/system"

import useCheckViewport from "@/hooks/useCheckViewport"

import { navigations } from "./constants"
import DesktopNav from "./desktop_header"
import MobileNav from "./mobile_header"

const AppBarStyled = styled(AppBar)(() => ({
  boxShadow: "none",
  position: "sticky",
  backgroundColor: "transparent",
  paddingRight: "0 !important",
}))

interface Props {
  window?: () => Window
  children: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children } = props
  const trigger = useScrollTrigger()
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function Header() {
  const { isLandscape } = useCheckViewport()
  const pathname = usePathname()

  const [currentMenu, setCurrentMenu] = useState<Array<string>>([])

  useEffect(() => {
    const rootMenu = findRootMenu(pathname, navigations, [])
    setCurrentMenu(rootMenu)
  }, [pathname])

  const findRootMenu = (pathname, menuList: Array<any>, result) => {
    for (const menuItem of menuList) {
      if (menuItem.href && pathname.includes(menuItem.href)) {
        if (menuItem?.key) {
          result.push(menuItem.key as string)
        }
        if (menuItem?.rootKey) {
          result.push(menuItem.rootKey as string)
        }
        // return menuKey
      } else if (menuItem.children) {
        findRootMenu(pathname, menuItem.children, result)
      } else if (menuItem.items) {
        findRootMenu(pathname, menuItem.items, result)
      }
    }
    return result
  }

  if (isLandscape) {
    return (
      <HideOnScroll>
        <AppBarStyled>
          <DesktopNav currentMenu={currentMenu} />
        </AppBarStyled>
      </HideOnScroll>
    )
  } else {
    return (
      <AppBarStyled>
        <MobileNav currentMenu={currentMenu} />
      </AppBarStyled>
    )
  }
}
