import React from 'react';
import { useState } from 'react';
import './index.css'


function Events(){

    const green = '#9d80ff';
    var [bg,ChangeBg] = useState(green);
    const [name,changeName] = useState('Click Me');

    const change =()=>{
        var cColor = 'red';
        ChangeBg(cColor);
        changeName('Ochh! 🥰')
    }
    const bgBack =()=>{
        ChangeBg(green);
        changeName('Click Me')
    }

    return(
        <>
        <div className='eventBack' style={{backgroundColor: bg}}>
            <button className='eventButton' onClick={change} onDoubleClick={bgBack}>{name}</button>
        </div>
        </>
    )
}

export default Events;