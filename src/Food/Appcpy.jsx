import React from 'react';
import Food from './Food';
import arr from './ArrFood';
import { useState } from 'react';


const Appcpy = () => {

    const [curr,Ccurr] = useState(arr);


    const Ubotton = [...new Set(arr.map((ele)=>{
        return ele.time;
    })),'all']


    console.log(Ubotton);
    const clicked=(e)=>{
        const name = e.target.name;
        if(name==='all'){
            Ccurr(arr)
        }
        else{
            Ccurr(
                arr.filter((element,id)=>{
                    return element.time === name;
                })
            )
        }
       
    }
  return (
    <>
    <div className='w-4/5 m-auto'>
        <div className='w-4/5 flex justify-between m-auto mb-7 mt-4'>
            {
                Ubotton.map((ele,id)=>{
                    return <button 
                    onClick={clicked}
                     className='border-0 rounded-lg hover:bg-emerald-200  bg-emerald-100 px-5 py-1'
                     name= {ele}
                     key={id}
                    >{ele}</button>
                })
            }
        </div>
    <div className='flex flex-wrap '>
        {
            curr.map((value,index)=>{
                return <Food
                key={value.key}
                heading= {value.heading}
                desc= {value.desc}
                price= {value.price}
                src={value.src}
                />;
            })
        }

    </div>
    </div>
    
    </>
  )
}

export default Appcpy