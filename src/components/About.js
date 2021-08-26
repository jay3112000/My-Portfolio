import React from 'react'
import myface from '../assets/myface.jpg'
import ExampleOne from './AnimatedText.js'

function About() {
    return (
        <div id='about' className='container py-5 mt-5'>
            <div className='row'>
                <div className='col-lg-6 col-xm-12 '>
                    <div className='ibox'>
                    <img  src={myface} alt='just wait' className="img-fluid  "/>
                    </div>
                 
                </div>
                <div className='col-lg-6 col-sm-12 my-2'>
                <ExampleOne/>
                <h1 className="display-4">About me</h1>
                 <p>
                 I have always been passionate about coding so i took computer science in college since then I have been learning
                  many skills through different platforms and have worked on many different projects to gain experience and knowledge I will add the link
                   to my Github account pls do check my projects
                 </p>
                </div>
            
            </div>
            
        </div>
    )
}

export default About
