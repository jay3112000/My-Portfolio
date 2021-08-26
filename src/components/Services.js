import React from 'react'
import '../App.css';
function Services() {
    return (
        <div className='services'>
            <h1 className='pt-3 mx-2'> SERVICES</h1>
                <div className='container '>
                    <div className='row '>
                        <div className='col-md-4 col-sm-12 '>
                        <div className="card my-3">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">WEB DEVELOPMENT</h5>
                            <p className="card-text">
                            Fast and Interactive websites which are completely Responsive
                            </p>
                            <a href="https://github.com/jay3112000/Kabanize" className="btn btn-primary">See Project</a>
                        </div>
                        </div>

                        </div>
                        <div className='col-md-4 col-sm-12'>
                        <div className="card my-3">
                        <img
                            src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_flutter_icon_130599.png"
                            className="card-img-top"
                            alt="..."
                            
                        />
                        <div className="card-body">
                            <h5 className="card-title">APP DEVELOPMENT</h5>
                            <p className="card-text">
                            Apps with Amazing UI/UX made for every simple User
                            </p>
                            <a href="https://github.com/jay3112000/Internship-App-Akhdar-" className="btn btn-primary">See Project</a>
                        </div>
                        </div>
                        </div>
                        <div className='col-md-4 col-sm-12'>
                        <div className="card my-3">
                        <img
                            src="https://miro.medium.com/max/1200/1*FVtCyRdJ6KOr4YswTtwMeA.jpeg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <h5 className="card-title">FULL STACK DEVELOPMENT</h5>
                            <p className="card-text">
                            Faster Development for your Startup using New Gen Technical Stack
                            </p>
                            <a href="https://github.com/jay3112000/Find_a_home" className="btn btn-primary">See Project</a>
                        </div>
                        </div>

                        </div>

                    </div>

                </div>

            

            
        </div>
    )
}

export default Services
