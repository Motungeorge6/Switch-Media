import React from 'react'
import Logo from '../assets/Switch logo.png'
import {FaInstagram,FaTwitter} from 'react-icons/fa'

const Header = () => {
  return (
        <div className='fixed w-full text-white justify-between flex p-4 items-center'>
          <div className='text-2xl font-bold'>
           <img src={Logo} alt="/" style={{width:"15%"}} />
        </div>
        <nav >
            <ul className='md:flex gap-8 pl-6 '>
                <li>Services</li>
                <li>About Us</li>
                <li>Our works</li>
                <li>Contact Us</li>
                <ul className='flex gap-8 mt-1'>
                <li><FaInstagram/></li>
                <li><FaTwitter/></li>
                </ul>
            </ul>
        </nav>
        </div>
  )
}

export default Header