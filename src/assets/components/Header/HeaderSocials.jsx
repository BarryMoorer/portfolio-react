import React from 'react'
import {ImLinkedin} from 'react-icons/im'
import {FiGithub} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/-barrymoorer" target='_blank'><ImLinkedin /></a>
        <a href="https://github.com/BarryMoorer/BarryMoorer" target='_blank'><FiGithub /></a>
    </div>
  )
}

export default HeaderSocials