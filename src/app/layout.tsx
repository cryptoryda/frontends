import type { Metadata } from "next"
import { headers } from "next/headers"
import React from "react"

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"

import GlobalComponents from "@/components/GlobalComponents"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import ScrollToTop from "@/components/ScrollToTop"
// import SentrySetting from "@/components/SentrySetting"
import WebVitals from "@/components/WebVitals"
import { DEFAULT_METADATA } from "@/constants/route"
import BridgeContextProvider from "@/contexts/BridgeContextProvider"
import CanvasContextProvider from "@/contexts/CanvasContextProvider"
import RainbowProvider from "@/contexts/RainbowProvider"
import { VersionChecker } from "@/hooks/useVersionCheck"
import ScrollThemeProvider from "@/theme"
import { findCurrentRoute } from "@/utils/route"

import "./globals.css"

export async function generateMetadata(): Promise<Metadata> {
  const { pathname, origin } = new URL(headers().get("x-url")!)
  const route = findCurrentRoute(pathname)
  const title = `Scroll${route ? " – " + route.name : null}`
  const description = route.description || DEFAULT_METADATA.description
  const ogImg = route.ogImg || DEFAULT_METADATA.ogImg
  const twitterImg = route.twitterImg || route.ogImg || DEFAULT_METADATA.ogImg

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: ["layer 2", "ethereum", "zero knowledge proof", "scalability", "ZKP", "l2", "EVM compatible", "zk rollup"],
    openGraph: {
      title,
      description,
      siteName: title,
      url: pathname,
      images: [ogImg],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title,
      description,
      images: [twitterImg],
    },
    icons: {
      apple: "/logo.png",
    },
    // See https://developers.google.com/web/fundamentals/web-app-manifest/
    manifest: "/manifest.json",
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href={process.env.NEXT_PUBLIC_API_BASE_URI} crossOrigin="anonymous" />
        <link rel="dns-prefetch" href={process.env.NEXT_PUBLIC_API_BASE_URI} crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <AppRouterCacheProvider options={{ key: "css" }}>
          <ScrollThemeProvider>
            <VersionChecker>
              <RainbowProvider>
                <BridgeContextProvider>
                  <CanvasContextProvider>{children}</CanvasContextProvider>
                  <GlobalComponents></GlobalComponents>
                </BridgeContextProvider>
              </RainbowProvider>
            </VersionChecker>
            <ScrollToTop />
          </ScrollThemeProvider>
        </AppRouterCacheProvider>
        {process.env.NODE_ENV === "production" && (
          <>
            <GoogleAnalytics></GoogleAnalytics>
            <WebVitals></WebVitals>
            {/* <SentrySetting></SentrySetting> */}
          </>
        )}
      </body>
    </html>
  )
}
