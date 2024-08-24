import React from 'react'

import './App.css'

import {
  Header,
  Footer,
  MainContent
} from './components'

const App = () => {
  // console.log(Header)
  return (
    <>
      <Header />
      <hr />
      <MainContent />
      <hr />
      <Footer />
    </>
  )
}

export default App