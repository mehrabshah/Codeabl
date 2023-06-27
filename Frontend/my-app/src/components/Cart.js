import React from 'react'
export default function Cart(props) {
    console.log(props.color)
  return (
   
    <>
     <div className=" flex flex-col justify-center   h-[15rem]    items-start / space-y-3 pl-8 pr-8">  
           {/* heading */}
           <h1 className=" text-[#fff] text-3xl / font-extrabold ">{props.heading}</h1>  
           {/* paragraph */}
           <p className='text-[#fff]'>{props.paragraph}</p>
     </div>
    </>
  )
}
