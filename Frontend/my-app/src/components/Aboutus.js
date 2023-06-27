import React from 'react'
export default function Aboutus() {
  return (
    <>
      {/* container */}
      <div className='  w-screen bg-[#fff]  m-0 p-0 overflow-hidden box-border '>
        <div className="  xl:max-w-screen-2xl    sm:max-w-screen-md sm:mx-auto  xl:mx-auto  flex flex-row items-center justify-center pad:max-w-1000 pad:mx-auto     pad:h-full w-full">
          {/* inner container */}
          <div className=" sm:w-[85%]  w-full    pad:h-full">
            <div className="flex flex-col  sm:space-x-16     pad:h-full pad:flex-row items-center justify-center w-full  pad:pb-16 pb-16  sm:space-y-0  space-y-16 sm:pl-0 sm:pr-0 pl-4 pr-4">
              {/* image */}
              <div className='pad:w-[40%] '>
                <img src="/images/about.png" alt="aboutimage" className='h-auto w-[50rem]'></img>
              </div>
              {/* paragraph */}
              <div className="pad:w-[40%]  pt-0  sm:pt-8  flex flex-col  space-y-8   justify-center ">
                <h1 className='text-3xl font-bold'>Who We Are</h1>
                <div className=' space-y-4'>
                  <p className='font-light'>At Codeabl,we ensure understanding the Business as if it were our owm.We identify the challenges and create strategies thst turn
                    every problem into an opportunity.
                  </p> 
                  <p className='font-light'>
                    We have dealt with many medium to large complex database-driven website across multiple domains like
                    NFT landing pages,E-commerse websites, and management systems.
                  </p>
                </div>
                <button className='md:h-12 h-16  md:w-32 w-32 hover:bg-cyan-500 bg-[#4ac4f3] text-[#ffffff] uppercase  rounded-full'>CONTACT</button>  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
