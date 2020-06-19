import React from "react"
import * as Styled from "./Styles"
import Header from "../Header/Header"
import Wrapper from "../Wrapper/Wrapper"
import Duotone from "../Duotone"
import Helmet from "react-helmet"

const Layout = ({ children, title }) => {
  return (
    <Wrapper width={[1 / 2, 1]} height="100vh">
      <Helmet title={`Bare Music --- ${title}`} />
      <Header title="Bare" />
      <Wrapper height={"100%"}>
        <Duotone />
        {children}
      </Wrapper>
    </Wrapper>
  )
}

export default Layout
