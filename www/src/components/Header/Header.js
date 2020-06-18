import React from "react"
import * as Styled from "./Styles"
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
const Header = ({ title }) => (
  <>
    <h1>{title}</h1>
    <div
      style={{
        display: "grid",
        gridGap: "var(--space-xs)",
        gridAutoFlow: "column",
        alignSelf: "start",
      }}
    >
      <Styled.Icon icon={faInstagram} />
      <Styled.Icon icon={faFacebook} />
      <Styled.Icon icon={faTwitter} />
    </div>
  </>
)

export default Header
