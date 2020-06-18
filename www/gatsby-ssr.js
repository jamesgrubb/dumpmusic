import React from "react"
import MusicPlayerProvider from "./src/context/MusicPlayerContext"
import { MediaContextProvider } from "./src/Media"

export const wrapRootElement = ({ element }) => (
  <MediaContextProvider>
    <MusicPlayerProvider>{element}</MusicPlayerProvider>
  </MediaContextProvider>
)
