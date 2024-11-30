"use client"
import React from 'react'
import Link from 'next/link'
import CTA from '../CTA/CTA'
import Image from 'next/image'
import { motion } from "framer-motion";
// Images
import ArrowImage from "media/assets/images/gray-arrow.png"
import ArrowImage2 from "media/assets/images/icons/color-arrow.png"

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

const LookingFor = ({ content }) => {
    const { title, desc, ctaTitle, ctaDesc, counter, ctaBg, lookingCards } = content
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
                                    whileInView="animate" className='text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px] text-[#202020] font-bold mb-1 md:mb-3 md:w-9/12 mx-auto lg:w-full'>
                                    {title}
                                </motion.h2>
                                <motion.p initial="initial"
                                    whileInView="animate" className='text-[#646474] text-[14px] md:text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px] mb-5'>{desc}</motion.p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-7">
                        {lookingCards.map((carddata, index) => (
                            <div key={index}>
                                <motion.div variants={topVariants} initial="initial"
                                    animate="animate" className="card min-h-[380px] flex flex-col justify-between sm:min-h-full border border-[#E2E2E2] rounded-[20px] bg-white h-full relative before:content-[''] before:absolute before:rounded-[20px] before:top-0 before:left-0 before:h-full before:w-full before:bg-[#6b46ff1c] before:z-[1] sm:before:z-[-2]">
                                    {carddata.isBgImage ? <Image src={carddata.bgImage} alt='Card 3' fill className='object-cover object-center z-0 opacity-20' /> : null}
                                    <div className={`content px-5 lg:px-7 xl:px-12 py-7 lg:py-10 ${carddata.css}`}>
                                        <h3 className='text-[18px] lg:text-[25px] xl:text-[30px] font-bold leading-normal mb-3'>{carddata.cardTitle}</h3>
                                        <p className='text-[#646474] text-[15px] lg:text-[18px] xl:text-[20px] leading-[22px] md:leading-[25px] lg:leading-tight font-light xl:w-10/12'>{carddata.cardDesc}</p>
                                    </div>
                                    <div className="image">
                                        <Image src={carddata.image} alt='Card 1' fill={carddata.imagePosition ? true : undefined} className={`w-full rounded-b-[20px] ${carddata.imageCss}`} />
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Small CTA */}
            <section className='pb-[60px] px-4'>
                <div className="container relative rounded-[20px] pt-[30px] pb-[50px]">
                    <Image src={ctaBg} alt='CTA bg' fill className='object-cover object-center z-[-1] rounded-[20px] opacity-95' />
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <motion.div variants={textVariants}
                                initial="initial"
                                whileInView="animate" className="txt sm:px-8 pt-5 pb-8 md:py-8">
                                <motion.h3 variants={textVariants}
                                    initial="initial"
                                    whileInView="animate" className='text-[18px] lg:text-[25px] xl:text-[30px] font-bold leading-normal text-white md:mb-5 text-center lg:text-left'>
                                    {ctaTitle}
                                </motion.h3>
                                <p className='text-white text-[15px] lg:text-[18px] xl:text-[20px] leading-[22px] md:leading-[25px] lg:leading-tight font-extralight xl:w-6/12 xxl:pr-20 lg:mb-4'>{ctaDesc}</p>
                            </motion.div>
                            {counter ?
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
                                : null}
                            <motion.div variants={textVariants}
                                initial="initial"
                                whileInView="animate" className='flex items-center justify-center lg:justify-start px-8 group'>
                                <CTA
                                    text="Get Started"
                                    href="#href"
                                    css={`border border-[#B9B9B9] backdrop-blur-sm ${counter ? 'bg-white/10 opacity-60 text-white' : 'bg-white text-[#6B46FF] border-white'} group-hover:bg-[#6B46FF] transition-all ease-in-out duration-700 group-hover:text-white group-hover:opacity-100 group-hover:border-[#6B46FF] font-semibold`} />
                                <motion.div variants={textVariants} className='overflow-hidden sm:block hidden'>
                                    <Link href="#href" className={`w-[50px] lg:w-[55px] h-[50px] lg:h-[55px] rounded-full backdrop-blur-sm ${counter ? 'bg-white/10' : 'bg-white border-white'} border border-[#B9B9B9] group-hover:border-[#6B46FF] group-hover:bg-[#6B46FF] flex items-center justify-center circleBtn overflow-hidden`}>
                                        {counter ?
                                            <Image src={ArrowImage} alt='Arrow Image' width={16} height={16} className='group-hover:brightness-[100] group-hover:invert-0 transition-all ease-in-out duration-700' />
                                            :
                                            <Image src={ArrowImage2} alt='Arrow Image' width={16} height={16} className='group-hover:brightness-[100] group-hover:invert-0 transition-all ease-in-out duration-700' />
                                        }
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
