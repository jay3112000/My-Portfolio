import React from "react";
import '../App.css';
const Experience = () => {
  return (
    <div id='education'  className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>education and experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2006-2018</h3>
            <p className="fw-bold">Tagore International School
            </p>
            <p> I was a bright student in school and scored 9.8 cgpa in 10th and chose the science stream after that I scored 80% in 12th board
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2018-2022</h3>
            <p className="fw-bold">SRM University of Science and Technology
            </p>
            <p>I completed my Btech in Computer Science with a 8.84 cgpa and completed many projects and took part in various hackathons 
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020(june)-2021(january)</h3>
            <p className="fw-bold">Corlax Technologies</p>
            <p>I did my Internship as Flutter Developer working with State Managemt, API, UI/UX and various features</p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2022-</h3>
            <p className="fw-bold">Bajaj Finserv</p>
           
          </div>
        </div>
      
        
        
      </div>
    </div>
  )
}

export default Experience;
