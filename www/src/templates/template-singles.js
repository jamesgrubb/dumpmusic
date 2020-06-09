import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SinglesList from "../components/SinglesList/SinglesList"

const TemplateSingles = () => {
  const data = useStaticQuery(graphql`
    query {
      allSanitySingle {
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

  const singles = data.allSanitySingle.edges

  return (
    <>
      <SinglesList singles={singles} />
    </>
  )
}
export default TemplateSingles
