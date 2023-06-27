import React from 'react'
import Sectionsteps from './Sectionsteps'
import { RxDotFilled } from 'react-icons/rx';

export default function Steps() {
    const myArray = [
        {
            id: 1,
            number: 1,
            image: "/images/section_image1.png",
            heading: "Project Introduction",
            paragraph: "We’re a team who truly care for our work and for each other. Follow the Guidelines for Preparing Intro for Project Work"
        },
        {
            id: 2,
            number: 2,
            image: "/images/section_image2.png",
            heading: "Research & Concept",
            paragraph: "Analysis and refined thinking techniques to finds answers/truth by asking questions which have never been asked before."

        },
        {
            id: 3,
            number: 3,
            image: "/images/section_image3.png",
            heading: "Project Termination",
            paragraph: "Acceptance testing has been carried out, and the project deliverables have been handed over to the client."
        }
    ];
    return (
        <>
            <div className='w-screen overflow-x-hidden m-0 p-0 box-border bg-rgb-37-150-190'>
                <div className='desktop:max-w-1200  sm:max-w-screen-md sm:mx-auto    desktop:mx-auto  flex flex-row items-center justify-center pad:max-w-1000 pad:mx-auto  w-full'>
                    <div className=' w-full'>
                        <div className='flex flex-col items-center justify-center pt-[8rem] pb-[4rem]  space-y-20 w-full pl-4 -r-4'>
                            <div className='flex flex-col items-center justify-center space-y-2'>
                                <div className='flex flex-row items-center justify-center space-x-2'>
                                    <RxDotFilled className='text-[#a5b8d3]' size={22} />
                                    <div className="uppercase  font-bold text-[#a5b8d3]">
                                        How to get started
                                    </div>
                                    <RxDotFilled className='text-[#a5b8d3]' size={22} />
                                </div>
                                <h1 className='font-dm-serif-display text-6xl w-full sm:w-[36rem] text-center  space-x-6 font-[550]'>Few Simple Steps for Successful Business</h1>
                            </div>
                            <div className='sm:flex sm:flex-row sm:items-center sm:justify-center flex flex-col items-center justify-center sm:space-y-0 space-y-16'>
                                <div className='sm:w-[30%] w-[70%] p-10 hover:shadow-2xl'><Sectionsteps number={myArray[0].number} image={myArray[0].image} heading={myArray[0].heading} paragraph={myArray[0].paragraph} /></div>
                                <div className='sm:w-[30%] w-[70%] p-10 hover:shadow-2xl'><Sectionsteps number={myArray[1].number} image={myArray[1].image} heading={myArray[1].heading} paragraph={myArray[1].paragraph} /></div>
                                <div className='sm:w-[30%] w-[70%] p-10 hover:shadow-2xl'><Sectionsteps number={myArray[2].number} image={myArray[2].image} heading={myArray[2].heading} paragraph={myArray[2].paragraph} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
