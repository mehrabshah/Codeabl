import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImCross } from 'react-icons/im';
export default function Navbar() {
  const [dropDown, setDropDown] = useState(false)
  const navigationItems = [
    { text: "HOME", link: "/" },
    { text: "ABOUT", link: "/about" },
    { text: "SERVICES", link: "/services" },
    { text: "PORTFOLIO", link: "/portfolio" }
  ];
  const navigationList = navigationItems.map(item => (
    <li key={item.text} className="text-[#333333] font-extrabold font-xl">
      <a className="/ hover:text-[#4ac4f3]" href={item.link}>{item.text}</a>
    </li>
  ));

  return (
    <div className={` md:fixed md:h-[5.6rem]  ${dropDown?'h-screen':'h-16  '}  shadow-md    fixed  w-screen md:w-screen  / bg-[#fff]  md:pl-6 md:pr-6  z-50 pl-6 pr-6 pt-[1rem] md:pt-0 `}>
      <div className=' md:flex md:flex-row md:justify-between md:items-center md:h-full h-full  flex flex-col md:max-w-5xl md:mx-auto'>
        {/* logo */}
        <div className={`flex   ${dropDown?'justify-end':'justify-between'}`} >
          
          <div className={`text-[#333333] text-2xl  font-extrabold ${dropDown?'hidden md:block':'block'} `}>
            <img src="./images/Logo.png" alt="companyLogo" className=" w-44" ></img>
          </div>
          {/* hambuger Menu */}
         <div className='md:hidden  flex justify-end '>
         {!dropDown  ?(<GiHamburgerMenu className='text-black' size={30} onClick={()=>{setDropDown(!dropDown)}}></GiHamburgerMenu>)
            :(<ImCross className='text-black' size={30} onClick={()=>{setDropDown(!dropDown)}} ></ImCross>)}
          </div>
        </div>
        {/* Nav */}
        <nav className={`md:flex md:flex-row md:items-center md:justify-center md:space-x-4  md:text-sm  justify-center text-4xl items-center  flex flex-col h-[80%] md:h-full ${dropDown?'block':'hidden'}`}>
          <ul className="md:flex md:flex-row md:items-center md:justify-center md:space-x-8 pt-16 md:pt-0 space-y-8  md:space-y-0 flex flex-col items-center justify-center">
            {navigationList}    
            <button className='md:h-12 h-16  md:w-32 w-64 bg-[#4ac4f3] hover:bg-cyan-500   text-[#ffffff] uppercase  md:rounded-full'>CONTACT</button>
          </ul>
        </nav>

      </div>
    </div>
  )
}