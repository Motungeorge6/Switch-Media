import React from 'react'
import { motion } from 'framer-motion'
import { useRef,useEffect,useState } from 'react'
import images   from './images'
import "../styles/project.css"

function Project ()  { 
    const [width,setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() =>{
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    })
  return (
    <div>
      <div className='flex'>
        <h4 className=" text-5xl font-bold p-[10%] text-black mb-0">
          Selected Work
        </h4>
        <a
          className="text-black pl-[25%] pt-[10%]  uppercase font-semibold text-sm"
          href="http://"
        >
          Explore Portfolio
        </a>
      </div>
      <motion.div
       ref={carousel} 
       className="carousel" 
       whileTap={{cursor:"grabbing"}}>
        <motion.div drag="x"
         dragConstraints={{right:0, left: -width}}
          className="inner-carousel"
          >
          {images.map((image) => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Project