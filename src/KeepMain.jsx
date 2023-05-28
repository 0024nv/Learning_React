import React from "react";
import KeepFormat from "./KeepFormat";
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';



function KeepMain() {

    const [expand,Cngexpand] = useState(false);

    const [note, Cngnote] = useState([{
        title: '',
        desc: ''
    }])

    const [currval, Cngcurrval] = useState({
        title: '',
        desc: ''
    })

    const OnCng = (e) => {

        const { name, value } = e.target;

        Cngcurrval((prevVal) => {
            return {
                ...prevVal,
                [name]: value
            }
        })
    }

    const add = (e) => {
        // alert("clicked");
        e.preventDefault();

        Cngnote((prevArr)=>{
            return[
                ...prevArr,
                {
                    title: currval.title,
                    desc: currval.desc
                }
            ]
        })
        currval.title = '';
        currval.desc = '';
    }

    const dlt= (id)=>{
        Cngnote((prevArr)=>{
            return prevArr.filter((value,index)=>{
                return (id!==index );
            })
        })
    }

    const ExpandIt=()=>{
        Cngexpand(true);
    }
    const Normal=()=>{
        Cngexpand(false);
    }
    return (
        <>
            <div style={{ backgroundColor: 'lightseagreen', padding: '10px 50px' }}>
                <span style={{ fontWeight: 'bolder', fontSize: '30px' }}>Take Note</span>
            </div >



            <div onDoubleClick={Normal}>
                <div style={{ display: 'flex', justifyContent: 'center', margin:'8px' }}>
                    <div style={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <form>
                            {expand?
                            <input type="text"
                                name="title"
                                placeholder="Title"
                                style={{ width: '100%', height: '40px' }}
                                onChange={OnCng}
                                value={currval.title}
                            />:null}
                            <textarea
                                name="desc"
                                style={{width:'100%'}}
                                placeholder="Write a note"
                                id="" cols="70" rows="10"
                                onChange={OnCng}
                                value={currval.desc}
                                onClick={ExpandIt}

                            ></textarea>

                            {expand?
                            <div style={{display:'flex',justifyContent:'end', marginTop:'-40px'}}>
                            <Button style={{color:'royalblue',backgroundColor:'lightcyan'}} onClick={add}><AddIcon /></Button>
                            </div>
                            :null}
                            
                        </form>
                    </div>
                </div>
            </div>


            <div >
                <div className="show" style={{ display: 'flex',flexWrap:'wrap', justifyContent: 'flex-start', padding: '5px' }} >
                    {note.map((value, index) => {
                        if(value.title!==''||value.desc!==''){
                            return (
                                <KeepFormat
                                    key={index}
                                    id={index}
                                    title={value.title}
                                    desc={value.desc}
                                    dlt={dlt}
                                />
                            )
                        }
                        return (<></>)
                    })}
                </div>
            </div>
        </>
    )
}

export default KeepMain;