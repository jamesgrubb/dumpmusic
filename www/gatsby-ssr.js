const React = require("react")
const MusicPlayerProvider = require("./src/context/MusicPlayerContext").default
const MediaContextProvider = require("./src/Media").default

exports.wrapRootElement = ({ element }) => (
  <MediaContextProvider>
    <MusicPlayerProvider>{element}</MusicPlayerProvider>
  </MediaContextProvider>
)
