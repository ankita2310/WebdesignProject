import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../styles/styles.css';
import MyCourses from './MyCourses.js';
import AllCourses from './AllCourses.js';
import LoggedInUser from "../utility/loggedInUser";

export const Profile = () => {
    const auth=LoggedInUser.getLoggedUser();
    const navigate=useNavigate()
    const handleLogOut=()=>{
        localStorage.removeItem('token');
        LoggedInUser.setLoggedUser('','','','');
            navigate('/')
    }
    console.log(`auth is ${auth.id}`)
    if(auth.isAdmin === true)
    {
        return <Navigate to="/admindashboard" />
       }
   if(typeof auth.id === "undefined"){
    return <Navigate to="/" />
   }
    return (
        <div>
       <div className="row">
            <div className="col">
             <h3 className="fs-2 title-color">Welcome {auth.name}</h3>
             <h5 className="fs-6 title-color">You are a {auth.membershipType} member</h5>
            </div>
            <div className="col-auto">
                <button className="btn btn-primary pull-right" onClick={handleLogOut}>Logout</button>
            </div>
           
            </div>
            <Tabs
                defaultActiveKey="allcourses"
                id="uncontrolled-tab-example"
                className="mb-3">
                <Tab eventKey="allcourses" title="All Courses">
                 <AllCourses/>
                </Tab>
                <Tab eventKey="mycourses" title="My Courses" >
                <MyCourses/>
                </Tab>
            </Tabs>
        </div>


    )
}

