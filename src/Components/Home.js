import React from "react";
import { Carousel } from 'react-bootstrap';
import { Link } from "react-router-dom";
import slide1 from '../images/slide1.jpg';
import slide2 from '../images/slide2.jpg';
import slide3 from '../images/slide3.jpg';
import student from '../images/student.svg';
import world from '../images/earth_logo.svg';
import rank from '../images/rank.svg';
import '../styles/home.css';
export const Home=()=>{
    return(
        <>
        <div className='container-fluid' >
        <div className="row">
        <div className="col-sm-12">
       
        </div>
        </div>
        <div className="row">
        <div className="col-12">
        <Carousel>
        <Carousel.Item>
        <img
        className="d-block w-100"
        src={slide1}
        alt="First slide"
        />
        <Carousel.Caption>
        <h1 className="title-color2">Join Us</h1>
          <p>
            We have been preparing the students for the future. Sign up for
            the best academic experience.
          </p>
          <Link to="/signUp" className="btn btn-lg btn-primary">
              Sign Up Today
            </Link>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block w-100"
        src={slide2}
        alt="Second slide"
        />
        <Carousel.Caption>
        <h1 className="title-color2">Excel</h1>
          <p>
            We offer a wealth of opportunities for you to learn and apply new
            skills and help you prepare for your professional endeavors. Check
            our courses.
          </p>
          <a href="#0" className="btn btn-lg btn-primary">Course list</a>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
        className="d-block w-100"
        src={slide3}
        alt="Third slide"
        />
        <Carousel.Caption>
        <h1 className="title-color2">Admissions and Aid</h1>
          <p>
            We provide a distinctive and supportive academic environment at an
            affordable price. Check our pricing model for more information.
          </p>
          <a href="#pricing" className="btn btn-lg btn-primary">Pricing model</a>
        </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
        </div>
        </div>

    <section className="stats">
      <div className="container">
        <h3 className="stats-heading text-center my-1 title-color">
          WELCOME TO EDUCADEMY
        </h3>
        <hr></hr>

        <div className="grid grid-3 text-center my-4">
          <div>
          <img
        src={student}
        alt="students"
        height="100px"
        />
            <h3>10000 +</h3>
            <p className="stats-color">Students Enrolled</p>
          </div>
          <div>
          <img
        src={world}
        alt="countries"
        height="100px"
        />
            <h3>150 +</h3>
            <p className="stats-color">Countries: Student Demographic (DIVERSITY)</p>
          </div>
          <div>
          <img
        src={rank}
        alt="rank"
        height="100px"
        />
            <h3>5</h3>
            <p className="stats-color">Rank: Nationally in Grad Rate Performance</p>
          </div>
        </div>
      </div>
    </section>
        </>
     
    )
}   