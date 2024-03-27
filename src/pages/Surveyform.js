import React, { useState } from 'react'


function Surveyform() {
  const[name,setName] = useState('')
  const[age,setAge] = useState('')
  const[gender,setGender] = useState('')
  const[occupation,setOccupation] = useState('')
  const[location,setLocation] = useState('')
  const[Q1,setq1] = useState('')
  const[Q2,setq2] = useState('')
  const[Q3,setq3] = useState('')
  const[Q4,setq4] = useState('')
  const[Q5,setq5] = useState('')
  const[Q6,setq6] = useState('')
  const[Q7,setq7] = useState('')
  const[Q8,setq8] = useState('')
  const[Q9,setq9] = useState('')
  const[error,setError] = useState(null)


  const handleSubmit = async (e)=>{
    e.preventDefault()
    const survey = {name,age,gender,occupation,location,Q1,Q2,Q3,Q4,Q5,Q6,Q7,Q8,Q9}

    const response = await fetch('/api/survey',{
      method:'POST',
      body: JSON.stringify(survey),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const json = await response.json()

    if(!response.ok){
      setError(json.error)
    }
    if(response.ok){
      setError(null)
      setAge('')
      setName('')
      setGender('')
      setLocation('')
      setOccupation('')
      setq1('')
      setq2('')
      setq3('')
      setq4('')
      setq5('')
      setq6('')
      setq7('')
      setq8('')
      setq9('')
      console.log("added")
    }


  }
  return (
    <>
    <main className='mx-auto max-w-[982px] mobile survey'>
      <div className='poppins  max-w-[900px] mx-auto my-4 py-8 mobile shadow-lg rounded-[1rem]'>
        <div className='text-[1.5rem] font-semibold 
        p-4 mx-auto w-full text-center lul
        '>
          Survey on 
          Solid Waste Problems and Management
        </div>
      <form onSubmit={handleSubmit}>
        <div className="w-[32rem] mx-auto form-div">
          
          <label className="labelMain" hmtlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={(e)=>setName(e.target.value)} value={name} required/>
        
          <label className="labelMain" hmtlFor="age">Age</label>
          <input type="text" pattern='[0-9]{2}' id="age" required onChange={(e)=>setAge(e.target.value)} value={age}/>
          
          <label className="labelMain" hmtlFor="gender" >Gender</label>
          <div className="flex gap-8 mx-8 gender">
            <div className='flex'>
              <input type="radio" id="male" name="gender" onChange={(e)=>setGender(e.target.value)} value="Male"/>
              <label hmtlFor="male" className="genderLabel">Male</label>
            </div>
            <div className='flex'>
              <input type="radio" id="female" name="gender" onChange={(e)=>setGender(e.target.value)} value="Female"/>
              <label hmtlFor="female" className="genderLabel">Female</label>
            </div>
            <div className='flex'>
              <input type="radio" id="others" name="gender" onChange={(e)=>setGender(e.target.value)} value="Others"/>
              <label hmtlFor="others" className="genderLabel">Others</label>
            </div>
          </div>
          

          <label className="labelMain" hmtlFor="occupation">Occupation</label>
          <input type="text" id="occupation" required onChange={(e)=>setOccupation(e.target.value)} value={occupation}/>
          
          <label  className="labelMain" hmtlFor="location">Location</label>
          <input type="text" id="location" required onChange={(e)=>setLocation(e.target.value)} value={location}/>

          <label  className="labelMain" >
           Q1. Type of waste generated at household/workplace (organic / inorganic)
          </label>
          <input type="text" required onChange={(e)=>setq1(e.target.value)} value={Q1}/>
          
          <label  className="labelMain">
            Q2. Frequency of waste collection
          </label>
          <input type="text"  required onChange={(e)=>setq2(e.target.value)} value={Q2}/>

          <label  className="labelMain">
            Q3. Separation of different types of waste 
          </label>
          <input type="text"  required onChange={(e)=>setq3(e.target.value)} value={Q3}/>

          <label  className="labelMain">
            Q4. Reliability of waste collection service 
          </label>
          <input type="text"  required onChange={(e)=>setq4(e.target.value)} value={Q4}/>

          <label  className="labelMain">
            Q5. Disposal of waste, How?
          </label>
          <input type="text"  required onChange={(e)=>setq5(e.target.value)} value={Q5}/>

          <label  className="labelMain">
            Q6. Challenges or difficulties in accessing disposal facilities
          </label>
          <input type="text"  required onChange={(e)=>setq6(e.target.value)} value={Q6}/>

          <label  className="labelMain">
            Q7. Recycling program/implementation
          </label>
          <input type="text"  required onChange={(e)=>setq7(e.target.value)} value={Q7}/>

          <label  className="labelMain">
            Q8. How knowledgable do you feel about solid waste management?
          </label>
          <input type="text"  required onChange={(e)=>setq8(e.target.value)} value={Q8}/>

          <label  className="labelMain">
            Q9. Any specific program to implement solid waste management in the area
          </label>
          <input type="text"  required onChange={(e)=>setq9(e.target.value)} value={Q9}/>
          












          <input type="submit" value="Submit Survey" className="btn block" />
          
          <div className="w-[75%] font-medium text-[red] m-4">
            {error && <div>{error}</div>}
          </div>
        
        </div>
      </form>
      </div>



    </main>
    </>
  )
}

export default Surveyform