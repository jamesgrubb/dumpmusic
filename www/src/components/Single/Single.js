import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"

const Single = ({ name, tracks }) => {
  const [duration, setDuration] = useState([])
  const audioRef = useRef([new Array(Number(tracks.length))])
  function fmtMSS(s) {
    s = Math.floor(s)
    return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s
  }

  useEffect(() => {
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
  }, [duration, tracks.length])

  return (
    <>
      <h2>{name}</h2>

      <ul>
        {tracks.map((track, i) => (
          <li key={track._id}>
            <div>
              <strong>{track.name}</strong>
              <audio
                ref={el => (audioRef.current[i] = el)}
                src={track.file}
                controls
              />
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
