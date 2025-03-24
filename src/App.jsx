import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/navbar'
import Items from './componentes/Items'


function App() {

  return (
    <>
      <NavBar/>

      <Items producto="producto 1"/>
      <Items producto="producto 2"/>
      <Items producto="producto 3"/>
      <Items producto="producto 4"/>
      <Items producto="producto 5"/>
      <Items producto="producto 6"/>

      <img src="/assets/logo-temporal.png" alt="" />
    </>
  )
}

export default App
