import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Git.css'
import GitHubFormat from './GitHubFormat';
function GitHubUser() {

    const [users,GetUsers] = useState([]);

    const getUsers= async ()=>{
        const response = await fetch('https://api.github.com/users');
        console.log(response);
        const data = await response.json();
        GetUsers(data);
        console.log(data);
    }

    useEffect(()=>{
        getUsers();
    },[])

    return (
        <>
            <div style={{backgroundColor:'lightsteelblue',width:'100%',height:'100vh'}} >
                <div style={{ width: '80%', margin: 'auto' }}>
                    <h2 style={{ textAlign: 'center', padding: '15px' }}>List of Git Hub Users</h2>
                    <div style={{display:'flex',flexWrap:'wrap'}}>
                    <GitHubFormat/>
                    {
                        users.map((value,index)=>{
                            return<GitHubFormat
                            key = {index}
                            name = {value.login}
                            img = {value.avatar_url}
                            work= {value.organizations_url}
                            star={value.starred_url}
                            />
                        })
                    }
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default GitHubUser;