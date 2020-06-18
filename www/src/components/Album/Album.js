import React, { useEffect, useContext, useRef } from "react"
import { Link } from "gatsby"
import Layout from "../Layout/Layout"
import Img from "gatsby-image"
import Image from "../Image/Image"
import { MusicPlayerContext } from "../../context/MusicPlayerContext"
import useMusicPlayer from "../../hooks/useMusicPlayer"

const Album = ({ name, tracks, slug, artwork }) => {
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

  console.log("Album -> state", artwork.asset.fluid)
  return (
    <>
      <Layout>
        <h2>{name}</h2>

        <a href={slug.current}>Share</a>

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
      </Layout>
      <Img
        fluid={artwork.asset.fluid}
        style={{
          position: "fixed",
          top: "0",
          width: "100%",
          height: "100%",
        }}
        imgStyle={{
          filter: "url(#duotone)",
          transform: "scale(1.3)",
          width: "120vw",
          height: "120vh",
          marginLeft: "-10vh",
        }}
      />
      {/* <Image fluid={artwork.asset.fluid} alt={name} /> */}
      <marquee behavior="scroll" direction="left">
        {currentTrackName}
      </marquee>
      <Link to="/singles">Back</Link>
    </>
  )
}

export default Album
