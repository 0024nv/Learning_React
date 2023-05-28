import React from 'react'
;
import Popup from 'reactjs-popup';

const Pop = () => {
  return (
    <>
    <div className='bg-gray-400 '>
        <div>

          <div className='flex items-center justify-between w-[94%] w- m-auto bg-emerald-200 py-4' >
            <div className='text-xl font-semibold px-4 py-3'>Group-1</div>
            <div className='p-2 px-4 mr-3 text-base font-normal bg-primary text-gray-900 rounded-lg dark:text-white hover:bg-primary dark:hover:bg-gray-700 hover:border-2 hover:border-white'>
              <button className=' text-xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full'>
                Add an expenses
              </button>
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. A, obcaecati.
          </div>
        </div>
      </div>
      <Popup trigger={<button> Trigger</button>} position="right center">
    <div>Popup content here !!</div>
  </Popup>
    </>
  )
}

export default Pop;