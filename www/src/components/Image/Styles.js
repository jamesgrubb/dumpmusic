import styled from "styled-components"
import Img from "gatsby-image"

export default styled(Img)`
  filter: url("#duotone");
  top: 0;
  left: 0;
  transform: scale(1.3);
  transform-origin: center center;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 0;
  overflow: hidden;
`
