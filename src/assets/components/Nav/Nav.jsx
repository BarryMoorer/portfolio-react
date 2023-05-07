import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {IoMdContact} from 'react-icons/io'
import {BiBook} from 'react-icons/bi'
import {CgWebsite} from 'react-icons/cg'
import {AiFillMessage} from 'react-icons/ai'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* useState is being used to change the active class for the link currently on.. */}
      <a href='#' onClick={() => setActiveNav('#')} class={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href='#about' onClick={() => setActiveNav('#about')} class={activeNav === '#about' ? 'active' : ''}><IoMdContact /></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} class={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} class={activeNav === '#portfolio' ? 'active' : ''}><CgWebsite /></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} class={activeNav === '#contact' ? 'active' : ''} ><AiFillMessage /></a>
    </nav>
  )
}

export default Nav