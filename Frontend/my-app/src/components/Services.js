import React from 'react'
import Cart from './Cart'

export default function Services() {
    const Info = [
        {
            id: 1,
            heading: "Web and  App Development",
            paragraph: "Create stunning websites and mobile applications that captivate users and elevate your brand's online presence.",
            color: "#000000"
        },
        {
            id: 2,
            heading: "UI/UX Design",
            paragraph: "Designing intuitive interfaces and delightful user experiences that captivate and engage your audience",
            color: "#6682b2"
        },
        {
            id: 3,
            heading: "Wordpress Development",
            paragraph: "Customizing and optimizing WordPress websites to empower your online presence and achieve your goals",
            color: "#f79000"
        },
        {
            id: 4,
            heading: "Cloud Computing",
            paragraph: "Harness the power of cloud computing to scale your business, increase efficiency, and enhance collaboration across your organization. ",
            color: "#00cc83"
        },
        {
            id: 5,
            heading: "Shopify Development",
            paragraph: "Leveraging Shopify's robust platform to create secure and scalable e-commerce websites tailored to your business.",
            color: "#186adf"
        },
        {
            id: 6,
            heading: "Digital Marketing",
            paragraph: "Implementing strategic digital marketing campaigns to increase brand visibility and drive targeted traffic.",
            color: "#001345",
        }

    ];
    return (
        <>
            <div className='pad:h-screen w-screen bg-primary  m-0 p-0 overflow-hidden box-border '>
                <div className=" h-full   desktop:max-w-1200  sm:max-w-screen-md sm:mx-auto  desktop:mx-auto  flex flex-row items-center justify-center pad:max-w-1000 pad:mx-auto     pad:h-full w-full">
                    {/* inner container */}
                    <div className=" sm:w-[85%]   pad:w-[90%] pad:h-full h-full">
                        <div className="flex flex-col  pad:h-full  items-center justify-center w-full  h-full pad:pt-0 pt-32 pad:pb-0 pb-32   space-y-16 sm:pl-0 sm:pr-0 pl-4 pr-4">
                            <div className='flex flex-col items-center justify-center space-y-3 font-light'>
                                <h1 className='text-center / text-6xl font-extrabold'>Services We Offer</h1>
                                <p className='text-center'>Transforming your business processes for the digital future</p>
                            </div>
                            <div className='/ grid pad:grid-cols-3 sm:grid-cols-2 grid-cols-1  items-center justify-center gap-x-5 gap-y-5 '>

                                <div className='bg-[#000000] rounded-[0.5rem] '>
                                    <Cart id={Info[0].id} heading={Info[0].heading} paragraph={Info[0].paragraph} color={Info[0].color} />
                                </div>
                                <div className='bg-[#6682b2] rounded-[0.5rem]'>
                                    <Cart id={Info[1].id} heading={Info[1].heading} paragraph={Info[1].paragraph} color={Info[1].color} />
                                </div>
                                <div className='bg-[#f79000] rounded-[0.5rem]'>
                                    <Cart id={Info[2].id} heading={Info[2].heading} paragraph={Info[2].paragraph} color={Info[2].color} />
                                </div>
                                <div className='bg-[#00cc83] rounded-[0.5rem]'>
                                    <Cart id={Info[3].id} heading={Info[3].heading} paragraph={Info[3].paragraph} color={Info[3].color} />
                                </div>
                                <div className='bg-[#186adf] rounded-[0.5rem]'>
                                    <Cart id={Info[4].id} heading={Info[4].heading} paragraph={Info[4].paragraph} color={Info[4].color} />
                                </div>
                                <div className='bg-[#001345] rounded-[0.5rem]'>
                                    <Cart id={Info[5].id} heading={Info[5].heading} paragraph={Info[5].paragraph} color={Info[5].color} />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
