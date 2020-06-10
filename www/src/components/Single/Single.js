import React, { useRef, useEffect, useState, useContext } from "react"
import { Link } from "gatsby"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"

const Single = ({ name, tracks }) => {
  const [duration, setDuration] = useState([])
  const [state, setState] = useContext(MusicPlayerContext)
  const audioRef = useRef([new Array(Number(tracks.length))])
  function fmtMSS(s) {
    s = Math.floor(s)
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s
  }

  useEffect(() => {
    setState(state => ({ ...state, tracks: tracks }))
    function getTrackLength(track) {
      track.addEventListener("loadedmetadata", function () {
        for (let i = 0; i <= tracks.length; i++) {
          const seconds = track.duration
          setDuration([...duration, fmtMSS(seconds)])
        }
      })
    }

    for (let i = 0; i < audioRef.current.length; i++) {
      getTrackLength(audioRef.current[i])
    }
  }, [duration, tracks.length, setState, tracks])

  console.log("Single -> state", state)
  return (
    <>
      <h2>{name}</h2>
      <button
        onClick={() => setState(state => ({ ...state, clicked: "CLICKED" }))}
      >
        {state.clicked}
      </button>
      <ul>
        {tracks.map((track, i) => (
          <li key={track._id}>
            <div>
              <strong>{track.name}</strong>
              <audio
                ref={el => (audioRef.current[i] = el)}
                src={track.file}
                controls
              >
                <track kind="captions" name={track.name} />
              </audio>
              <i>{duration[i]}</i>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/singles">Back</Link>
    </>
  )
}

export default Single
