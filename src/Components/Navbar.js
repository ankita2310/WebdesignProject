
import React from 'react';
import {Nav, NavLink, Bars, NavMenu,NavBtn, NavBtnLink } from './NavbarElements.js';

export const Navbar =()=>{

return(
    <> 
        <Nav>
        <NavLink to="/" style={{color:'#fff'}}>
                <h3>EDUCADEMY</h3>
            </NavLink>
          
            <NavMenu>
                <NavLink to="/" activeStyles>Home</NavLink>
                <NavLink to="/aboutUs" activeStyles>About Us</NavLink>
                <NavLink to="/profile" activeStyles>Profile</NavLink>
                <NavLink to="/media" activeStyles>News/Events</NavLink>
                <NavLink to="/membership" activeStyles>Membership</NavLink>
               
                <NavLink to="/login">Login</NavLink>
            
            <NavBtn>
                <NavBtnLink to="/signUp">Sign Up</NavBtnLink>
            </NavBtn>

            </NavMenu>

        </Nav>
    </>
)
}