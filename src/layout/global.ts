import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #1C1917;
  }

  body,
  input,
  button, 
  textarea {
    color: #f3f4f6;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
  }

  input,
  button, 
  textarea {
    border: 0;
    outline: none;
  }
`