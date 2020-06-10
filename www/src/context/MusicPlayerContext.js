import React, { useState, useEffect } from "react"

export const MusicPlayerContext = React.createContext([{}, () => {}])

const MusicPlayerProvider = ({ children }) => {
  useEffect(() => {
    setState(state => ({ ...state, audioPlayer: new Audio() }))
  }, [])
  const [state, setState] = useState({
    currentTrackIndex: null,
    isPlaying: false,
  })
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {children}
    </MusicPlayerContext.Provider>
  )
}

export default MusicPlayerProvider
