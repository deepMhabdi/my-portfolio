import React from 'react'
import Header from './components/Header'
import Technologies from './components/Technologies'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div>
        <Header />
        <AboutMe />
        <Projects />
        <Technologies />
        <Footer />
      </div>
    </>

  )
}

export default App