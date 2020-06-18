import React from "react"
import * as Styled from "./Styles"

const Image = ({ position, alt, fluid }) => (
  <Styled.ImageWrapper position={position}>
    <Styled.Image
      style={{
        position: "absolute",
        overflow: "hidden",
        border: "2px solid red",
      }}
      imgStyle={{ width: "110vw", height: "110vh" }}
      fluid={fluid}
      alt={alt}
    />
  </Styled.ImageWrapper>
)

export default Image
