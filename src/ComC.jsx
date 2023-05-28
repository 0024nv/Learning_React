import React from "react";
import { useContext } from "react";
import { Fname } from "./App";
import { Lname } from "./App";

function ComC(){
    const fname = useContext(Fname);
    const lname = useContext(Lname);

    return(
        <>
        {/* This can be simplyfy using Context Hook */}
        {/* <Fname.Consumer>
            {
                (value)=>{
                    return (
                        <Lname.Consumer>
                            {
                                (lname)=>{
                                   return (<p>My name is {value} {lname} </p>)
                                }
                            }
                        </Lname.Consumer>
                    )
                }
            }
        </Fname.Consumer> */}
        <p>My name is {fname} {lname} </p>
        <h2>Jhukega Nahi Salla</h2>
        </>
    )
}
export default ComC;