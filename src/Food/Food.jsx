import React from 'react'

const Food = (props) => {
  return (
    
    <>
    <div className='w-[32%] flex border-2 border-gray-400 m-[3px]'>
        <div className='w-2/5'>
        <img src={props.src} alt="loading" />
        </div>
        <div className='w-3/5 p-4'>
            <h1 className='font-extrabold'>{props.heading}</h1>
            <p>{props.desc}</p>
            <div className='flex justify-between items-center'>
                <p className='font-semibold'>
                    Price: {props.price}
                </p>
                <button className='bg-cyan-100 p-2'>
                    Order Now
                </button>
            </div>
            <p>
                Prices may vary on certain day*
            </p>
        </div>
        
    </div>
    </>
  )
}

export default Food;