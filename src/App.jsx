import { Component } from "react"
import { GlobalStyle } from "./GlobalStyle"
import { Teste } from "./styled"
import Header from "./Componentes/Header/header"

function App() {
 

  return (
    <Teste className="App">
      <GlobalStyle/>
      <Header/>
    </Teste>
  )
}

export default App
