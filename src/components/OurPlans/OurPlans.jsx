import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// Images
import CheckIcon from "media/icons/check-icon.png"

const OurPlans = () => {
    return (
        <section className='pb-[120px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='mx-auto mb-1 md:mb-3 font-bold text-[#202020] text-[25px] text-center md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px]'>Compare our Plans</h2>
                        <p className='mb-5 lg:mb-10 text-[#646474] text-[14px] text-center md:text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px]'>Everything you need to scale your business, bundled together and discounted.</p>
                    </div>
                </div>
                <div className="border-[#E2E2E2] pt-5 border rounded-[20px]">
                    <div className="items-center grid grid-cols-12">
                        {/* First Row */}
                        <div className="col-span-6">
                            <div className="top_heading mb-4 px-7">
                                <h3 className='font-bold text-[#202020] text-[30px] leading-[35px]'>
                                    Streamline Your HR <br className='lg:block hidden' />
                                    with the Right Plan
                                </h3>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex flex-col justify-center items-center mb-6">
                                <div className='mb-5'>
                                    <p className="inline-block font-bold text-[#202020] text-[30px] leading-[35px]"><sup>$</sup>1,299</p>
                                    <span className="font-normal text-[#646474] text-[20px] leading-[25px]">/Month</span>
                                </div>
                                <Link href="#href" className='bg-[#6B46FF] px-8 py-3 rounded-full font-medium text-[20px] text-white leading-[25px]'>
                                    Professional
                                </Link>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex flex-col justify-center items-center mb-6">
                                <div className='mb-5'>
                                    <p className="inline-block font-bold text-[#202020] text-[30px] leading-[35px]"><sup>$</sup>1,299</p>
                                    <span className="font-normal text-[#646474] text-[20px] leading-[25px]">/Month</span>
                                </div>
                                <Link href="#href" className='border-[#D8D8D8] bg-white px-8 py-3 border rounded-full font-medium text-[#787979] text-[20px] leading-[25px]'>
                                    Enterprise
                                </Link>
                            </div>
                        </div>
                        {/* Second Row */}
                        <div className="col-span-6">
                            <div className="flex items-center bg-[#F9F8FF] px-9 h-[65px]">
                                <p className='font-medium text-[#646474] text-[20px] leading-[25px]'>Custom properties</p>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex justify-center items-center bg-[#F9F8FF] px-9 h-[65px]">
                                <Image src={CheckIcon} alt='CheckIcon' className='block mx-auto' />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex items-center bg-[#F9F8FF] px-9 h-[65px]">
                                <Image src={CheckIcon} alt='CheckIcon' className='block mx-auto' />
                            </div>
                        </div>
                        {/* Third Row */}
                        <div className="col-span-6">
                            <div className="flex items-center px-9 h-[65px]">
                                <p className='font-medium text-[#646474] text-[20px] leading-[25px]'>
                                    HRM Exports
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex justify-center items-center px-9 h-[65px]">
                                <Image src={CheckIcon} alt='CheckIcon' className='block mx-auto' />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex justify-center items-center px-9 h-[65px]">
                                <Image src={CheckIcon} alt='CheckIcon' className='block mx-auto' />
                            </div>
                        </div>
                        {/* Fourth Row */}
                        <div className="col-span-6">
                            <div className="flex items-center bg-[#F9F8FF] px-9 h-[65px]">
                                <p className='font-medium text-[#646474] text-[20px] leading-[25px]'>
                                    Conversational bots
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex justify-center items-center bg-[#F9F8FF] px-9 h-[65px]">
                                <p className='font-medium text-[#646474] text-[20px] text-center leading-[25px]'>
                                    Additional features
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex justify-center items-center bg-[#F9F8FF] px-9 h-[65px]">
                                <p className='font-medium text-[#646474] text-[20px] text-center leading-[25px]'>
                                    Additional features
                                </p>
                            </div>
                        </div>
                        {/* Fifth Row */}
                        <div className="col-span-6">
                            <div className="flex items-center px-9 h-[65px]">
                                <p className='font-medium text-[#646474] text-[20px] leading-[25px]'>
                                    Custom user permissions
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex items-center px-9 h-[65px]">
                                <Image src={CheckIcon} alt='CheckIcon' className='block mx-auto' />
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex items-center px-9 h-[65px]">
                                <Image src={CheckIcon} alt='CheckIcon' className='block mx-auto' />
                            </div>
                        </div>
                        {/* Sixth Row */}
                        <div className="col-span-6">
                            <div className="flex items-center bg-[#F9F8FF] px-9 h-[65px]">
                                <p className='font-medium text-[#646474] text-[20px] leading-[25px]'>
                                    Shared inbox
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex justify-center items-center bg-[#F9F8FF] px-9 h-[65px]">
                                <p className='font-medium text-[#646474] text-[20px] text-center leading-[25px]'>
                                    Up to 100 inboxes
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex justify-center items-center bg-[#F9F8FF] px-9 h-[65px]">
                                <p className='font-medium text-[#646474] text-[20px] text-center leading-[25px]'>
                                    Up to 200 inboxes
                                </p>
                            </div>
                        </div>
                        {/* Seventh Row */}
                        <div className="col-span-6">
                            <div className="flex items-center px-9 h-[65px]">
                                <p className='font-medium text-[#646474] text-[20px] leading-[25px]'>
                                    Facebook Messenger integration
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex items-center px-9 h-[65px]">
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex items-center px-9 h-[65px]">
                                <Image src={CheckIcon} alt='CheckIcon' className='block mx-auto' />
                            </div>
                        </div>
                        {/* Eight Row */}
                        <div className="col-span-6">
                            <div className="flex items-center bg-[#F9F8FF] px-9 rounded-bl-[20px] h-[65px]">
                                <p className='font-medium text-[#646474] text-[20px] leading-[25px]'>
                                    Form automation
                                </p>
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex items-center bg-[#F9F8FF] px-9 h-[65px]">
                            </div>
                        </div>
                        <div className="col-span-3">
                            <div className="flex items-center bg-[#F9F8FF] px-9 rounded-br-[20px] h-[65px]">
                                <Image src={CheckIcon} alt='CheckIcon' className='block mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Input Select */}
                <div className="grid grid-cols-12">
                    <div className="col-span-3 px-5 py-6">
                        <select name="features" className='font-semibold text-[20px] leading-[30px] focus:outline-none w-9/12'>
                            <option value="features" className='mb-3 font-medium text-[20px] leading-[30px]'>
                                See More Features
                            </option>
                            <option value="features" className='mb-3 font-medium text-[20px] leading-[30px]'>
                                Features 1
                            </option>
                            <option value="features" className='mb-3 font-medium text-[20px] leading-[30px]'>
                                Features 2
                            </option>
                            <option value="features" className='mb-3 font-medium text-[20px] leading-[30px]'>
                                Features 3
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPlans
