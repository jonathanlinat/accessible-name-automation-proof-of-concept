import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const StyledThemeProviderApp = createGlobalStyle`
  ${reset}

  :root {
    font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif;
    font-size: 16px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  html { box-sizing: border-box; }

  body { background-color: #eee; }

  pre {
    padding: 1rem !important;
    border: none !important;
    margin: 0 !important;
  }
`

export default StyledThemeProviderApp
