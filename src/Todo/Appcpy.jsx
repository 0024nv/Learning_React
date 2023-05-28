import React from 'react'
import { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import Todo from './Todo';

export const Appcpy = () => {
    const [todo, Ctodo] = useState();
    const [list,Clist] = useState([]);
    const [ toggleAdd,Ctoggle] = useState(true);
    const [EditID,CediitID] = useState();
    
    const inputE = (e) => {
        Ctodo(e.target.value)
    }

    const add=()=>{
        if(todo===''){
            alert('No data filled');
        }
        else if(!toggleAdd){
            Clist(list.map((element)=>{
                if(element.id === EditID){
                    return {
                        ...list,
                        name:todo
                    }
                }
                return element;
            }))

            Ctodo('');
            Ctoggle(true);
            CediitID(null);
        }
        else{
            Clist((prevArr)=>{
                const allData ={id: new Date().getTime().toString() , name:todo};
                return[...prevArr,allData];
            })
        }
        Ctodo('');
    }
    const Dtodo=(id)=>{
        Clist((prevArr)=>{
            return prevArr.filter((value)=>{
                return (id!==value.id);
            })
        })
    }

    const ClearAll=()=>{
        Clist([]);
    }

    const edit=(id)=>{
        let newEditItem = list.find((element)=>{
            return id=== element.id;
        });
        Ctodo(newEditItem.name);
        Ctoggle(false);
        CediitID(newEditItem.id);
    }
    return (
        <>
            <div>
                <div className='w-1/3 m-auto'>
                    <input
                    className='w-4/6'
                        type="text"
                        placeholder='Add Items...'
                        value={todo}
                        onChange={inputE}
                    />
                    
                    {
                        toggleAdd?<button onClick={add } className='hover:text-blue-500'>
                        <AddIcon />
                    </button>:<button onClick={add } className='hover:text-blue-500'>
                        ✏
                    </button>
                    }
                    
                </div>

                {/* display todo */}
                <div className='w-1/3 m-auto'>
                    {list.map((value)=>{
                        return(
                            <Todo
                            key={value.id}
                            id={value.id}
                            desc = {value.name}
                            del={Dtodo}
                            Edit={edit}
                            
                            />
                        )
                    })}
                </div>
                
                {
                    list.length?                <div className='w-1/3 m-auto'>
                    <button onClick={ClearAll}
                    className='p-2 bg-slate-300 rounded-full hover:bg-slate-200'
                    >Clear All</button>
                </div>:null
                }

            </div>
        </>
    )
}
export default Appcpy;