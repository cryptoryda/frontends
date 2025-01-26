"use client"

import { BrowserProvider, Contract, JsonRpcProvider, ethers } from "ethers"
import { createContext, useContext, useEffect, useState } from "react"

import ProfileRegistryABI from "@/assets/abis/CanvasProfileRegistry.json"
import { CHAIN_ID, RPC_URL } from "@/constants"
import { useRainbowContext } from "@/contexts/RainbowProvider"

const PROFILE_REGISTRY_ADDRESS = process.env.NEXT_PUBLIC_PROFILE_REGISTRY_ADDRESS

type CanvasContextProps = {
  unsignedProfileRegistryContract: any
  profileRegistryContract: any
  publicProvider: any
}

const CanvasContext = createContext<CanvasContextProps | null>(null)

// only include contract instance && public provider
const CanvasContextProvider = ({ children }: any) => {
  const { provider, chainId } = useRainbowContext()

  const [publicProvider, setPublicProvider] = useState<JsonRpcProvider | BrowserProvider | null>(null)

  const [profileRegistryContract, setProfileRegistryContract] = useState<Contract>()
  const [unsignedProfileRegistryContract, setUnsignedProfileRegistryContract] = useState<Contract>()

  const initializeInstanceWrapped = async provider => {
    const signer = await provider.getSigner(0)
    const profileRegistryContract = new ethers.Contract(PROFILE_REGISTRY_ADDRESS, ProfileRegistryABI, signer)
    const unsignedProfileRegistryContract = new ethers.Contract(PROFILE_REGISTRY_ADDRESS, ProfileRegistryABI, provider)
    setProfileRegistryContract(profileRegistryContract)
    setUnsignedProfileRegistryContract(unsignedProfileRegistryContract)
  }

  const initializeRPCInstance = async provider => {
    const instance = new ethers.Contract(PROFILE_REGISTRY_ADDRESS, ProfileRegistryABI, provider)
    setUnsignedProfileRegistryContract(instance)
  }

  useEffect(() => {
    if (provider && chainId === CHAIN_ID.L2) {
      initializeInstanceWrapped(provider)
      setPublicProvider(provider)
    } else {
      const instance = new JsonRpcProvider(RPC_URL.L2)
      setPublicProvider(instance)
      initializeRPCInstance(instance)
    }
  }, [provider, chainId])

  return (
    <CanvasContext
      value={{
        unsignedProfileRegistryContract,
        profileRegistryContract,
        publicProvider,
      }}
    >
      {children}
    </CanvasContext>
  )
}

export function useCanvasContext() {
  const ctx = useContext(CanvasContext)
  if (!ctx) {
    throw new Error("useCanvasContext must be used within CanvasContextProvider")
  }
  return ctx
}

export default CanvasContextProvider
