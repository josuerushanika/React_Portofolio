import React from 'react'
import "./About.css"
import ProfilePic from "../../images/jojo.jpg"

const About = () => {
  return (
    <div className='container about-section'>

        <div className='row'>
              <div className='col-xl-6 col-md-12 col-sm-12'>
                 <div className='about-image'>
                      <img src={ProfilePic} alt="Profile Photo"/>
                 </div>
              </div>

              <div className='col-xl-6 col-md-12 col-sm-12'>
                 <div className='about-details'>
                    <div className='about-title'>
                        <h5>About Me</h5>
                    </div>
                     <p> As a skilled Software
                         developer and open-source enthusiast, I am dedicated to crafting clean code and creating
accessible designs. I thrive on collaboration and am particularly passionate about pair-programming and remote
work. With fluency in multiple languages, frameworks, and technologies, I have a proven ability to quickly adapt to
new challenges and deliver high-quality results. Whether working independently or as part of a team.</p>
                 </div>
             </div>
        </div>
      
    </div>
  )
}

export default About