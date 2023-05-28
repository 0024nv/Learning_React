import React from "react";
import { useState } from "react";

function Contact(){
    const [text,Ctext] = useState({
        fname:'',
        phone:null,
        email:null,
        message:''
    })

    const inputE=(e)=>{
        const {name,value}=e.target;
        Ctext((prevVal)=>{
            return{
                ...prevVal,
                [name]:value
            }
        })
    }
    const Submits =()=>{
alert(`Hi! my name is ${text.fname} and my phone number is ${text.phone}.My Email is ${text.email}. ${text.message}`)
    }
    return (
        <>
       <div className="w-1/3 m-auto">
        <h1 className="text-center p-2 font-semiboldbold text-3xl">
            Contact Us
        </h1>
        <div className="mt-8">
            <form onSubmit={Submits}>
                {/* name */}
                <p>Full Name</p>
                <div className="w-full border-solid border-2 border-slate-300 mb-2"><input
                className="w-full p-1"
                 type="text"
                 name='fname'
                 value={text.fname}
                 onChange={inputE}
                 placeholder='Enter full name'

                  /></div>

                  {/* phone */}
                <p>Phone Number</p>
                <div className="w-full border-solid border-2 border-slate-300 mb-2"><input
                className="w-full p-1"
                 type="number"
                 name='phone'
                 value={text.phone}
                 onChange={inputE}
                 placeholder='Enter Phone number'

                  /></div>

                  {/* Email */}
                <p>Enter Email</p>
                <div className="w-full border-solid border-2 border-slate-300 mb-2"><input
                className="w-full p-1"
                 type="email"
                 name='email'
                 value={text.email}
                 onChange={inputE}
                 placeholder='abc@gmail.com'

                  /></div>
                  {/* Message */}
                <p>Message</p>
                <div className="w-full border-solid border-2 border-slate-300 mb-2">
                    <textarea cols="30" rows="10"
                    className="w-full p-1 h-12"
                    type="text"
                    name='message'
                    value={text.message}
                    onChange={inputE}
                    placeholder='Add message'
                    >

                    </textarea>
                    </div>
                
<button type="submit" className="mt-6 border-solid border-2 border-gray-500 text-blue-600 px-4 py-1 rounded-lg hover:bg-blue-200" >
Submit
</button>
            </form>
        </div>

       </div>
        </>
    )
}
export default Contact;