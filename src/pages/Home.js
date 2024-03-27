import React from 'react';
import img1 from '../images/img1.jpeg'




function Home() {
  
  return (
    <>
    <main className="max-w-[982px] mx-auto main poppins mobile">
      <div className='max-w-[950px] mx-auto homeMobile p-4 flex leading-5 rounded-[1rem] shadow-lg justify-evenly'>
        <div className='w-[500px]'>
          <h1 className='text-[1.2rem] font-medium p-2'>What is solid waste?</h1>
          Solid waste refers to any discarded materials that are not liquid or gas, including items like paper, plastics, metals, glass, and organic waste. The management of solid waste presents several problems and challenges, which require effective strategies for handling and disposal. 
          <h1 className="text-[1.2rem] font-medium p-2">Solid Waste Problems</h1>
          <ul className='list-disc mx-4'>
            <li>
            <span className='font-medium'>Overconsumption and Production:</span> The modern lifestyle, characterized by excessive consumption and disposal of goods, leads to a significant volume of solid waste generation.
            </li>
            <li>
            <span className='font-medium'>Environmental Pollution:</span> Improper disposal of solid waste can lead to environmental pollution, including soil, water, and air pollution. Burning solid waste releases harmful pollutants into the atmosphere, while leachate from landfills can contaminate groundwater.
            </li>
            <li>
            <span className='font-medium'>Health Hazards:</span> Accumulation of solid waste can create breeding grounds for disease vectors like mosquitoes and rodents, leading to health hazards for nearby communities.
            </li>
            <li>
            <span className='font-medium'>Resource Depletion:</span> Many materials in solid waste streams are non-renewable resources. Improper disposal means these resources are lost and not available for recycling or reuse.
            </li>
            <li>
            <span className='font-medium'>Landfill Space Constraints:</span> Landfills, the most common method of waste disposal, require large areas of land. Finding suitable sites for landfills is becoming increasingly difficult due to land scarcity and regulatory restrictions.
            </li>
            </ul>
            <h1 className="text-[1.2rem] font-medium p-2">Solid Waste Management</h1> 
            <ul className='list-disc mx-4 '>
            <li>
            <span className='font-medium'>Reduce, Reuse, Recycle (3Rs):</span> Encouraging practices to reduce consumption, promote reuse of materials, and increase recycling rates can significantly reduce the volume of solid waste.
            </li>
            <li>
            <span className='font-medium'>Waste Segregation:</span> Implementing programs for source segregation of waste at households and businesses facilitates efficient recycling and disposal processes.
            </li>
            <li>
            <span className='font-medium'>Composting:</span> Organic waste can be composted to produce nutrient-rich soil amendments, reducing the volume of waste sent to landfills and mitigating environmental impacts.
            </li>
            <li>
            <span className='font-medium'>Waste-to-Energy:</span> Technologies such as incineration and anaerobic digestion can convert solid waste into energy, reducing the reliance on landfills and providing renewable energy sources.
            </li>
            <li>
            <span className='font-medium'>Landfill Management:</span> Improving landfill design, operations, and monitoring practices can mitigate environmental impacts and maximize the lifespan of existing landfills.
            </li>
            </ul>   
        </div>
        <div className='w-[400px] h-[400px]'>
          <img src={img1} alt="types of solid wastes" className="w-[380px] h-[380px] rounded-[1rem] my-[10px] mx-auto"/>
        </div>
      </div>
    <div>
    


    </div>
    </main>
    </>
  )
}

export default Home