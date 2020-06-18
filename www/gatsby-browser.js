import React from "react"
import MusicPlayerProvider from "./src/context/MusicPlayerContext"
import GlobalStyles from "./src/GlobalStyles"

export const wrapRootElement = ({ element }) => {
  return (
    <MusicPlayerProvider>
      <GlobalStyles />
      {element}
    </MusicPlayerProvider>
  )
}
