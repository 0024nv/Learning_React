import React from "react";

function GitHubFormat(props){
    return(<>
    <div style={{width:'30%',display:'flex',backgroundColor:'white',padding:'8px',borderRadius:'2px',margin:'12px 5px'}}>
        <div style={{width:'30%'}}>
            <img src={props.img} alt="" />
        </div>
        <div style={{width:'66%'}} >
            <h2>{props.name}</h2>
            <p style={{textAlign:'center' , padding:'5px',color:'gray'}}>{props.work}</p>
            <div style={{display:'flex',justifyContent:'space-evenly'}}>
                <div style={{width:'33%'}}>
                    <h5>Star</h5>
                    <p style={{textAlign:'center'}}>{props.star}</p>
                </div>
                <div style={{width:'33%'}}>
                    <h5>Hi</h5>
                    <p style={{textAlign:'center'}}>35</p>
                </div>
                <div style={{width:'33%'}}>
                    <h5>Hi</h5>
                    <p style={{textAlign:'center'}}>35</p>
                </div>
            </div>
        </div>
    </div>
    
    </>)
}
export default GitHubFormat;