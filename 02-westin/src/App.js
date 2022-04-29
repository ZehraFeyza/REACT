import React from 'react'
import About from './components/About'
import Banner from './components/Banner'
import Header from './components/Header'
import Preloader from './components/Preloader'


const App = () => {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Banner/>
      <About/>
    </div>
  )
}

export default App;