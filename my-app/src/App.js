import React from 'react'
import './App.css'
import {Feature,Article,CTA, Brand,NavBar} from './components/index'
import {Blog,Features,Footer,Header,WhatGPT, Possibilities} from  './containers/index'

function App() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibilities />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App