import React from 'react'
import omkar from '../images/omkar.png'
import agrim from '../images/agrim.jpg'
function Creator() {
  return (
    <>
    <main className="max-w-[982px] mx-auto mobile">
    <div className="flex justify-center creator">
    
    <div className="lul shadow-lg w-[350px] h-[380px] text-center mx-4 my-4 rounded-[1.5rem]">
      <div className=" w-[10rem] mx-auto my-12 flex flex-col justify-center">
      <img src={omkar} alt="Omkar" className="w-[10rem] rounded-[50%]"/>
      </div>
      <div className="my-auto">
        <span className="creatorInfo block text-[1.25rem] font-bold">Kamat Omkar Vidyadhar</span>
        <span className="creatorInfo block text-[1.25rem] font-semibold">Lovely Professional University</span>
        <span className="creatorInfo block text-[1.25rem] font-medium">Student - B.Tech. CSE - 12320650</span>
        <span></span>
      </div>
    </div>
    <div className="lul shadow-lg w-[350px] h-[380px] text-center mx-8 my-4 rounded-[1.5rem]">
      <div className=" w-[10rem] mx-auto my-12 flex flex-col justify-center">
      <img src={agrim} alt="Agrim" className="w-[10rem] rounded-[50%]"/>
      </div>
      <div className="my-auto">
        <span className="creatorInfo block text-[1.25rem] font-bold">Agrim Saksena</span>
        <span className="creatorInfo block text-[1.25rem] font-semibold">Lovely Professional University</span>
        <span className="creatorInfo block text-[1.25rem] font-medium">Student - B.Tech. CSE - 12325726</span>
        <span></span>
      </div>
    </div>

    </div>
    </main>
    </>
  )
}

export default Creator