import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

::-moz-selection {
  background: ${(props) => props.theme.secondaryColor};
}

::selection {
  background: ${(props) => props.theme.secondaryColor};
}

html {
  font-family: 'lato', sans-serif;
}

body {
  background-color:  ${(props) => props.theme.body};
  color: ${(props) => props.theme.font};
}

body::-webkit-scrollbar {
  width: 12px;
}

body::-webkit-scrollbar-track {
  background: ${(props) => props.theme.body};
}

body::-webkit-scrollbar-thumb {
  background-color: ${(props) => props.theme.secondaryColor};
  border-radius: 20px;
  border: 3px solid ${(props) => props.theme.body};
}

`;
