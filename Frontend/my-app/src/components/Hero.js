import React from 'react'
export default function Hero() {
  return (
    <>
     {/* bg-primary  */}
      {/* container */}
      <div className='pad:h-screen w-screen bg-primary  m-0 p-0 overflow-hidden box-border '>
        <div className="    desktop:max-w-1200  sm:max-w-screen-md sm:mx-auto  desktop:mx-auto  flex flex-row items-center justify-center pad:max-w-1000 pad:mx-auto     pad:h-full w-full">
          {/* inner container */}
          <div className=" sm:w-[85%]   pad:w-[90%] pad:h-full">
            <div className="flex flex-col  pad:h-full pad:flex-row items-center justify-center w-full pad:pt-24 pad:pb-0  pt-56 pb-16 space-y-16 sm:pl-0 sm:pr-0 pl-4 pr-4">
              {/* Left */}
              <div className="desktop:w-[40%] pad:w-[40%]  pad:pt-10   pad:h-screen flex  flex-col  items-center   pad:flex-col   pad:items-start space-y-8   justify-center   ">
              
                <h1 className='/ font-bold text-4xl pad:text-start text-center '>We're  Building <span className='text-[#4ac4f3]'>Software</span> For You</h1>
                <p className='text-sm leading-6  pad:leading-7 pad:text-start text-center font-light  '>We are dedicated to building software that combines exceptional performance with delightful user experiences.Our goal is to simplify tasks and maximize productivity through intuitive design and seamless functionality.</p>
                                                                                                        
                
                <button className='uppercase  border-2 border-[#4ac4f3] h-14 font-bold  hover:text-[#fff]  text-[#4ac4f3] hover:bg-[#4ac4f3]  rounded-3xl w-52'>Get started</button>                
              </div>
              {/* right */}
              <div className="desktop:w-[60%] pad:w-[60%] font-light  flex flex-row  items-center justify-center pad:h-screen ">
                <img className="desktop:h-[32rem]  pad:h-[26rem] w-[80rem]" src="/images/Hero1.png" alt="Hero.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
