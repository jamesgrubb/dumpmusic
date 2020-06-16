import React from "react"
import { Link } from "gatsby"

const AlbumsList = ({ albums }) => (
  <>
    <h2>Albums</h2>
    <ul>
      {albums.map(album => (
        <li key={album.node._id}>
          <Link to={`/album/${album.node.slug.current}`}>
            <strong>{album.node.name}</strong>
          </Link>
        </li>
      ))}
    </ul>
    <Link to="/albums">Back</Link>
  </>
)

export default AlbumsList
