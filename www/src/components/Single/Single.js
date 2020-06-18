import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"
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
    setState(state => ({ ...state, tracks: tracks, currentTrackIndex: null }))
  }, [])

  console.log("Single -> state", state)
  return (
    <>
      <h2>{name}</h2>

      <ul>
        {tracks.map((track, index) => (
          <li key={track._id}>
            <div>
              <strong>{track.name}</strong>

              <button onClick={() => playTrack(index)}>
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
    </>
  )
}

export default Single
