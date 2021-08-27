import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../components/Carousel.css';
import img from '../assets/img.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
function Carousel() {
    return (
        <div className='caraousel-container mb-4'>

        <div className='container '>
            <div className="d-flex justify-content-center mt-5">
        <h1>PORTFOLIO</h1>
        
      </div>
      <p  className="d-flex justify-content-center">
            Examlples of my most Recent Work    
         </p>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <a
      href='https://relaxed-visvesvaraya-22dec2.netlify.app'
      >
      <img src={img} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>TRAVEL GUIDE</h5>
        <p>A guide to all your favourite destinations</p>
      </div>
      </a>
      
    </div>
    <div className="carousel-item">
      <a href='https://happy-bhaskara-3d76ea.netlify.app'>
      <img src={img2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>MEME GENERATOR</h5>
        <p>Simple create fun memes with friends</p>
      </div>
      </a>
     
    </div>
    <div className="carousel-item">
      <a
      href='https://vigilant-mahavira-5d35ee.netlify.app'>
      <img src={img3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>KABANIZE</h5>
        <p>Boost your Productiveness with a simple technique</p>
      </div>
      </a>
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
    )
}

export default Carousel
