import React, { useEffect, useState, useContext } from "react"
import { Link } from "gatsby"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"
import MusicPlayerProvider from "../../context/MusicPlayerContext"
import useMusicPlayer from "../../hooks/useMusicPlayer"

const Single = ({ name, tracks }) => {
  const {
    stopPlay,
    togglePlay,
    playTrack,
    currentTrackName,
    trackList,
    isPlaying,
    currentTrackIndex,
    makeAudio,
  } = useMusicPlayer()
  const [duration, setDuration] = useState([])
  const [state, setState] = useContext(MusicPlayerContext)
  // const audioRef = useRef([new Array(Number(trackList.length))])
  // function fmtMSS(s) {
  //   s = Math.floor(s)
  //   return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s
  // }

  useEffect(() => {
    stopPlay()
    makeAudio(tracks)
    setState(state => ({ ...state, tracks: tracks, currentTrackIndex: null }))
    // function getTrackLength(track) {
    //   track.addEventListener("loadedmetadata", function () {
    //     for (let i = 0; i <= tracks.length; i++) {
    //       const seconds = track.duration
    //       setDuration([...duration, fmtMSS(seconds)])
    //     }
    //   })
    // }
    // getTrackLength(tracks)
    // for (let i = 0; i < audioRef.current.length; i++) {
    //   getTrackLength(audioRef.current[i])
    // }
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
      <Link to="/singles">Back</Link>
    </MusicPlayerProvider>
  )
}

export default Single
