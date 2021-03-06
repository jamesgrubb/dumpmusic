import React from "react"
import MusicPlayerProvider from "./src/context/MusicPlayerContext"
import { MediaContextProvider } from "./src/Media"
import GlobalStyles from "./src/GlobalStyles"

export const wrapPageElement = ({ element }) => (
  <MediaContextProvider>
    <MusicPlayerProvider><GlobalStyles />{element}</MusicPlayerProvider>
  </MediaContextProvider>
)
