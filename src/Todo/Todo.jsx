import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

const Todo = (props) => {
    return (
        <>
            <div className='flex justify-between'>
                <div className='to-blue-400'>
                    <p>{props.desc}</p>
                </div>
               
                <button className='hover:text-green-500' onClick={()=>{
                    props.Edit(props.id)
                }} >
                    Edit
                </button>
                <button className='hover:text-red-500' onClick={() => {
                    props.del(props.id)
                }}>
                    <DeleteIcon />
                </button>
            </div>
        </>
    )
}

export default Todo