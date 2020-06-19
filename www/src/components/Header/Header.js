import React from "react"
import * as Styled from "./Styles"
import { Instagram, Twitter, Facebook } from "../Icons/Icons"
import Button from "../Button/Button"
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
        <Button as="a" href="#0">
          {/* sizes and colors set using styled-systems' props */}
          <Instagram color="var(--color-gray-dark)" bg="var(--color-grass-light)" viewBox="0 0 38 38" width={["1em","1.2em"]}/>
        </Button>
      
          <Twitter color="red" bg="red" viewBox="0 0 38 38" width={["1em","1.2em"]}/>
          <Facebook color="red" bg="red" viewBox="0 0 38 38" width={["1em","1.2em"]}/>
      
      </Styled.Nav>
    </Styled.Header>
  </>
)
