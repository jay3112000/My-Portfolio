import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import '../App.css';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className='container'>
        <a className="navbar-brand mx-4" href="#"><i className="bi bi-person-square"></i></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ms-auto">
           
            <li className="nav-item">
              <Link smooth={true} offset={-50} to='about' className="nav-link mx-4" href="#">About me</Link >
            </li>
            <li className="nav-item">
              <Link smooth={true} offset={-50} to='services' className="nav-link mx-4" href="#">Services</Link >
            </li>
            <li className="nav-item">
              <Link smooth={true} offset={-50} to='education' className="nav-link mx-4" href="#">Education</Link >
            </li>
            <li className="nav-item">
              <Link smooth={true} offset={-50} to='portfolio' className="nav-link mx-4" href="#">Portfolio</Link >
            </li>
            <li className="nav-item">
              <Link smooth={true} offset={-90} to='contacts' className="nav-link mx-4" href="#">Contacts</Link >
            </li>
          
          </ul>
         
        </div>
        </div>
      </nav>
    )
  }

export default Navbar
