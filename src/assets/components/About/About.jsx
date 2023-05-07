import React from 'react'
import './About.css'
import '../../ME.png'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={require('../../ME.png')} />
          </div>
        </div>

<div className="about__content">
  <div className="about__cards">
    <article className='about__card'>
    
    <p> 
      I am a full stack developer with a deep passion for programming and a genuine enthusiasm for developing applications across the entire technology stack. As a recent graduate with a strong foundation in web development, I have expertise in programming languages such as HTML, CSS, JavaScript, MySQL, and PHP.<br />
       I have also completed courses in agile fundamentals and Git, enabling me to work effectively in a team-based environment and manage code changes effectively. Through personal projects and work experience, I have honed excellent analytical and problem-solving skills, and I am a quick learner who can adapt to new programming languages and technologies with ease.<br/>
      I am particularly passionate about technology and software development, and I am excited to contribute my skills and expertise to a team of like-minded individuals. With my strong foundation in web development, coupled with my problem-solving abilities and passion for technology, I am confident in my ability to deliver high-quality applications that meet and exceed user expectations.</p>
  </article></div>
  <a href='#contact' className='btn btn-primary'>Contact Me</a>
</div>

      </div>
    
    </section>
  )
}

export default About