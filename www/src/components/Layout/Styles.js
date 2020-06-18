import styled, { css } from "styled-components"
import SvgWrapper from "../SvgWrapper/Styles"

export const Main = styled.main`
  color: var(--color-grass-light);
  padding: var(--space-sm);
  position: relative;
  z-index: 1;
`
const VisuallyHidden = css`
  clip: rect(0 0 0 0);
  clip-path: inset(100%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

export const Filter = styled(SvgWrapper)`
  ${VisuallyHidden}
`
