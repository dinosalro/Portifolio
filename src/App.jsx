import { Component } from "react"
import { GlobalStyle } from "./GlobalStyle"
import { Teste } from "./styled"
import Header from "./Componentes/Header/header"
import Projetos from "./Componentes/Projetos/Projetos"

function App() {
 

  return (
    <Teste className="App">
      <GlobalStyle/>
      <Header/>
      <Projetos/>
    </Teste>
  )
}

export default App
