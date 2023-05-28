import React from "react";
import { NavLink} from "react-router-dom";
import './Active.css';

function Menu() {
    return (
        <>
        <div style={{display:'flex',justifyContent:'space-evenly'}}>
        <NavLink activeClassName="active" to='/'>
            About 
        </NavLink>

        <NavLink activeClassName="active" to={'/contact'}>
            Contact
        </NavLink>

        <NavLink to={'/search'} activeClassName='active'>
            Search
        </NavLink>
        <NavLink to={'/service'} activeClassName='active' >
            Service
        </NavLink>

        {/* Use  PARAMS */}
        <NavLink to={'/user/nikhil'} activeClassName='active' >
            User
        </NavLink>
        </div>
        

        {/* <div>
            Using anchor Tag
            <div>
            <a href="/">
                About Us
            </a>
            <a href="/contact">
                Contact
            </a>
            </div>
           
            </div> */}
        </>
    )
}
export default Menu;