import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"
import MusicPlayerProvider from "../../context/MusicPlayerContext"
import useMusicPlayer from "../../hooks/useMusicPlayer"

const Single = ({ name, tracks }) => {
  const {
    stopPlay,
    playTrack,
    currentTrackName,
    isPlaying,
    currentTrackIndex,
    makeAudio,
  } = useMusicPlayer()

  const [state, setState] = useContext(MusicPlayerContext)

  useEffect(() => {
    stopPlay()
    makeAudio(tracks)
    setState(state => ({ ...state, tracks: tracks, currentTrackIndex: 0 }))
  }, [])

  console.log("Single -> state", state)
  return (
    <MusicPlayerProvider>
      <h2>{name}</h2>

      <ul>
        {tracks.map((track, i) => (
          <li key={track._id}>
            <div>
              <strong>{track.name}</strong>

              <button onClick={() => playTrack(i)}>
                {currentTrackName === track.name && isPlaying
                  ? "PAUSE"
                  : "PLAY"}
              </button>
              <p>current track index {currentTrackIndex}</p>
              <p>{(track.duration && track.duration) || "Loading..."}</p>
            </div>
          </li>
        ))}
      </ul>
      <marquee behavior="scroll" direction="left">
        {currentTrackName}
      </marquee>
      <Link to="/singles">Back</Link>
    </MusicPlayerProvider>
  )
}

export default Single
