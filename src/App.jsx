
import React from 'react'
import Header from './assets/components/Header/Header'
import Nav from './assets/components/Nav/Nav'
import About from './assets/components/About/About'
import Projects from './assets/components/Portfolio/Projects'
import Contact from './assets/components/Contact/Contact'
import Experience from './assets/components/Experience/Experience'


{
  /*rafce - shorthand to creates a react arrow function component that exports function*/
}

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Projects />
    <Contact />

    </>
  )
}

export default App
