import React from "react";
import { useAuth } from "../utility/auth";
import { useNavigate } from "react-router-dom";
import react, { useState } from 'react';
import { useEffect } from 'react';
import { LinkContainer } from "react-router-bootstrap";
import { Button} from "react-bootstrap";
import LoggedInUser from "../utility/loggedInUser";
import '../styles/adminDash.css'


export const AdminDashboard = () => {

    const navigate = useNavigate();
  
    const handleCreate = () => {
        navigate('/createcourse');
      };

      const handleAllCourses = () => {
        navigate('/allcourses');
      };
      const handleDelete = () => {
        navigate('/deletecourse');
      };

      const handleLogOut=()=>{
        localStorage.removeItem('token');
        LoggedInUser.setLoggedUser('','','','');
            navigate('/')
    }

      const user=useState(LoggedInUser.getLoggedUser().name)
      
    return (
        <>
                    <section className="stats">
      <div className="container">
        <h3 className="stats-heading text-center my-1 title-color">
        Welcome to admin dashboard, {user}
        </h3>
        <hr></hr>
      </div>
      <div className="row gx-5 mt-8 p-4">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title title-color">CREATE</h5>
              <p className="card-text">
              <ul className="price">
              <p><b>ACTION: </b>Creating a New Course</p>
              <p><b>*Only Admin has access to create a course</b></p>
              <div className="memberDiv">
              <button className="btn btn-primary"
                        onClick={handleCreate}>CREATE
                    </button>
               </div>   
                </ul>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title title-color">EDIT</h5>
              <p className="card-text">
              <ul className="price">
              <p><b>ACTION: </b>Editing a Course</p>
              <p><b>*Admin has access to edit a course</b></p>
              <div className="memberDiv"><button className="btn btn-primary"
                        onClick={handleAllCourses}>EDIT
                    </button>
                    </div>
                </ul>
                </p>
            </div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title title-color">DELETE</h5>
              <p className="card-text">
              <ul className="price">
              <p><b>ACTION: </b>Delete a Course</p>
                    <p><b>*Admin has access to delete a course</b></p>
                    <div className="memberDiv">
                    <button className="btn btn-primary"
                        onClick={handleDelete}>DELETE
                    </button>
                    </div>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="memberDiv">
      <button className="btn btn-primary pull-right" onClick={handleLogOut}>Logout</button>
      </div>
    </section>
        </>
       

    )
}
