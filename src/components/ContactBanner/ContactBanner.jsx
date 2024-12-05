import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
// Images
import Map from "media/map-2.png"
import Particle from "media/bg-particle.png"

const textVariants = {
    initial: {
        y: -100,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 2,
            repeat: Infinity,
        },
    },
};

const ContactBanner = () => {
    return (
        <section className='pt-[80px] xl:pt-[120px] relative z-0'>
            <div className="bg_particle absolute top-0 right-0 z-[-1]">
                <Image src={Particle} alt='particle' className='w-full max-h-[280px] ml-auto'/>
            </div>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <motion.div className="txt" variants={textVariants} initial="initial" whileInView="animate">
                            <motion.h1 variants={textVariants} className='text-[#202020] text-[30px] sm:text-[40px] md:text-[55px] lg:text-[65px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px] leading-[40px] font-bold text-center mb-4'>Get in <span className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:z-[-1] before:h-[4px] before:bg-gradient-to-r from-[#A34CD5]  via-[#2C5DEE] to-[#0BEFBA]">Touch</span> with Us!</motion.h1>
                            <motion.p variants={textVariants} className='text-center text-[#646474] text-[16px] md:text-[22px] leading-[23px] md:leading-[29px] font-normal lg:w-10/12 xl:w-9/12 xxl:px-8 mx-auto mb-3 lg:mb-0'>Have a question or ready to start your project? Our team is here to help! Reach out today, and let's discuss how we can bring your ideas to life.</motion.p>
                        </motion.div>
                    </div>
                    <div className="col-span-12">
                        <div className="relative">
                            <div className="location1 group absolute top-[18%] left-[-1%]">
                                <div className="dot flex items-center justify-center">
                                    <Link href="#href" className="relative after:content-[''] after:absolute after:top-0 after:left-[-15px] after:w-[25px] after:h-[25px] after:rounded-full after:bg-[#6B46FF] after:border after:border-white mapDots">
                                    </Link>
                                </div>
                                <div className="location bg-[#202020] py-4 lg:py-7 px-4 lg:px-6 rounded-[15px] opacity-0 group-hover:opacity-100 group-hover:duration-700 group-hover:scale-100 scale-75 duration-700 ease-in-out mt-[30px] md:w-7/12 mx-auto relative z-10">
                                    <h6 className='text-white text-[20px] leading-[24px] font-semibold text-center mb-3'>
                                        Victoria, Canada
                                    </h6>
                                    <p className='text-[14px] leading-[17px] font-extralight text-white opacity-80 text-center tracking-wider'>Unit 5-15 brownridge office
                                        #204 Georgetown Ontario</p>
                                </div>
                            </div>
                            <div className="lg:block hidden location2 group absolute top-[15%] lg:top-[32%] right-[-125px] lg:right-[-80px]">
                                <div className="dot flex items-center justify-center">
                                    <Link href="#href" className="relative after:content-[''] after:absolute after:top-0 after:left-[-15px] after:w-[25px] after:h-[25px] after:rounded-full after:bg-[#6B46FF] after:border after:border-white mapDots">
                                    </Link>
                                </div>
                                <div className="location bg-[#202020] py-4 lg:py-7 px-4 lg:px-6 rounded-[15px] opacity-0 group-hover:opacity-100 group-hover:duration-700 group-hover:scale-100 scale-75 duration-700 ease-in-out mt-[30px] md:w-7/12 mx-auto relative z-10">
                                    <h6 className='text-white text-[20px] leading-[24px] font-semibold text-center mb-3'>
                                        Victoria, Canada
                                    </h6>
                                    <p className='text-[14px] leading-[17px] font-extralight text-white opacity-80 text-center tracking-wider'>Unit 5-15 brownridge office
                                        #204 Georgetown Ontario</p>
                                </div>
                            </div>
                            <div className="md:block hidden location3 group absolute top-[23%] left-[58%] translate-x-[-50%]">
                                <div className="dot flex items-center justify-center">
                                    <Link href="#href" className="relative after:content-[''] after:absolute after:top-0 after:left-[-15px] after:w-[25px] after:h-[25px] after:rounded-full after:bg-[#6B46FF] after:border after:border-white mapDots">
                                    </Link>
                                </div>
                                <div className="location bg-[#202020] py-4 lg:py-7 px-4 lg:px-6 rounded-[15px] opacity-0 group-hover:opacity-100 group-hover:duration-700 group-hover:scale-100 scale-75 duration-700 ease-in-out mt-[30px] md:w-7/12 mx-auto relative z-10">
                                    <h6 className='text-white text-[20px] leading-[24px] font-semibold text-center mb-3'>
                                        Victoria, Canada
                                    </h6>
                                    <p className='text-[14px] leading-[17px] font-extralight text-white opacity-80 text-center tracking-wider'>Unit 5-15 brownridge office
                                        #204 Georgetown Ontario</p>
                                </div>
                            </div>
                            <div className="location4 group absolute top-[18%] md:top-[45%] lg:top-[55%] right-[-16px] lg:right-[4px]">
                                <div className="dot flex items-center justify-center">
                                    <Link href="#href" className="relative after:content-[''] after:absolute after:top-0 after:left-[-15px] after:w-[25px] after:h-[25px] after:rounded-full after:bg-[#6B46FF] after:border after:border-white mapDots">
                                    </Link>
                                </div>
                                <div className="location bg-[#202020] py-4 lg:py-7 px-4 lg:px-6 rounded-[15px] opacity-0 group-hover:opacity-100 group-hover:duration-700 group-hover:scale-100 scale-75 duration-700 ease-in-out mt-[30px] md:w-7/12 mx-auto relative z-10">
                                    <h6 className='text-white text-[20px] leading-[24px] font-semibold text-center mb-3'>
                                        Victoria, Canada
                                    </h6>
                                    <p className='text-[14px] leading-[17px] font-extralight text-white opacity-80 text-center tracking-wider'>Unit 5-15 brownridge office
                                        #204 Georgetown Ontario</p>
                                </div>
                            </div>
                            <div className="location5 group absolute top-[70%] lg:top-[44%] left-[7%] lg:left-[8%]">
                                <div className="dot flex items-center justify-center">
                                    <Link href="#href" className="relative after:content-[''] after:absolute after:top-0 after:left-[-15px] after:w-[25px] after:h-[25px] after:rounded-full after:bg-[#6B46FF] after:border after:border-white mapDots">
                                    </Link>
                                </div>
                                <div className="location bg-[#202020] py-4 lg:py-7 px-4 lg:px-6 rounded-[15px] opacity-0 group-hover:opacity-100 group-hover:duration-700 group-hover:scale-100 scale-75 duration-700 ease-in-out mt-[30px] md:w-7/12 mx-auto relative z-10">
                                    <h6 className='text-white text-[20px] leading-[24px] font-semibold text-center mb-3'>
                                        Victoria, Canada
                                    </h6>
                                    <p className='text-[14px] leading-[17px] font-extralight text-white opacity-80 text-center tracking-wider'>Unit 5-15 brownridge office
                                        #204 Georgetown Ontario</p>
                                </div>
                            </div>
                            <Image src={Map} alt='Map Image' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactBanner
