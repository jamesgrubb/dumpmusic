import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import AlbumsList from "../components/AlbumsList/AlbumsList"

const TemplateAlbums = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanityAlbum {
        edges {
          node {
            _id
            name
            slug {
              current
            }
          }
        }
      }
    }
  `)

  const albums = data.allSanityAlbum.edges

  return (
    <>
      <AlbumsList albums={albums} />
    </>
  )
}
export default TemplateAlbums
