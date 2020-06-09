const MusicPlayerProvider = require("./src/context/MusicPlayerContext").default

exports.wrapRootElement = ({ element }) => (
  <MusicPlayerProvider>{element}</MusicPlayerProvider>
)
