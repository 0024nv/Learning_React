import React from 'react';
import ListTD from './ListTD';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

function ListMainTD(){
    var [arr,cngarr] = useState([]);
    var [text,ChangeText] = useState('');

    const inputText=(e)=>{
        ChangeText(e.target.value);
    }

    const add=()=>{
       cngarr((prevArr)=>{
        return [...prevArr,text];
       })
       ChangeText('');
    }
    const onDelete=(id)=>{
        // console.log(id);
        cngarr((prevArray)=>{
            return prevArray.filter((value,index)=>{
                return (id!==index);
            })
        })
    }
    return (
        <>
        <div className="frm">
            <input 
            type="text"
            placeholder='Enter List'
            onChange={inputText}
            value={text}
            />
            <span><Button
            onClick={add}
            > <AddIcon>Add</AddIcon> </Button></span>
        </div>
       { arr.map((value,index)=>{
        return(
            <ListTD 
            key={index}
            id={index}
            desc ={value} 
            delete = {onDelete}
            />
        )
       })}
        </>
    )
}
export default ListMainTD;
