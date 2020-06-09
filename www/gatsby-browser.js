import React from "react"
import { MusicPlayerProvider } from "./src/context/MusicPlayerContext"

export const wrapRootElement = ({ element }) => {
  return <MusicPlayerProvider>{element}</MusicPlayerProvider>
}
