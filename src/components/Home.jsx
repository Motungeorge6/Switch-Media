import React ,{useState} from 'react'
import Logo from '../assets/Switch logo.png'
import Model from '../assets/modella.jpg'
const Navbar = () => {
    return (
      // Parent container
        <div className='bg-hero-image w-full h-screen bg-cover flex items-center px-4 ' >
           <div className='text-center text-white uppercase font-extrabold px-20 w-1/2 '>
            <h1 className='text-8xl '>Unique <br /> Content </h1>
           
            <div 
            className='text-white inline border-b-4  border-yellow-600 flex pb-[30%]'>
           </div>
           
           </div>
           <div className='pt-[24.2%] pl-[15%] '>
           <h2 className='text-white'>
           Focused on unique content creation.
           </h2>
           </div>
           
        </div>

        
    
  )
}

export default Navbar