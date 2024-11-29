"use client"
import React from 'react'
import Image from 'next/image'
import CTA from '../CTA/CTA'
import { motion } from "framer-motion";
// Images
import Card1 from "media/assets/images/card1.png"
import Card2 from "media/assets/images/card2.png"
import Card3 from "media/assets/images/card3.png"
import Card4 from "media/assets/images/card4.png"
import card3bg from "media/assets/images/card3bg.png"
import CTAbg from "media/assets/images/cta-bg.png"
import ArrowImage from "media/assets/images/gray-arrow.png"
import Link from 'next/link'

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

const topVariants = {
    initial: {
        y: -500,
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

const bottomVariants = {
    initial: {
        y: 300,
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

const LookingFor = () => {
    return (
        <>
            <section className='pt-[50px] md:pt-[30px] xl:pt-[60px] 3xl:pt-[130px] pb-[30px]'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <motion.div variants={textVariants}
                                initial="initial"
                                whileInView="animate" className="txt text-center mb-[25px] md:mb-[40px] lg:mb-[60px]">
                                <motion.h2 initial="initial"
                                    whileInView="animate" className='text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px] text-[#202020] font-bold mb-1 md:mb-3 md:w-9/12 mx-auto lg:w-full'>Everything your team is looking for</motion.h2>
                                <motion.p initial="initial"
                                    whileInView="animate" className='text-[#646474] text-[14px] md:text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px] mb-5'>When she reached the first hills of the Italic Mountains had a last view back on the skyline.</motion.p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4 md:gap-7">
                        <div className="col-span-12 sm:col-span-6">
                            <motion.div variants={topVariants} initial="initial"
                                animate="animate" className="card min-h-[380px] flex flex-col justify-between sm:min-h-full border border-[#E2E2E2] rounded-[20px] bg-white h-full relative before:content-[''] before:absolute before:rounded-[20px] before:top-0 before:left-0 before:h-full before:w-full before:bg-[#6b46ff1c] before:z-[1] sm:before:z-[-2]">
                                <div className="content px-5 lg:px-7 xl:px-12 py-7 lg:py-10">
                                    <h3 className='text-[18px] lg:text-[25px] xl:text-[30px] font-bold leading-normal mb-3'>Integrated with the tools you love</h3>
                                    <p className='text-[#646474] text-[15px] lg:text-[18px] xl:text-[20px] leading-[22px] md:leading-[25px] lg:leading-tight font-light xl:w-10/12'>When she reached the first hills of the Italic Mountains
                                        had a last view back on the skyline.</p>
                                </div>
                                <div className="image">
                                    <Image src={Card1} alt='Card 1' className='w-full rounded-b-[20px]' />
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <motion.div variants={bottomVariants} initial="initial"
                                animate="animate" className="card min-h-[380px] flex flex-col justify-between sm:min-h-full border border-[#E2E2E2] rounded-[20px] bg-white relative h-full before:content-[''] before:absolute before:rounded-[20px] before:top-0 before:left-0 before:h-full before:w-full before:bg-[#6b46ff1c] before:z-[1] sm:before:z-[-2]">
                                <div className="content px-5 lg:px-7 xl:px-12 py-10 relative z-10 h-full flex flex-col items-start justify-start sm:justify-end">
                                    <h3 className='text-[18px] lg:text-[25px] xl:text-[30px] font-bold leading-normal mb-3'>View work your way</h3>
                                    <p className='text-[#646474] text-[15px] lg:text-[18px] xl:text-[20px] leading-[22px] md:leading-[25px] lg:leading-tight font-light lg:w-10/12 xl:w-8/12'>Instantly switch between 15 views including
                                        list, board, gantt, and more.</p>
                                </div>
                                <div className="image">
                                    <Image src={Card2} alt='Card 1' fill={true} className='object-cover object-center w-full rounded-[20px] z-0' />
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <motion.div variants={topVariants} initial="initial"
                                animate="animate" className="card min-h-[380px] flex flex-col justify-between sm:min-h-full border border-[#E2E2E2] rounded-[20px] bg-white relative  before:content-[''] before:absolute before:rounded-[20px] before:top-0 before:left-0 before:h-full before:w-full before:bg-[#6b46ff1c] before:z-[1] sm:before:z-[-2]">
                                <Image src={card3bg} alt='Card 3' fill className='object-cover object-center z-0 opacity-20' />
                                <div className="content px-5 lg:px-7 xl:px-12 py-7 lg:py-10">
                                    <h3 className='text-[18px] lg:text-[25px] xl:text-[30px] font-bold leading-normal mb-3'>Stay ahead of what’s next</h3>
                                    <p className='text-[#646474] text-[15px] lg:text-[18px] xl:text-[20px] leading-[22px] md:leading-[25px] lg:leading-tight font-light xl:w-10/12'>Organize your work, reminders, and calendar events
                                        all from your personalized Home.</p>
                                </div>
                                <div className="image mt-[-20px] lg:mt-[-40px]">
                                    <Image src={Card3} alt='Card 1' className='w-full rounded-b-[20px] ml-auto' />
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-span-12 sm:col-span-6">
                            <motion.div variants={bottomVariants} initial="initial"
                                animate="animate" className="card min-h-[380px] flex flex-col justify-between sm:min-h-full border border-[#E2E2E2] rounded-[20px] bg-white h-full relative  before:content-[''] before:absolute before:rounded-[20px] before:top-0 before:left-0 before:h-full before:w-full before:bg-[#6b46ff1c] before:z-[1] sm:before:z-[-2]">
                                <div className="content px-5 lg:px-7 xl:px-12 py-7 lg:py-10">
                                    <h3 className='text-[18px] lg:text-[25px] xl:text-[30px] font-bold leading-normal mb-3'>AI-powered productivity</h3>
                                    <p className='text-[#646474] text-[15px] lg:text-[18px] xl:text-[20px] leading-[22px] md:leading-[25px] lg:leading-tight font-light lg:w-11/12'>Get work done faster with the only AI-powered assistant
                                        tailored to your role.</p>
                                </div>
                                <div className="image mt-[-20px]">
                                    <Image src={Card4} alt='Card 1' className='w-full rounded-b-[20px]' />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Small CTA */}
            <section className='pb-[60px] px-4'>
                <div className="container relative rounded-[20px] pt-[20px] pb-[50px]">
                    <Image src={CTAbg} alt='CTA bg' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <motion.div variants={textVariants}
                                initial="initial"
                                whileInView="animate" className="txt sm:px-8 pt-5 pb-8 md:py-8">
                                <motion.h3 variants={textVariants}
                                    initial="initial"
                                    whileInView="animate" className='text-[18px] lg:text-[25px] xl:text-[30px] font-bold leading-normal text-white md:mb-6 text-center lg:text-left'>Trusted by over <span className='text-[#886AFF]'>2,000,000</span> teams</motion.h3>
                            </motion.div>
                            <motion.div variants={textVariants}
                                initial="initial"
                                whileInView="animate" className="flex flex-wrap items-center justify-center sm:justify-between lg:justify-start gap-y-5 gap-x-7 sm:gap-x-3 md:gap-x-8 lg:gap-x-16 sm:px-8 mb-[30px] sm:mb-[50px]">
                                <motion.div variants={textVariants}>
                                    <motion.div variants={textVariants} className="number">
                                        <h6 className='text-[18px] lg:text-[25px] xl:text-[30px] text-white font-bold opacity-80 mb-3 tracking-[1px] text-center lg:text-left'>305M+</h6>
                                        <p className='text-white text-[15px] lg:text-[20px] leading-[20px] lg:leading-normal tracking-[1px] font-light opacity-60 text-center lg:text-left'>Tasks completed</p>
                                    </motion.div>
                                </motion.div>
                                <motion.div variants={textVariants}>
                                    <motion.div variants={textVariants} className="number">
                                        <h6 className='text-[18px] lg:text-[25px] xl:text-[30px] text-white font-bold opacity-80 mb-3 tracking-[1px] text-center lg:text-left'>55M+</h6>
                                        <p className='text-white text-[15px] lg:text-[20px] leading-[20px] lg:leading-normal tracking-[1px] font-light opacity-60 text-center lg:text-left'>Docs created</p>
                                    </motion.div>
                                </motion.div>
                                <motion.div variants={textVariants}>
                                    <motion.div variants={textVariants} className="number">
                                        <h6 className='text-[18px] lg:text-[25px] xl:text-[30px] text-white font-bold opacity-80 mb-3 tracking-[1px] text-center lg:text-left'>615M+</h6>
                                        <p className='text-white text-[15px] lg:text-[20px] leading-[20px] lg:leading-normal tracking-[1px] font-light opacity-60 text-center lg:text-left'>Messages sent</p>
                                    </motion.div>
                                </motion.div>
                                <motion.div variants={textVariants}>
                                    <motion.div variants={textVariants} className="number">
                                        <h6 className='text-[18px] lg:text-[25px] xl:text-[30px] text-white font-bold opacity-80 mb-3 tracking-[1px] text-center lg:text-left'>11M+</h6>
                                        <p className='text-white text-[15px] lg:text-[20px] leading-[20px] lg:leading-normal tracking-[1px] font-[200] opacity-60 text-center lg:text-left'>Automations created</p>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            <motion.div variants={textVariants}
                                initial="initial"
                                whileInView="animate" className='flex items-center justify-center lg:justify-start px-8 group'>
                                <CTA
                                    text="Get Started"
                                    href="#href"
                                    css="border border-[#B9B9B9] backdrop-blur-sm bg-white/10 group-hover:bg-[#6B46FF] transition-all ease-in-out duration-700 text-white opacity-60 group-hover:text-white group-hover:opacity-100 group-hover:border-[#6B46FF] font-semibold" />
                                <motion.div variants={textVariants} className='overflow-hidden sm:block hidden'>
                                    <Link href="#href" className='w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full backdrop-blur-sm bg-white/10 border border-[#B9B9B9] group-hover:border-[#6B46FF] group-hover:bg-[#6B46FF] flex items-center justify-center circleBtn overflow-hidden'>
                                        <Image src={ArrowImage} alt='Arrow Image' width={16} height={16} className='group-hover:brightness-[100] group-hover:invert-0 transition-all ease-in-out duration-700' />
                                    </Link>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default LookingFor
