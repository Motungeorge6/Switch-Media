import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "../styles/about.css";
import Home from '../assets/home-digital-agency-img-10.jpg'
import Home2 from '../assets/home-digital-agency-img-01.jpg'
import Home3 from '../assets/home-digital-agency-img-11.jpg'
import Home4 from '../assets/home-digital-agency-img-12.jpg'

const About = () => {
  return (
    // Parent container
    <div className="w-full h-screen bg-white">
      {/* text container */}
      <div className="font-bold items-center flex ">
        <h1 className="text-4xl pl-[30%] pt-[10%] ">
          We are creative digital <br /> agency working for <br /> huge brands
        </h1>
        {/* text second container */}
        <div className="pt-[15%] pl-[10%]">
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing <br />
            elit do eiusmod tempor incididunt
            <br /> ut labore et dolore magna ut enim <br />
            ad minim veniam nostrud exercitation.
          </p>
          <button className="pt-5 pr-2 border-b-4 border-black font-thin uppercase">
            Explore Services
          </button>
        </div>
      </div>
      <div className="w-full h-[45%] grid grid-cols-2 sm:grid-cols-4  text-center py-8 border-10 mt-[10%]">
        <div className="container">
          <h1 className="text-[#d33115] pt-[20%] uppercase font-bold">
            Branding
          </h1>
          <p className="text-2xl font-semibold">
            Leading branding agency <br /> based in washington
          </p>
          <div className="pl-[30%] pt-[5%]">
            <BsArrowRight />
          </div>
          {/* Overlay container */}
          <div class="overlay">
            <div className="inner-overlay">
              {/* Text container */}
              <div>
                <h1 className="uppercase font-bold">Branding</h1>
                <p className="text-2xl font-semibold">
                  Leading branding agency <br /> based in washington
                </p>
              </div>
              <img src={Home} alt="Avatar" class="image" />
            </div>
          </div>
        </div>
        {/* Design container */}
        <div className="container">
          <h1 className="text-[#d33115] pt-[20%] uppercase font-bold">
            Designing
          </h1>
          <p className="text-2xl font-semibold text-[#bfb9b8]">
            Creative design agency <br /> working for huge brands
          </p>
          <div className="pl-[30%] pt-[5%]">
            <BsArrowRight />
          </div>
          {/* Overlay container */}
          <div class="overlay">
            <div className="inner-overlay">
              {/* Text container */}
              <div>
                <h1 className="font-bold uppercase">Designing</h1>
                <p className="text-2xl font-semibold">
                  Creative design agency <br /> working for huge brands
                </p>
              </div>
              <img src={Home2} alt="Avatar" class="image" />
            </div>
          </div>
        </div>
        {/* development */}
        <div className="container">
          <h1 className="text-[#d33115] pt-[20%] uppercase font-bold">
            Development
          </h1>
          <p className="text-2xl font-semibold">
            Development is the process <br /> of build websites
          </p>
          <div className="pl-[30%] pt-[5%]">
            <BsArrowRight />
          </div>
          {/* Overlay container */}
          <div class="overlay">
            <div className="inner-overlay">
              {/* Text container */}
              <div>
                <h1 className="font-bold uppercase">Development</h1>
                <p className="text-2xl font-semibold">
                  Development is the process <br /> of build websites
                </p>
              </div>
              <img src={Home3} alt="Avatar" class="image" />
            </div>
          </div>
        </div>
        {/* marketing */}
        <div className="container">
          <h1 className="text-[#d33115] pt-[20%] uppercase font-bold">
            Marketing
          </h1>
          <p className="text-2xl font-semibold">
            Reach your ideal customers <br /> on the largest network
          </p>
          <div className="pl-[30%] pt-[5%]">
            <BsArrowRight />
          </div>
          {/* Overlay container */}
          <div class="overlay">
            <div className="inner-overlay">
              {/* Text container */}
              <div>
                <h1 className="font-bold uppercase">Marketing</h1>
                <p className="text-2xl font-semibold">
                  Reach your ideal customers <br /> on the largest network
                </p>
              </div>
              <img src={Home} alt="Avatar" class="image" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className=" w-full h-screen justify-center items-center pt-[10%] ">
          <h1 className="uppercase font-bold pl-[25%] text-2xl">Our mission</h1>
          <p className="pl-[25%] mt-[10px]">
            Lorem ipsum consectetur <br /> adipiscing elit do eiusmod <br />{" "}
            tempor incididunt.
          </p>
        </div>
        <div className=" w-full h-screen justify-center items-center pt-[10%] ">
          <h1 className="uppercase font-bold  text-2xl">Our Vision</h1>
          <p className=" mt-[10px]">
            Lorem ipsum consectetur <br /> adipiscing elit do eiusmod <br />{" "}
            tempor incididunt.
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
