import React from "react";
import { Route,Routes,Navigate } from "react-router-dom";
import Contact from "./Contact";
import Services from "./Services";

import Navbar from "./Navbar";
import About from "./About";
import Home from "./Home";

function AppCpy(){
    return (
        <>
        <div className="w-4/5 m-auto" >
        <Navbar/>
       
        <Routes>
            <Route path={'/'} element={<Home/>} />
            <Route path={'/service'} element={<Services/>} />
            <Route path={'/contact'} element={<Contact/>} />
            <Route path={'/about'} element={<About/>}/>
            <Route path={'*'} element={<Navigate to={'/'}/>} />
        </Routes>

        </div>
        </>
    )
}
export default AppCpy;