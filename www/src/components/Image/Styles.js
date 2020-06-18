import styled from "styled-components"
import Img from "gatsby-image"

export default styled(Img)`
  filter: url("#duotone");
  position: absolute;
  top: -5%;
  left: -5%;
  width: 110%;
  height: 110%;
  object-fit: cover;
  z-index: 0;
`
