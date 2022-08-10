import React from "react";
import '../styles/media.css';
import { Carousel } from "react-bootstrap";
import eventCar from '../images/eventCar.jpg';
import newsCar from '../images/newsCar.jpg';
import story1 from '../images/story1.jpg';
import story2 from '../images/story2.jpg';
import story3 from '../images/story3.jpg';
import Popup from './Popup';
import { useState } from 'react';

const divStyle = {
    clear:'both'
};
export const Media=()=>{
  const  [buttonPopup,setButtonPopup] = useState(false);
    return(
        <div>
        <div className='container-fluid' >
            <div className="row">
                <div className="col-sm-12">
                </div>
             </div>
            <div className="row">
                <div className="col-12">
                    <Carousel fade={true}>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={newsCar}
                                alt="First slide"
                                height="100%"
                                width="100%"
                            />
                            <Carousel.Caption>
                                <h3 className="title-color">Educademy News</h3>
                                <p className="alt-color">Check out latest news, top stories and know more about events pertaining the Educademy Institute</p>
                                <a class="carBtn" href="#news">NEWS</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={eventCar}
                                alt="Second slide"
                                height="100%"
                                width="100%"
                            />
                            <Carousel.Caption>
                                <h3 className="title-color">Educademy Events</h3>
                                <p className="alt-color">Get more information and register for upcoming events happening at Educademy!</p>
                                <a class="carBtn" href="#events">EVENTS</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>

        <div id="news">
      <div className="post-heading text-center">
        <h3 className="title-color display-4 font-weight-bold">EDUCADEMY NEWS</h3>
        <hr className="w-50 mx-auto pb-5" />
      </div>
      <div className="row gx-5 mt-8 p-4">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Alumni</h5>
              <img
                src={story1}
                alt="cts"
                className="img-fluid rounded mx-auto d-block"
              />
              <p className="card-text">
                <b>Olympics:Alumni</b> athlete wins gold in hockey.
              </p>
              <a href="#" className="btn btn-primary" target="_blank">Know More</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Mathematics</h5>
              <img
                src={story2}
                alt="cts"
                className="img-fluid rounded mx-auto d-block"
              />
              <p className="card-text"><b>Educademy</b> student tops the annual mathematics competition.</p>
              <a href="#" className="btn btn-primary" target="_blank">Know More</a>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Student Life</h5>
              <img
                src={story3}
                alt="cts"
                className="img-fluid rounded mx-auto d-block"
              />
              <p className="card-text">
                Music group<b>Glass-Animals</b> will begin a series of concerts from Sept 1st.
              </p>
              <a href="#" className="btn btn-primary" target="_blank">Know More</a>
            </div>
          </div>
        </div>
      </div>
    </div>

        <section id='events'>
            <div className="leftBox">
                <div className="content">
                    <h1>Educademy Events</h1>
                    <p>Refer below to know more and register yourself for upcoming events happening at Educademy.</p>
                </div>
            </div>
            <div className="events">

                <ul>
                    <li>
                        <div className="time">
                            <h2>10<br></br><span>August</span></h2>
                        </div>
                        <div className="details">
                            <h3>Event 1</h3>
                            <p><b>Talkin with Alumni: Jane Doe @ LinkedIn</b></p>
                            <p>Join us for an alumni talk with Jane Doe and learn from her educademy academic and work experience as a software developer at LinkedIn.</p>
                            <button id="registerBtn"onClick={()=> setButtonPopup(true)}>Register Now</button>
 
                        </div>
                        <div style={divStyle}></div>
                    </li>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3 className='popup-title'>Registration Successful!</h3>
                    </Popup>

                    <li>
                        <div className="time">
                            <h2>12<br></br><span>August</span></h2>
                        </div>
                        <div className="details">
                            <h3>Event 2</h3>
                            <p><b>Build your resume: John Doe @ Educademy</b></p>
                            <p>Join John Doe to build and enhance your resume to greatly skew the full-time job recruitment process in your favor</p>
                            <button id="registerBtn"onClick={()=> setButtonPopup(true)}>Register Now</button>
                        </div>
                        <div style={divStyle}></div>
                    </li>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3 className='popup-title'>Registration Successful!</h3>
                    </Popup>
                    <li>
                        <div className="time">
                            <h2>18<br></br><span>August</span></h2>
                        </div>
                        <div className="details">
                            <h3>Event 3</h3>
                            <p><b>Outdoor Movie Night @ Educademy Common grounds </b></p>
                            <p>Join us for an evening of movie magic as we gather for an outdoor showing of 'The Marvels'.</p>
                            <button id="registerBtn"onClick={()=> setButtonPopup(true)}>Register Now</button>
                        </div>
                        <div style={divStyle}></div>
                    </li>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3 className='popup-title'>Registration Successful!</h3>
                    </Popup>
                </ul>
            </div>
        </section>

        
        </div>
    )
}   