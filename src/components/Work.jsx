import React from 'react'
import Home from '../assets/home-digital-agency-img-01.png'

const Work = () => {
  return (
    // Parent Container
    <div className="flex">
      {/* First image container */}
      <div className="w-[70%] h-[80vh] bg-work-image  mt-[40%]">
        <div className="pb-[20%]">
          <img src={Home} />
        </div>
      </div>
      {/* Second image container */}
      <div className="bg-black w-[50vw] h-[80vh] mt-[40%] justify-center items-center">
        <h2 className="text-[#ba000d] uppercase pl-[20%] pt-[15%] font-bold ">
          Let's work together
        </h2>
        <h1 className="text-white p-[10%] font-[600] text-5xl">
          Digital technology and marketing for leading brands
        </h1>
        <p className="p-[5%] text-gray-500 text-lg ">
          Lorem ipsum dolor amet consectetur nostrud eiusmod tempor incididunt
          et dolore enim minim veniam nostrud exercitation laboris nisi ut
          aliquip ex ea commodo incididunt.
        </p>
        <a className="text-white pl-[10%] border-b-2  border-white-600 uppercase"  href="http://">
          Start New Project
        </a>
      </div>
    </div>
  );
}

export default Work