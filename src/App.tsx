import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

import Header from "./components/header"
import Summary from "./components/summary"

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header/>
      <Summary/>
    </ThemeProvider>
  )
}

export default App
