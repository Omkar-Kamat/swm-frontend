import React, { useEffect, useState } from 'react'





function SurveyInfo() {


    const [data, setData] = useState(null)
    useEffect(()=>{
      
      const fetchResponse = async ()=>{
        const response = await fetch(`${process.env.PORT}/api/survey`)
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
          <span className="px-4 ">{survey.name}</span>
        </div>
        <div>
          <span className=" font-semibold px-4 block">Age:</span>
          <span className="px-4 ">{survey.age}</span>
        </div>
        <div>
          <span className="block font-semibold px-4">Occupation:</span>
          <span className="px-4 ">{survey.occupation}</span>
        </div>
        <div>
          <span className="block font-semibold px-4">Location:</span>
          <span className="px-4 ">{survey.location}</span>
        </div>
        <div>
          <span className="block font-semibold px-4 ">Q1. Type of waste generated at household/workplace (organic / inorganic) :</span>
          <span className="px-4 ">{survey.Q1}</span>
        </div>
        <div>
          <span className=" font-semibold px-4 block">Q2. Frequency of waste collection :</span>
          <span className="px-4 ">{survey.Q2}</span>
        </div>
        <div>
          <span className="block font-semibold px-4"> Q3. Separation of different types of waste :</span>
          <span className="px-4 ">{survey.Q3}</span>
        </div>
        <div>
          <span className="block font-semibold px-4"> Q4. Reliability of waste collection service :</span>
          <span className="px-4 ">{survey.Q4}</span>
        </div>
        <div>
          <span className="block font-semibold px-4">Q5. Disposal of waste, How? :</span>
          <span className="px-4 ">{survey.Q5}</span>
        </div>
        <div>
          <span className=" font-semibold px-4 block">Q6. Challenges or difficulties in accessing disposal facilities :</span>
          <span className="px-4 ">{survey.Q6}</span>
        </div>
        <div>
          <span className="block font-semibold px-4">Q7. Recycling program/implementation :</span>
          <span className="px-4 ">{survey.Q7}</span>
        </div>
        <div>
          <span className="block font-semibold px-4">Q8. How knowledgable do you feel about solid waste management? :</span>
          <span className="px-4 ">{survey.Q8}</span>
        </div>
        <div>
          <span className="block font-semibold px-4">Q9. Any specific program to implement solid waste management in the area :</span>
          <span className="px-4 ">{survey.Q9}</span>
        </div>






        </div>     
        </div>
      
      )})
      }
       
    </main>
  )
}

export default SurveyInfo