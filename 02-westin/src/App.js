import React from 'react'
import About from './components/About'
import Banner from './components/Banner'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Portfolio from './components/Portfolio'
import Preloader from './components/Preloader'
import Services from './components/Services'
import Testimonal from './components/Testimonal'



const App = () => {
  return (
    <div>
      <Preloader/>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonal/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;