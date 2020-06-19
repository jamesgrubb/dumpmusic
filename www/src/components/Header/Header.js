import React from "react"
import * as Styled from "./Styles"
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"

export default ({ title }) => (
  <>
    <Styled.Header>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Nav>
        <Styled.Icon icon={faInstagram} />
        <Styled.Icon icon={faFacebook} />
        <Styled.Icon icon={faTwitter} />
      </Styled.Nav>
    </Styled.Header>
  </>
)
