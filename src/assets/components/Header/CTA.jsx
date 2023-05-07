import React from 'react'
import '../../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className="CTA">
        <a href={require('../../resume.pdf')} className='btn' download>Download Resume</a>
        <a href='#contact' className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default CTA