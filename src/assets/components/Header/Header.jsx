import React from 'react'
import './Header.css'
import CTA from './CTA'
import '../../profile.png'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      {/* .container.header__container - shorthand to create a div class similiar to html */}
      <div className="container header__container">
        <h5>Hi, I'm</h5>
        <h1>Barry Moorer</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA />
        <div className="me">
          <img src={require('../../profile.png')} alt='me' />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header