import React from "react"
import { graphql } from "gatsby"
import Album from "../components/Album/Album"

export const data = graphql`
  query($slug: String!) {
    sanityAlbum(slug: { current: { eq: $slug } }) {
      name
      artwork {
        asset {
          fluid(maxWidth: 700) {
            ...GatsbySanityImageFluid
          }
        }
      }
      slug {
        current
      }
      tracks {
        name
        file
        _id
      }
    }
  }
`
const TemplateAlbum = ({ data: { sanityAlbum } }) => (
  <>
    <Album {...sanityAlbum} />
  </>
)

export default TemplateAlbum
