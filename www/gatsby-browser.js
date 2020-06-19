import React from "react"
import MusicPlayerProvider from "./src/context/MusicPlayerContext"
import GlobalStyles from "./src/GlobalStyles"
import { MediaContextProvider } from "./src/Media"
export const wrapPageElement = ({ element }) => {
  return (
    <MediaContextProvider>
      <MusicPlayerProvider>
      <GlobalStyles />
        {element}
      </MusicPlayerProvider>
    </MediaContextProvider>
  )
}

// export const wrapPageElement = ({element}) => {
//   <GlobalStyles />
//   {element}
// }
