import React, { useEffect, useState } from 'react'





function SurveyInfo() {


    const [data, setData] = useState(null)
    useEffect(()=>{
      
      const fetchResponse = async ()=>{
        const response = await fetch(`https://api-che-swm.onrender.com/api/survey`)
        const json = await response.json()
       

            if(response.ok){
             setData(json)
            }
          }

          fetchResponse();
    },[])


  return (
    <main className='mobile max-w-[982px] mx-auto survey-info grid grid-cols-2 justify-items-center'>
      {
      data && data.map((survey)=>{
         
        return (
        
        <div id={survey._id} key={survey._id} className="w-[350px] shadow-lg m-4 rounded-[1rem] local-survey-info">
          <div className='my-4'>
        <div>
          <span className=" font-semibold px-4 block">Name:</span>
          <div className="px-4 mx-2">{survey.name}</div>
        </div>
        <div>
          <span className=" font-semibold px-4 block">Age:</span>
          <div className="px-4 mx-2">{survey.age}</div>
        </div>
        <div>
          <span className="block font-semibold px-4">Occupation:</span>
          <div className="px-4 mx-2">{survey.occupation}</div>
        </div>
        <div>
          <span className="block font-semibold px-4">Location:</span>
          <div className="px-4 mx-2">{survey.location}</div>
        </div>
        <div>
          <span className="block font-semibold px-4 ">Q1. Type of waste generated at household/workplace (organic / inorganic) :</span>
          <div className="px-4 mx-2">{survey.Q1}</div>
        </div>
        <div>
          <span className=" font-semibold px-4 block">Q2. Frequency of waste collection :</span>
          <div className="px-4 mx-2">{survey.Q2}</div>
        </div>
        <div>
          <span className="block font-semibold px-4"> Q3. Separation of different types of waste :</span>
          <div className="px-4 mx-2">{survey.Q3}</div>
        </div>
        <div>
          <span className="block font-semibold px-4"> Q4. Reliability of waste collection service :</span>
          <div className="px-4 mx-2">{survey.Q4}</div>
        </div>
        <div>
          <span className="block font-semibold px-4">Q5. Disposal of waste, How? :</span>
          <div className="px-4 mx-2">{survey.Q5}</div>
        </div>
        <div>
          <span className=" font-semibold px-4 block">Q6. Challenges or difficulties in accessing disposal facilities :</span>
          <div className="px-4 mx-2">{survey.Q6}</div>
        </div>
        <div>
          <span className="block font-semibold px-4">Q7. Recycling program/implementation :</span>
          <div className="px-4 mx-2">{survey.Q7}</div>
        </div>
        <div>
          <span className="block font-semibold px-4">Q8. How knowledgable do you feel about solid waste management? :</span>
          <div className="px-4 mx-2">{survey.Q8}</div>
        </div>
        <div>
          <span className="block font-semibold px-4">Q9. Any specific program to implement solid waste management in the area :</span>
          <div className="px-4 mx-2">{survey.Q9}</div>
        </div>






        </div>     
        </div>
      
      )})
      }
       
    </main>
  )
}

export default SurveyInfo