import React from "react";
import '../styles/membership.css';
import { Link } from "react-router-dom";

export const Membership = () => {
    return (
      <>
        <section className="stats">
      <div className="container">
        <h3 className="stats-heading text-center my-1 title-color">
          EDUCADEMY MEMBERSHIP PLANS
        </h3>
        <hr></hr>
      </div>
      <div className="row gx-5 mt-8 p-4">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title title-color">BASIC</h5>
              <p className="card-text">
              <ul className="price">
                    <li className="grey">$ 9.99 / year</li>
                    <li>50 Courses</li>
                    <li>No interaction with experts</li>
                    <li>Accessible on only Mobiles</li>
                    <li>No Projects</li>
                    {}
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title title-color">PRO</h5>
              <p className="card-text">
              <ul className="price">
                    <li className="grey">$ 24.99 / year</li>
                    <li>100 Courses</li>
                    <li>24/7 Interaction with experts</li>
                    <li>Accessible on only Mobiles/Laptops</li>
                    <li>2 Projects</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title title-color">PREMIUM</h5>
              <p className="card-text">
              <ul className="price">
                    <li className="grey">$ 49.99 / year</li>
                    <li>200 Courses</li>
                    <li>24/7 Interaction with experts</li>
                    <li>Accessible on only Mobiles/Laptops</li>
                    <li>5 Projects</li>
                    {}
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="memberDiv">
      <Link to="/login" className="btn btn-membership"> Login </Link>
      </div>
    </section>
      </>
    /*
    <div>
         
    <section className="stats">
      <div className="container">
        <h3 className="stats-heading text-center my-1 title-color">
          EDUCADEMY MEMBERSHIP PLANS
        </h3>
        <hr></hr>

        <div className="grid grid-3 text-center my-4">
          <div>
          <div className="columns">
                <ul className="price">
                    <li className="header">Basic</li>
                    <li className="grey">$ 9.99 / year</li>
                    <li>50 Courses</li>
                    <li>No interaction with experts</li>
                    <li>Accessible on only Mobiles</li>
                    <li>No Projects</li>
                    {}
                </ul>
            </div>
            </div>
            <div>
          <div className="columns">
                <ul className="price">
                    <li className="header">Pro</li>
                    <li className="grey">$ 24.99 / year</li>
                    <li>100 Courses</li>
                    <li>24/7 Interaction with experts</li>
                    <li>Accessible on only Mobiles/Laptops</li>
                    <li>2 Projects</li>
                </ul>

                <br></br>
                <br></br>

                <li className="grey"><a href="#/login" className="btn btn-primary"> Login </a></li>

            </div>
            </div>
          </div>
          <div>
          <div className="columns">
                <ul className="price">
                    <li className="header">Premium</li>
                    <li className="grey">$ 49.99 / year</li>
                    <li>200 Courses</li>
                    <li>24/7 Interaction with experts</li>
                    <li>Accessible on only Mobiles/Laptops</li>
                    <li>5 Projects</li>
                    {}
                </ul>
            </div>
            
        </div>
      </div>
    </section>
    </div>
    */
    


    )
}