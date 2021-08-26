import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <div className="myfooter mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>Jaipur, Rajasthan</p>
            </div>
            <div className="d-flex">
              <a href="tel:8769009988">8769009988</a>
            </div>
            <div className="d-flex">
              <p>jayrocks3112000@gmail.com</p>
            </div>
          </div>
         
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center mt-2">
            <div className="d-flex justify-content-center">
             
            
            <a href="https://www.linkedin.com/in/jay-sharma-9b4758206/"><i className="bi bi-linkedin mx-2"></i></a>
            <a href="https://github.com/jay3112000"><i class="bi bi-github mx-2"></i></a>
             
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
