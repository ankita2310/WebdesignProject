import React from 'react'
import skills from '../images/skills.jpg'
import jess from '../images/jessica.jpg'
import skills2 from '../images/skills2.png'
import unilogo from '../images/university_logo.png'
import earthlogo from '../images/earth_logo.svg'
import networklogo from '../images/network.svg'
import worklogo from '../images/work_logo.svg'
import '../styles/aboutUs.css';
import Popup from './Popup';
import { useState } from 'react';



export const AboutUs=()=>{
  const  [buttonPopup,setButtonPopup] = useState(false);
    return (
      <>
      <section className="features-head bg-primary py-3">
      <div className="container grid">
        <div>
          <h1 className="xl about-title">ABOUT US</h1>
          <p className="lead">
            EDUCADEMY platform is an educational platform that makes both learning and teaching easy with its state of the art facilities, network and resources.
          </p>
        </div>
        <img src={unilogo} alt="university" />
      </div>
    </section>

    <section className="features-sub-head bg-light py-3">
      <div className="container grid">
        <div>
          <h1 className="md">Jessica Fang: Founder & CEO - <span className="title-color">EDUCADEMY</span></h1>
          <p>My mission is simple: connect the world’s professionals to make them more productive and successful..</p>
                <p>
                  <button onClick={()=> setButtonPopup(true)} className='btn btn-primary'>Contact</button>
                  <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <h3 className='popup-title'>Contact Information</h3>
                    <p><b>Tel:</b> +1(857)123-1234</p>
                    <p><b>Email:</b> jess@skills.com</p>
                    <p><b>LinkedIn:</b> https://www.linkedin.com</p>
                  </Popup>
                </p>
        </div>
        <img src={jess} alt="ceo" />
      </div>
    </section>

    <section className="features-main my-2">
      <div className="container grid grid-3">
      <div className="card flex">
      <img src={earthlogo} alt="ceo" />
          <p>
          We're world's largest professional skill development application in more than 200 countries and territories worldwide.
          </p>
        </div>
        <div className="card flex">
        <img src={networklogo} alt="ceo" />
          <p>Enhance your skills with help of expertise</p>
        </div>
        <div className="card flex">
        <img src={worklogo} alt="ceo" />
          <p>
          All sorts of jobs listings are posted on LinkedIn everyday by employers, that you can fill out to get better-tailored job listings.
          </p>
        </div>
      </div>
    </section>
    </>
    )
    }

