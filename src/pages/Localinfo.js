import React from 'react'
import stp from '../images/stp.webp'
import { Link } from 'react-router-dom'


function Localinfo() {
  return (
    <>
    <main className="localInfo grid grid-cols-2 gap-8 justify-items-center mx-auto justify-evenly w-[982px] mobile poppins">
    <Link to="/local-survey-info">
    <div className='rounded-[1rem] w-[375px] shadow-lg flex flex-col justify-center '> 
      <img src={stp} alt="x" className='w-[350px] mx-auto my-4 rounded-[0.85rem]' />
      <div className='w-[350px] mx-auto'>
        <div className='block px-2 w-[350px] font-semibold'>
          Local Survey Information &gt;
        </div>
        <span className='block p-2 pb-4'>
          sfhisgfisdfghgdkfjdljfhgyweroi wljngflkjhdgfyudrlnjekg kjrbgieyrignsjhbgjldsrgiuerh
        </span>
      </div>
    </div>
    </Link>
    
    <Link to='/stp'>
    <div className='rounded-[1rem] w-[375px] shadow-lg flex flex-col justify-center '> 
      <img src={stp} alt="x" className='w-[350px] mx-auto my-4 rounded-[0.85rem]' />
      <div className='w-[350px] mx-auto'>
        <div className='block px-2 w-[350px] font-semibold'>
          Sewage Treatment Plant &gt;
        </div>
        <span className='block p-2 pb-4'>
          sfhisgfisdfghgdkfjdljfhgyweroi
        </span>
      </div>
    </div>
    </Link>

    <Link to='/stp'>
    <div className='rounded-[1rem] w-[375px] shadow-lg flex flex-col justify-center '> 
      <img src={stp} alt="x" className='w-[350px] mx-auto my-4 rounded-[0.85rem]' />
      <div className='w-[350px] mx-auto'>
        <div className='block px-2 w-[350px] font-semibold'>
          Mess &gt;
        </div>
        <span className='block p-2 pb-4'>
          sfhisgfisdfghgdkfjdljfhgyweroi wljngflkjhdgfyudrlnjekg kjrbgieyrignsjhbgjldsrgiuerh
        </span>
      </div>
    </div>
    </Link>

    <Link to='/stp'>
    <div className='rounded-[1rem] w-[375px] shadow-lg flex flex-col justify-center '> 
      <img src={stp} alt="x" className='w-[350px] mx-auto my-4 rounded-[0.85rem]' />
      <div className='w-[350px] mx-auto'>
        <div className='block px-2 w-[350px] font-semibold'>
          Housekeepers &gt;
        </div>
        <span className='block p-2 pb-4'>
          sfhisgfisdfghgdkfjdljfhgyweroi wljngflkjhdgfyudrlnjekg kjrbgieyrignsjhbgjldsrgiuerh
        </span>
      </div>
    </div>
    </Link>
    

    <Link to='/stp'>
    <div className='rounded-[1rem] w-[375px] shadow-lg flex flex-col justify-center '> 
      <img src={stp} alt="x" className='w-[350px] mx-auto my-4 rounded-[0.85rem]' />
      <div className='w-[350px] mx-auto'>
        <div className='block px-2 w-[350px] font-semibold'>
          Canteen &gt;
        </div>
        <span className='block p-2 pb-4'>
          sfhisgfisdfghgdkfjdljfhgyweroi wljngflkjhdgfyudrlnjekg kjrbgieyrignsjhbgjldsrgiuerh
        </span>
      </div>
    </div>
    </Link>
    
    <Link to='/stp'>
    <div className='rounded-[1rem] w-[375px] shadow-lg flex flex-col justify-center '> 
      <img src={stp} alt="x" className='w-[350px] mx-auto my-4 rounded-[0.85rem]' />
      <div className='w-[350px] mx-auto'>
        <div className='block px-2 w-[350px] font-semibold'>
          Agriculture &gt;
        </div>
        <span className='block p-2 pb-4'>
          sfhisgfisdfghgdkfjdljfhgyweroi wljngflkjhdgfyudrlnjekg kjrbgieyrignsjhbgjldsrgiuerh
        </span>
      </div>
    </div>
    </Link>
    
    <Link to='/stp'>
    <div className='rounded-[1rem] w-[375px] shadow-lg flex flex-col justify-center '> 
      <img src={stp} alt="x" className='w-[350px] mx-auto my-4 rounded-[0.85rem]' />
      <div className='w-[350px] mx-auto'>
        <div className='block px-2 w-[350px] font-semibold'>
          Hospital &gt;
        </div>
        <span className='block p-2 pb-4'>
          sfhisgfisdfghgdkfjdljfhgyweroi wljngflkjhdgfyudrlnjekg kjrbgieyrignsjhbgjldsrgiuerh
        </span>
      </div>
    </div>
    </Link>
    


    
    </main>
    </>
  )
}

export default Localinfo