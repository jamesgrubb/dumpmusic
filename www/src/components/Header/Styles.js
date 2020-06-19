import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 0 10%;
`

export const Title = styled.h1`
  display: flex;
  flex: 1 100%;
  align-items: center;
  font-size: var(--text-xs);
  text-orientation: upright;
  text-transform: uppercase;
  writing-mode: vertical-lr;
  position: relative;
  color: var(--color-grass-light);
  position: relative;
  &:after {
    content: "";
    display: flex;
    top: 100%;
    width: 1px;
    flex: 1 100%;
    border-left: 1px solid;
  }
`

export const Icon = styled(FontAwesomeIcon)`
  fill: currentColor;
`
export const Nav = styled.nav`
  display: grid;
  grid-auto-flow: row;
  grid-gap: var(--space-xs);
`
