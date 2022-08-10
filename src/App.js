import './App.css';
import { Navbar } from './Components/Navbar';
import { Route, HashRouter, Routes } from "react-router-dom";
import React from 'react';
import {FooterContainer} from './containers/footer';
import {Home} from './Components/Home';
import {AboutUs} from './Components/AboutUs';
import { Profile } from './Components/Profile';
import  CreateCourse  from './Components/CreateCourse';
import { Membership } from './Components/Membership';
import { AdminDashboard } from './Components/AdminDashboard';
import { AuthProvider } from './utility/auth';
import Login from './Components/Login';
import RequireAuth from './Components/RequireAuth';
import {Media} from './Components/Media';
import SignUpForm from './Components/SignUpForm'; 
import  AllCourses  from './Components/AllCourses';
import  EditCourse  from './Components/EditCourse';


function App() {
 return(
    <AuthProvider>
     <HashRouter>
        <div>
        
            <>
            <Navbar/>
              </>
          
          <div className="content">
            <Routes>
              <Route exact path="/" element={<Home/>} />
              <Route exact path="/aboutUs" element={<AboutUs/>} />
             <Route path="/profile" element={<RequireAuth><Profile/></RequireAuth>} />
              <Route path="/login" element={<Login />} />
              <Route path="/media" element={<Media/>}/>
              <Route path="/membership" element={<Membership/>}/>
              <Route path="/admindashboard" element={<RequireAuth><AdminDashboard/></RequireAuth>}/>
              <Route exact path="/signUp" element={<SignUpForm/>} />
              <Route path="/createcourse" element={<RequireAuth><CreateCourse/></RequireAuth>}/>
              <Route path="/allcourses" element={<RequireAuth><AllCourses/></RequireAuth>}/>
              <Route exact path="/editcourse" element={<RequireAuth><EditCourse/></RequireAuth>}/>

             </Routes>
           
          </div>
          <FooterContainer/>
        </div>
      </HashRouter>
    </AuthProvider>
  )
  
  
}

export default App;
