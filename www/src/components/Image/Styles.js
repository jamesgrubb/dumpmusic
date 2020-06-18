import styled from "styled-components"
import Img from "gatsby-image"
import { position, layout } from "styled-system"

export const ImageWrapper = styled.figure`
  display: block;
  ${position};
  ${layout}
  overflow: hidden;
`

export const Image = styled(Img)`
  filter: url("#duotone");
  transform: scale(1.3);
  overflow: hidden;
  width: 100%;
  z-index: 0;
  > div {
    border: 2px solid red;
    /* width: 120vw;
    height: 120vh; */
    transform: scale(1.3);
    transform-origin: center center;
  }
`
