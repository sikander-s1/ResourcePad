import React from 'react'
import Image from 'next/image'
// Images
import FeaturesBg from "media/features-bg.png"
import line from "media/bg-line.png"
import Number1 from "media/icons/number1.png"
import Number2 from "media/icons/number2.png"
import Number3 from "media/icons/number3.png"

const Features = () => {
    return (
        <section className='pt-[70px] pb-[50px] lg:pb-[130px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='mx-auto mb-1 md:mb-3 font-bold text-[#202020] text-[25px] text-center md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px]'>Our three distinctive features</h2>
                        <p className='mb-5 lg:mb-10 text-[#646474] text-[14px] text-center md:text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px]'>When she reached the first hills of the Italic Mountains had a last view back on the skyline.</p>
                    </div>
                </div>
                <div className="relative z-0 py-12 rounded-[20px] px-[60px] xl:px-[120px] h-[552px] mt-[80px]">
                    <Image src={FeaturesBg} fill className='object-cover object-center !top-[-50%] translate-y-[37%] z-[-1] rounded-[20px]' alt='Features Bg' />
                    <div className="grid grid-cols-12 relative">
                        <Image src={line} alt='Line' className='absolute left-0 right-0 mx-auto top-0 z-[-1] w-full' />
                        <div className="col-span-4">
                            <div className="relative h-full px-4 lg:px-6 pt-[60px] text-center">
                                <Image src={Number1} alt='Number' className='absolute top-[-15px] left-0 right-0 mx-auto' />
                                <h3 className='text-white text-[25px] leading-[30px] font-bold mb-4'>
                                    Tailored Solutions
                                </h3>
                                <p className='text-[18px] leading-[25px] text-white font-light opacity-80 lg:w-10/12 mx-auto'>We offer customized solutions tailored to your nonprofit’s unique needs, goals, and vision.</p>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="relative h-full px-4 lg:px-6 pt-[60px] text-center 2xl:mt-[30px]">
                                <Image src={Number2} alt='Number' className='absolute bottom-[-55px] left-0 right-0 mx-auto' />
                                <h3 className='text-white text-[25px] leading-[30px] font-bold mb-4'>
                                    Non-Profit Expertise
                                </h3>
                                <p className='text-[18px] leading-[25px] text-white font-light opacity-80 lg:w-10/12 mx-auto'>With deep nonprofit expertise, we create solutions that tackle unique challenges for greater impact and efficiency.</p>
                            </div>
                        </div>
                        <div className="col-span-4">
                            <div className="relative h-full px-4 lg:px-6 pt-[60px] text-center">
                                <Image src={Number3} alt='Number' className='absolute top-[-15px] left-0 right-0 mx-auto' />
                                <h3 className='text-white text-[25px] leading-[30px] font-bold mb-4'>
                                    Cost-Effective Approach
                                </h3>
                                <p className='text-[18px] leading-[25px] text-white font-light opacity-80 lg:w-11/12 mx-auto lg:px-2'>We provide affordable, value-driven packages that maximize your investment without sacrificing quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
