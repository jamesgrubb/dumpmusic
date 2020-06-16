import React, { useEffect, useContext } from "react"
import { MusicPlayerContext } from "../context/MusicPlayerContext"
import { graphql } from "gatsby"
import Single from "../components/Single/Single"
import PlayerControls from "../components/PlayerControls/PlayerControls"
export const query = graphql`
  query {
    sanitySiteSettings {
      tracks {
        name
        file
        _id
      }
    }
  }
`

export default function Home({ data: { sanitySiteSettings } }) {
  return (
    <>
      <div>
        <PlayerControls />
      </div>
      <div style={{ display: "none" }}>
        <Single {...sanitySiteSettings} />
      </div>
    </>
  )
}
