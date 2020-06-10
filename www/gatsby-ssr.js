const React = require("react")
const MusicPlayerProvider = require("./src/context/MusicPlayerContext").default

exports.wrapRootElement = ({ element }) => (
  <MusicPlayerProvider>{element}</MusicPlayerProvider>
)
