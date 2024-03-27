import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
    
    <div className="poppins h-[3rem] max-w-[982px] mx-auto mobile navbar border-b-2 border-b-[#a52a2a37] ">

        <ul className="flex justify-center
        p-[0.75rem]
        gap-16
        text-[20px] writing font-semibold text-center">

            <li className='flex flex-col justify-center'>
              <Link to="/" exact activeClassName="active">
                Home
              </Link>
            </li>
            <li className='flex flex-col justify-center'>
              <Link to="/local-info" exact activeClassName="active">
                Locality Information
              </Link>
            </li>
            <li className='flex flex-col justify-center'>
              <Link to="/survey" exact activeClassName="active">
                Survey
              </Link>
            </li>
            <li className='flex flex-col justify-center'>
              <Link to="/creator-info" exact activeClassName="active">
                Creator Information
              </Link>
            </li>
        </ul>

    </div>
    
    </>
  )
}

export default Navbar