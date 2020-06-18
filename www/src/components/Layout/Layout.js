import React from "react"
import * as Styled from "./Styles"
import Header from "../Header/Header"
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
const Layout = ({ children, className }) => {
  return (
    <Styled.Main>
      <Styled.Filter className={className}>
        <defs>
          <filter id="duotone">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" />
            <feTurbulence
              type="turbulence"
              baseFrequency="0.1"
              numOctaves="10"
              result="turbulence"
            />
            <feDisplacementMap
              in2="turbulence"
              in="SourceGraphic"
              scale="10"
              xChannelSelector="R"
              yChannelSelector="B"
            />
            <feColorMatrix
              type="matrix"
              values=".33 .33 .33 0 0
                .33 .33 .33 0 0
                .33 .33 .33 0 0
                 0   0   0  1 0"
            ></feColorMatrix>
            <feComponentTransfer color-interpolation-filters="sRGB">
              <feFuncR
                type="table"
                tableValues=".1098039216  0.3176470588"
              ></feFuncR>
              <feFuncG
                type="table"
                tableValues=".1098039216  0.3176470588"
              ></feFuncG>
              <feFuncB
                type="table"
                tableValues=".1098039216  0.3176470588"
              ></feFuncB>
            </feComponentTransfer>
          </filter>
        </defs>
      </Styled.Filter>
      <Header title="Bare Music" />
      {children}
    </Styled.Main>
  )
}

export default Layout
