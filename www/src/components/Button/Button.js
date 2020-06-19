import React from "react"
import * as Styled from "./Styles"

export default ({ children, ...rest }) => <Styled.Button {...rest}>{children}</Styled.Button>
