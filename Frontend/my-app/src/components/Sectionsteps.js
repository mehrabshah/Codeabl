import React from 'react'

export default function Sectionsteps(props) {
    return (
        <>
            <div className='flex flex-col items-center justify-center space-y-5  rounded-sm'>
                <div className='bg-[#077ce3] h-[4.4rem] w-[4.4rem] rounded-[2.2rem]  shadow-3xl backdrop-blur-lg text-[#fff] font-bold text-2xl flex flex-row items-center justify-center'>0{props.number}</div>
                <div>
                    <img  className='h-[22rem] w-[20rem]' src={props.image} alt="section.image"></img>
                </div>
                <div className='flex flex-col items-center justify-center space-y-3 '>
                   <h1 className='text-2xl font-[550] text-center font-dm-serif-display'>{props.heading}</h1>
                   <p className='text-center text-1xl font-light'>{props.paragraph}</p>
                </div>
            </div>
        </>
     )
}
