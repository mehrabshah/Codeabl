import { FaAddressCard } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { RiMailOpenFill } from 'react-icons/ri';
import { SocialIcon } from 'react-social-icons';
import React, { useState } from 'react';
export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [projectDescription, setProjectDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission or data handling logic here
    };
    return (
        <>
            <div className=' w-screen bg-[#fff]  m-0 p-0 overflow-hidden box-border'>
                <div className="xl:max-w-screen-2xl  sm:max-w-screen-md sm:mx-auto  xl:mx-auto  flex flex-row items-center justify-center pad:max-w-1000 pad:mx-auto mb-[6rem]   w-full">
                    {/* inner container */}
                    <div className=" sm:w-[85%]  w-full pad:w-[80%]  flex flex-col   pt-[6rem] ">
                        <div className='flex flex-col / items-center justify-center space-y-4'>
                            <h1 className='text-5xl font-bold  text-center'>CONTACT US</h1>
                            <p className='text-center pad:w-[50%] w-[80%]  font-light'>Reach out to our team for personalized assistance and discover how our agency can make a difference for your business. We look forward to hearing from you!</p>
                        </div>
                        <div className="flex flex-col space-x-6   pad:flex-row items-center    justify-center w-full  pad:pb-0    space-y-16 sm:pl-0 sm:pr-0 pl-4 pr-4">
                            <div className="w-[18%] space-y-12 desktop:block hidden  t-12">
                                <div className='space-y-4'>
                                    <h1 className='text-xl font-bold'>OUR OFFICE ADDRESS</h1>
                                    <div className='flex flex-row space-x-4'>
                                        <FaAddressCard size={30} className="fill-[#4ac4f3]" />
                                        <address className='font-light'>22 Baker Street,London,United Kindom,WIU 3BW</address>
                                    </div>
                                    <div className='flex flex-row space-x-4'>
                                        <FaPhone size={20} className="fill-[#4ac4f3]"></FaPhone>
                                        <div className='font-light'>+92 3054456433</div>
                                    </div>
                                    <div className='flex flex-row space-x-4'>
                                        <RiMailOpenFill size={20} className="fill-[#4ac4f3]" ></RiMailOpenFill>
                                        <div className='font-light'>www.Codeabl.net</div>
                                    </div>
                                </div>
                                <div className='space-y-4'>
                                    <h1 className='text-xl font-bold'>SOCIAL ADDRESS</h1>
                                    <div className='flex flex-row space-x-2'>
                                        <SocialIcon url="https://facebook.com" network="facebook" style={{ height: 40, width: 40 }} />
                                        <SocialIcon url="https://instagram.com" network="instagram" style={{ height: 40, width: 40 }} />
                                        <SocialIcon url="https://linkedin.com" network="linkedin" style={{ height: 40, width: 40 }} />
                                        <SocialIcon url="https://twitter.com" network="twitter" style={{ height: 40, width: 40 }} />
                                    </div>
                                </div>
                            </div>
                            <div className="desktop:w-[45%] w-full">
                                <div className="max-w-md mx-auto">
                                    <h1 className=" font-semibold mb-9 text-3xl">Let's Talk About Your Idea</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <input
                                                type="text"
                                                id="name"
                                                className="w-full px-3 py-2 border border-gray-300 rounded  outline-none"
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                required
                                                placeholder='Name'
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <input
                                                type="email"
                                                id="email"
                                                className="w-full px-3 py-2 border border-gray-300 rounded  outline-none"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                                placeholder='email'
                                            />
                                        </div>
                                        <div className="mb-4">
                                           
                                            <input
                                                type="tel"
                                                id="phone"
                                                className="w-full px-3 py-2 border border-gray-300 rounded  outline-none"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                                placeholder='Phone'
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <textarea
                                                id="projectDescription"
                                                className="w-full h-64  px-3 py-2 border border-gray-300 rounded  outline-none"
                                                value={projectDescription}
                                                onChange={(e) => setProjectDescription(e.target.value)}
                                                rows={4}
                                                required
                                                placeholder='Tell Us About Project'
                                            ></textarea>
                                        </div>
                                        <button
                                            type="submit"
                                            className=" text-[#fff]   bg-[#4ac4f3] hover:bg-cyan-500    w-[14rem]  flex flex-row items-center justify-center rounded-2xl h-[2.5rem] font-semibold"
                                        >
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
