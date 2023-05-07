import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Current Skills</h5>
      <h2>My Experience</h2>
   
   <div className="container experience__container">
    <div className="experience__frontend">
      <h3>Frontend Development</h3>
      <div className="experience__content">
        <article className='experience__details'>
          <BsPatchCheckFill />
          <h4>HTML</h4>
          {/*<small></small> -- this allows for text entry below h4 */}
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill />
          <h4>CSS</h4>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill />
          <h4>Javascript</h4>
        </article>
      </div>
    </div>
    <div className="experience__backend">
    <h3>Backend Development</h3>
      <div className="experience__content">
        <article className='experience__details'>
          <BsPatchCheckFill />
          <h4>PHP</h4>
        </article>
        <article className='experience__details'>
          <BsPatchCheckFill />
          <h4>MySQL</h4>
        </article>
      </div>

    </div>
   </div>
   
    </section>

  )
}

export default Experience