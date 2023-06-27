import React from 'react'
export default function Porfolio() {
    return (
        <>
            <div className='bg-primary h-screen w-screen'>
                <div className='flex flex-col w-full'>
                    <div className='flex flex-col w-full justify-center pt-[6rem] space-y-4'>
                        <h1 className='text-5xl font-bold text-center'>Porfolio</h1>
                        <h2 className='text-3xl font-light text-center'>Our Recent Work</h2>
                    </div>
                    <div className='pad:flex pad:flex-row flex flex-col w-full'>
                        <div className='w-[25%]'>
                            <div></div>
                           <div></div>
                        </div>
                        <div className='w-[50%]'>
                        </div>
                        <div className='w-[25%]'>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
