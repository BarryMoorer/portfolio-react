import React from 'react'
import './Projects.css'
import portfolioItem1 from '../../AdventureIns - Front Page.png'
import portfolioItem2 from '../../Chrono Landing .png'
import portfolioItem3 from '../../Halloween Store - Front Page.png'
import portfolioItem4 from '../../TLA Consulting.png'

const Projects = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>My Portfolio</h2>
      <div className="portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={portfolioItem2} alt='Watch Landing Page'/>
            </div>
            <h3>Chrono Landing Page</h3>
            <article className='portfolio__item-cta'>
            <a href='https://github.com/BarryMoorer/ChronoLandingPage' className='btn'>Github</a>
            <a href='https://barrymoorer.github.io/ChronoLandingPage/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </article>
          <p>This project is a landing page built with HTML, CSS, and JavaScript. The header section of the landing page features a carousel animation that allows the display of multiple images in a sliding manner. The carousel is designed to provide a visually appealing and interactive way to showcase featured content and engage visitors.</p>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={portfolioItem4} alt='TLA Consulting Front Page' />
          </div>
            <h3>TLA Consulting w/ Database</h3>
            <article className='portfolio__item-cta'>
            <a href='https://github.com/BarryMoorer/TLA-Consulting' className='btn'>Github</a>
            </article>
          <p>This project involved setting up a new subdirectory and virtual host using PHP and MySQL. Additionally, a new database was created and user data was inserted into it. Modifications were made to the login function to check the user's password against the database and store the user's first name in a session variable, with a new page created to redirect successful logins to "statusreport.php". </p>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={portfolioItem1} alt='Adventures Insurance Front Page' />
          </div>
            <h3>Adventure Insurance</h3>
            <article className='portfolio__item-cta'>
            <a href='https://github.com/BarryMoorer/AdventureInsurance-Static-Page' className='btn'>Github</a>
            <a href='https://barrymoorer.github.io/AdventureInsurance-Static-Page/' className='btn btn-primary' target='_blank'>Live Demo</a>
            </article>
          <p>This project involved creating a website for Adventures Insurance that included two functional HTML pages and one thank you page, as well as a common theme, header, footer and navigation. To showcase web development skills, a style sheet was created in a "css" subdirectory, and a JavaScript file was added in a "js" subdirectory to improve browser load speed.  </p>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
          <img src={portfolioItem3} alt='Halloween Store Front Page' />
            </div>
            <h3>Halloween Havoc Store Design</h3>
            <article className='portfolio__item-cta'>
            <a href='https://github.com/BarryMoorer/HalloweenStore' className='btn'>Github</a>
            <a href='https://barrymoorer.github.io/HalloweenStore/' className='btn btn-primary'>Live Demo</a>
            </article>
          <p>This project involved designing and creating a visually appealing Halloween website, utilizing HTML semantic elements to structure the four pages and CSS to format the content. The end result was a website with a 2-column layout and various design elements. </p>
        </article>
      </div>
    </section>
  )
}

export default Projects