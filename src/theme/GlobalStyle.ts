import {createGlobalStyle} from "styled-components";
import {CustomTheme} from "./types";
import "./style.css";

declare module "styled-components" {
    export interface DefaultTheme extends CustomTheme {
    }
}

const GlobalStyle = createGlobalStyle`

  html {
    overflow: scroll;
    overflow-x: hidden;
    height: 100vh;
    scroll-snap-type: y mandatory;
  }
  
  body {
    background-color: ${({theme}) => theme.colors.background};
    

    img {
      height: auto;
      max-width: 100%;
    }
  }
  
  section {
    scroll-snap-align: start;
  }

`;

export default GlobalStyle;