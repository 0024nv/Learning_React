import React from "react";
import { useState } from "react";
import './index.css';

function Forms2(){
   const [fullname,setFullname] = useState({
    fname:'',
    lname:'',
    email:''
   })
   const [displayFullname,displaySetfullname] = useState({
    FN:'',
    LN:'',
    EMAIL:''
   })
    const inputEvent=(e)=>{
        console.log(e.target.value);
        console.log(e.target.name);

        // const value = e.target.value;
        // const name = e.target.name;
        
        // Object destruction
        const {name,value} = e.target;
// Here useState function is returning object
// It takes prevValue as parameter which is previous stored value object
// name: is used to check current input of form 

        setFullname((prevValue)=>{
            // shortcutting code by using spread(...) keyword
            return{
                ...prevValue,
                [name]:value // matching key with name and setting its value as value
            }

            // if(name ==='fName'){
            //     return{
            //         fname:value,
            //         lname:prevValue.lname,
            //         email:prevValue.email
            //     }
            // }
            // else if(name === 'lName'){
            //     return{
            //         fname:prevValue.fname,
            //         lname:value,
            //         email:prevValue.email
            //     }
            // }
            // else if(name === 'Email'){
            //     return{
            //         fname:prevValue.fname,
            //         lname:prevValue.lname,
            //         email:value
            //     }
            // }

        })
    }
    const onSubmits =(e)=>{
        e.preventDefault();
        alert('Form Submitted');
        displaySetfullname(
            {
                FN:fullname.fname,
                LN:fullname.lname,
                EMAIL:fullname.email
            }
        )
    }
    return (
        <>
        <form onSubmit={onSubmits}>
                <div style={{ display: 'flex', flexDirection: 'column', width: '40%', alignItems: 'center', justifyContent: 'center' }}>
                    <h1 className="NetHeading">Hello {displayFullname.FN} {displayFullname.LN}</h1>
                    <h1 className="NetHeading">E-mail: {displayFullname.EMAIL}</h1>
                    <input
                    style={{margin:'3px'}}
                        type="text"
                        placeholder="User name"
                        name="fname"
                        onChange={inputEvent}
                        value={fullname.fname}
                    />
                    <input 
                    style={{margin:'3px'}}
                        type="text"
                        placeholder="Last Name"
                        name="lname"
                        onChange={inputEvent}
                        value={fullname.lname}
                    />
                    <input type="email" 
                     placeholder="Email"
                     name="email"
                     onChange={inputEvent}
                     value={fullname.email}
                    />
                    <button type="submit" className="eventButton" style={{ margin: '3px' }}>Submit</button>
                </div>

            </form>
        </>
    )
}
export default Forms2;