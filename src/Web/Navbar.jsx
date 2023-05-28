import React from "react";
import { NavLink } from 'react-router-dom';
import './web.css';

function Navbar() {

    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h2>
                        <span className="text-red-900  font-extrabold text-3xl" > DEN</span>
                        <span className="text-black bold font-extrabold text-3xl" >VER</span>
                    </h2>
                </div>
                <div>
                    <ul className="flex justify-evenly space-x-3 py-4   ">
                        <NavLink activeClassName='active' to={'/'} >
                            <li className="cursor-pointer hover:text-slate-500" >Home</li>
                        </NavLink>

                        <NavLink activeClassName='active' to={'/service'} >
                            <li className="cursor-pointer hover:text-slate-500" >Service</li>
                        </NavLink>
                        <NavLink activeClassName='active' to={'/about'} >
                            <li className="cursor-pointer hover:text-slate-500" >About</li>
                        </NavLink>
                        <NavLink activeClassName='active' to={'/contact'} >
                            <li className="cursor-pointer hover:text-slate-500" >Contact</li>
                        </NavLink>



                    </ul>
                </div>
            </div>
        </>
    )
}
export default Navbar;