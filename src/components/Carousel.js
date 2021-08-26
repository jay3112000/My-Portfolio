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
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <a
      href='https://relaxed-visvesvaraya-22dec2.netlify.app'
      >
      <img src={img} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>TRAVEL GUIDE</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
      </a>
      
    </div>
    <div class="carousel-item">
      <a href='https://happy-bhaskara-3d76ea.netlify.app'>
      <img src={img2} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>MEME GENERATOR</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
      </a>
     
    </div>
    <div class="carousel-item">
      <a
      href='https://vigilant-mahavira-5d35ee.netlify.app'>
      <img src={img3} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>KABANIZE</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
      </a>
      
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div>
    )
}

export default Carousel
