import React from "react"
import * as Styled from "./Styles"
import Header from "../Header/Header"
import Duotone from "../Duotone"
import Helmet from "react-helmet"

import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
const Layout = ({ children, className, title }) => {
  return (
    <>
      <Helmet title={`Bare Music --- ${title}`} />
      <Styled.Main>
        <Duotone />
        <Header title="Bare Music" />
        {children}
      </Styled.Main>
    </>
  )
}

export default Layout
