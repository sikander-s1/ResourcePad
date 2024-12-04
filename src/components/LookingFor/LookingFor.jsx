"use client"
import React from 'react'
import Link from 'next/link'
import CTA from '../CTA/CTA'
import Image from 'next/image'
import { motion } from "framer-motion";
// Images
import ArrowImage from "media/gray-arrow.png"
import ArrowImage2 from "media/icons/color-arrow.png"

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
    const { title, desc, ctaTitle, ctaDesc, topDesc = "", counter, ctaBg, lookingCards } = content
    return (
        <>
            <section className='pt-[50px] md:pt-[30px] xl:pt-[60px] 3xl:pt-[130px] pb-[30px]'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <motion.div variants={textVariants}
                                initial="initial"
                                whileInView="animate" className="mb-[25px] md:mb-[40px] lg:mb-[60px] text-center txt">
                                <motion.h2 initial="initial"
                                    whileInView="animate" className='mx-auto mb-1 md:mb-3 md:w-9/12 lg:w-full font-bold text-[#202020] text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px]'>
                                    {title}
                                </motion.h2>
                                <motion.p initial="initial"
                                    whileInView="animate" className='mb-5 text-[#646474] text-[14px] md:text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px]'>{desc}</motion.p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="gap-4 md:gap-7 grid grid-cols-1 sm:grid-cols-2">
                        {lookingCards.map((carddata, index) => (
                            <div key={index}>
                                <motion.div variants={topVariants} initial="initial"
                                    animate="animate" className="relative before:top-0 before:left-0 sm:before:z-[-2] before:z-[1] before:absolute flex flex-col justify-between before:content-[''] border-[#E2E2E2] bg-white before:bg-[#6b46ff1c] border rounded-[20px] before:rounded-[20px] before:w-full h-full before:h-full min-h-[380px] sm:min-h-full card">
                                    {carddata.isBgImage ? <Image src={carddata.bgImage} alt='Card 3' fill className='z-0 opacity-20 object-center object-cover' /> : null}
                                    <div className={`content px-5 lg:px-7 xl:px-12 py-7 lg:py-10 ${carddata.css}`}>
                                        <h3 className='mb-3 font-bold text-[18px] lg:text-[25px] xl:text-[30px] leading-normal'>{carddata.cardTitle}</h3>
                                        <p className={`xl:w-10/12 ${carddata.descCss} font-light text-[#646474] text-[15px] lg:text-[18px] xl:text-[20px] leading-[22px] md:leading-[25px] lg:leading-tight`}>{carddata.cardDesc}</p>
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
            <section className='px-4 pb-[60px]'>
                <div className="relative pt-[30px] pb-[50px] rounded-[20px] container">
                    <Image src={ctaBg} alt='CTA bg' fill className='z-[-1] opacity-95 rounded-[20px] object-center object-cover' />
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <motion.div variants={textVariants}
                                initial="initial"
                                whileInView="animate" className="sm:px-8 md:py-8 pt-5 pb-8 txt">
                                <p className='lg:mb-4 xxl:pr-20 xl:w-6/12 font-extralight text-[15px] text-white lg:text-[18px] xl:text-[20px] leading-[22px] md:leading-[25px] lg:leading-tight'>
                                    {topDesc}
                                </p>
                                <motion.h3 variants={textVariants}
                                    initial="initial"
                                    whileInView="animate" className='md:mb-5 font-bold text-[18px] text-center text-white lg:text-[25px] lg:text-left xl:text-[30px] lg:leading-[30px] xl:leading-[35px]'>
                                    {ctaTitle}
                                </motion.h3>
                                <p className='lg:mb-4 xxl:pr-20 xl:w-6/12 font-extralight text-[15px] text-white lg:text-[18px] xl:text-[20px] leading-[22px] md:leading-[25px] lg:leading-tight'>{ctaDesc}</p>
                            </motion.div>
                            {counter ?
                                <motion.div variants={textVariants}
                                    initial="initial"
                                    whileInView="animate" className="flex flex-wrap justify-center sm:justify-between lg:justify-start items-center gap-x-7 gap-y-5 sm:gap-x-3 md:gap-x-8 lg:gap-x-16 mb-[30px] sm:mb-[50px] sm:px-8">
                                    <motion.div variants={textVariants}>
                                        <motion.div variants={textVariants} className="number">
                                            <h6 className='opacity-80 mb-3 font-bold text-[18px] text-center text-white lg:text-[25px] lg:text-left xl:text-[30px] tracking-[1px]'>305M+</h6>
                                            <p className='opacity-60 font-light text-[15px] text-center text-white lg:text-[20px] lg:text-left leading-[20px] lg:leading-normal tracking-[1px]'>Tasks completed</p>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div variants={textVariants}>
                                        <motion.div variants={textVariants} className="number">
                                            <h6 className='opacity-80 mb-3 font-bold text-[18px] text-center text-white lg:text-[25px] lg:text-left xl:text-[30px] tracking-[1px]'>55M+</h6>
                                            <p className='opacity-60 font-light text-[15px] text-center text-white lg:text-[20px] lg:text-left leading-[20px] lg:leading-normal tracking-[1px]'>Docs created</p>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div variants={textVariants}>
                                        <motion.div variants={textVariants} className="number">
                                            <h6 className='opacity-80 mb-3 font-bold text-[18px] text-center text-white lg:text-[25px] lg:text-left xl:text-[30px] tracking-[1px]'>615M+</h6>
                                            <p className='opacity-60 font-light text-[15px] text-center text-white lg:text-[20px] lg:text-left leading-[20px] lg:leading-normal tracking-[1px]'>Messages sent</p>
                                        </motion.div>
                                    </motion.div>
                                    <motion.div variants={textVariants}>
                                        <motion.div variants={textVariants} className="number">
                                            <h6 className='opacity-80 mb-3 font-bold text-[18px] text-center text-white lg:text-[25px] lg:text-left xl:text-[30px] tracking-[1px]'>11M+</h6>
                                            <p className='opacity-60 font-[200] text-[15px] text-center text-white lg:text-[20px] lg:text-left leading-[20px] lg:leading-normal tracking-[1px]'>Automations created</p>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                                : null}
                            <motion.div variants={textVariants}
                                initial="initial"
                                whileInView="animate" className='flex justify-center lg:justify-start items-center px-8 group'>
                                <CTA
                                    text="Get Started"
                                    href="#href"
                                    css={`border border-[#B9B9B9] backdrop-blur-sm ${counter ? 'bg-white/10 opacity-60 text-white' : 'bg-white text-[#6B46FF] border-white'} group-hover:bg-[#6B46FF] transition-all ease-in-out duration-700 group-hover:text-white group-hover:opacity-100 group-hover:border-[#6B46FF] font-semibold`} />
                                <motion.div variants={textVariants} className='sm:block hidden overflow-hidden'>
                                    <Link href="#href" className={`w-[50px] lg:w-[55px] h-[50px] lg:h-[55px] rounded-full backdrop-blur-sm ${counter ? 'bg-white/10' : 'bg-white border-white'} border border-[#B9B9B9] group-hover:border-[#6B46FF] group-hover:bg-[#6B46FF] flex items-center justify-center circleBtn overflow-hidden`}>
                                        {counter ?
                                            <Image src={ArrowImage} alt='Arrow Image' width={16} height={16} className='group-hover:brightness-[100] group-hover:invert-0 transition-all duration-700 ease-in-out' />
                                            :
                                            <Image src={ArrowImage2} alt='Arrow Image' width={16} height={16} className='group-hover:brightness-[100] group-hover:invert-0 transition-all duration-700 ease-in-out' />
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
