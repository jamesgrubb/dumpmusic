import React from "react"
import { Link } from "gatsby"

const SinglesList = ({ singles }) => (
  <>
    <h2>Singles</h2>
    <ul>
      {singles.map(single => (
        <li key={single.node._id}>
          <Link to={`/single/${single.node.slug.current}`}>
            <strong>{single.node.name}</strong>
          </Link>
        </li>
      ))}
    </ul>
    <Link to="/singles">Back</Link>
  </>
)

export default SinglesList
