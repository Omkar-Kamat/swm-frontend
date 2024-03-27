import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <div className="max-w-[982px] h-[5rem] mx-auto mobile header flex flex-col justify-center border-b-2 border-b-[#a52a2a37]">

      <div className="poppins text-[2rem] font-bold text-center leading-[2rem] writing">
        <Link to="/">
          SOLID WASTE PROBLEM AND MANAGEMENT
        </Link>
      </div>
    
    </div>
    </>
  )
}

export default Header