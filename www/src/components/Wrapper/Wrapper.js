import React from "react"
import * as Styled from "./Styles"

export default ({ children, ...rest }) => (
  <Styled.Wrapper {...rest}>{children}</Styled.Wrapper>
)
