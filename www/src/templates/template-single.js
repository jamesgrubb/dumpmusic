import React from "react"
import { graphql } from "gatsby"
import Single from "../components/Single/Single"

export const data = graphql`
  query($slug: String!) {
    sanitySingle(slug: { current: { eq: $slug } }) {
      name
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
const TemplateEvent = ({ data: { sanitySingle } }) => (
  <>
    <Single {...sanitySingle} />
  </>
)

export default TemplateEvent
