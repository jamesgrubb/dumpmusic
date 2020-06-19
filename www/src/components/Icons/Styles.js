import styled from "styled-components"
import Svg from "../Svg/Svg"
import { layout,color,flexbox } from "styled-system"
export const Icon = styled(Svg)`
  fill: currentColor;
  ${flexbox}
  ${layout}
  ${color}
`
