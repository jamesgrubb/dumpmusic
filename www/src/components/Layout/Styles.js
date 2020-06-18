import styled, { css } from "styled-components"
import SvgWrapper from "../SvgWrapper/Styles"
import { VisuallyHidden } from "../../css-helpers/cssHelpers"

export const Main = styled.main`
  color: var(--color-grass-light);
  padding: var(--space-sm);
  position: relative;
  z-index: 1;
`

export const Filter = styled(SvgWrapper)`
  ${VisuallyHidden}
`
