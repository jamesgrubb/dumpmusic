import React, { useRef, useEffect, useState } from "react"
import { Link } from "gatsby"

const Single = ({ name, tracks }) => {
  const [duration, setDuration] = useState([])
  const audioRef = useRef(null)
  console.log("Single -> ref", audioRef.current)

  function getTrackLength(track) {
    track.addEventListener("loadedmetadata", function () {
      setDuration(track.duration)
    })
  }
  useEffect(() => {
    getTrackLength(audioRef.current)
  }, [getTrackLength])
  console.log(duration)
  return (
    <>
      <h2>{name}</h2>

      <ul>
        {tracks.map(track => (
          <li key={track._id}>
            <div>
              <strong>{track.name}</strong>
              <audio ref={audioRef} src={track.file} controls />
              <i>{duration}</i>
            </div>
          </li>
        ))}
      </ul>
      <Link to="/singles">Back</Link>
    </>
  )
}

export default Single
