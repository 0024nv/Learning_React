import React from "react";
import {useParams} from "react-router-dom";
import {useLocation,useNavigate} from 'react-router-dom';



function User(match){
    // useParams
    const {fname} = useParams();
    console.log(fname);

    // UseLocation
    const location = useLocation();
    console.log(location);

    // useHistory === useNavigate
    const navigate = useNavigate();
    console.log(navigate);

    return(
        <>
        <h3>
            Hi! I am  user {fname}
        </h3>
        <h5>
            My location is : `{location.pathname}`;
        </h5>
        <div>
            {
                location.pathname==='/user/nikhil'?<button onClick={()=>{
                    alert('Best User')
                }} >Click </button>:null
            }
        </div>
        <div>
            {
                location.pathname==='/user/nikhil'?<button onClick={()=>{
                    navigate('/')
                }} >Home </button>:null
            }
        </div>
        <div>
            <button onClick={()=>{
                navigate('/service')
            }}>
                Go Service
            </button>
        </div>
        <div>
            <button onClick={()=>{
                navigate(-1)
            }}>
                Go Back
            </button>
        </div>
        <div>
            <button onClick={()=>{
                navigate(1)
            }}>
                Go Forward
            </button>
        </div>
        </>

    )
}

export default User;