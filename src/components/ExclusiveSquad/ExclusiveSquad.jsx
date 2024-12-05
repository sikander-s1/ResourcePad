import React from 'react'
import Image from 'next/image'
// Images
import ExclusiveImage from "media/exclusiveimage.png"
import Exclusive1 from "media/exclusive1.png"
import Exclusive2 from "media/exclusive2.png"
import Exclusive3 from "media/exclusive3.png"

const ExclusiveSquad = () => {
    return (
        <section className='pt-[30px] xl:pt-[60px] 2xl:pt-[180px] 2xl:pb-[180px] lg:pb-[120px] pb-[30px]'>
            <div className="container">
                <div className="grid grid-cols-12 sm:gap-x-10 xl:gap-x-0 items-center">
                    <div className="lg:block hidden lg:col-span-5">
                        <div className="txt">
                            <h3 className='text-[#6B46FF] text-[135px] xl:text-[157px] leading-[160px] xl:leading-[170px] font-bold ml-[30px] text-center lg:text-start'>Hello,</h3>
                            <Image src={ExclusiveImage} alt='Exclusive Image' className='w-6/12 lg:w-full xl:w-auto mr-auto xl:ml-0 block' />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                        <h2 className='text-[25px] md:text-[45px] xl:text-[55px] leading-[35px] md:leading-[55px] xl:leading-[60px] xl:w-11/12 xxl:w-10/12 text-[#202020] font-bold mb-1 md:mb-3 xl:mb-7'>Your Exclusive Squad of
                            Software Specialists</h2>
                        <p className='text-[#646474] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[26px] lg:leading-[28px] mb-5 xl:mb-8 xxl:mb-14 xl:pr-8'>ResourcePad developers are expert problem-solvers, delivering high-quality, tailored solutions that integrate seamlessly with your team, ensuring fast, efficient, and on-time project delivery.</p>
                        <ul>
                            <li className='flex items-start sm:items-center gap-x-3 lg:gap-x-7 mb-5 sm:mb-3 md:mb-8'>
                                <div className='w-[20%] sm:w-auto lg:w-[11%]'>
                                    <Image src={Exclusive1} alt='Exclusive' width={89} height={89} className='h-full w-full' />
                                </div>
                                <div className='lg:w-[89%]'>
                                    <h5 className='text-[#202020] text-[20px] leading-[25px] sm:leading-[30px] font-semibold mb-1'>Expertise Across Technologies</h5>
                                    <p className='text-[#646474] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[26px] lg:leading-[28px] xl:pr-8'>Our developers are proficient in a wide range of programming languages and frameworks, ensuring tailored solutions for your specific needs.</p>
                                </div>
                            </li>
                            <li className='flex items-start sm:items-center gap-x-3 lg:gap-x-7 mb-5 sm:mb-3 md:mb-8'>
                                <div className='w-[20%] sm:w-auto lg:w-[11%]'>
                                    <Image src={Exclusive2} alt='Exclusive' width={89} height={89} className='h-full w-full' />
                                </div>
                                <div className='lg:w-[89%]'>
                                    <h5 className='text-[#202020] text-[20px] leading-[25px] sm:leading-[30px] font-semibold mb-1'>Seamless Integration</h5>
                                    <p className='text-[#646474] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[26px] lg:leading-[28px] xl:pr-8'>They work as an extension of your team, quickly adapting to your workflows and project requirements for maximum efficiency.</p>
                                </div>
                            </li>
                            <li className='flex items-start sm:items-center gap-x-3 lg:gap-x-7 mb-5 sm:mb-3 md:mb-8'>
                                <div className='w-[20%] sm:w-auto lg:w-[11%]'>
                                    <Image src={Exclusive3} alt='Exclusive' width={89} height={89} className='h-full w-full' />
                                </div>
                                <div className='lg:w-[89%]'>
                                    <h5 className='text-[#202020] text-[20px] leading-[25px] sm:leading-[30px] font-semibold mb-1'>Quality & Reliability</h5>
                                    <p className='text-[#646474] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[26px] lg:leading-[28px] xl:pr-8'>We focus on delivering high-quality code, meeting deadlines, and ensuring the success of your project from start to finish.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExclusiveSquad
