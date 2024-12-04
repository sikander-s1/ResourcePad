"use client"
import React from 'react'
import CTA from '../CTA/CTA'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
// Images
import ArrowImage2 from "media/arrow.png"
import ArrowImage3 from "media/gray-arrow.png"
import Blog1 from "media/blog-1.png"
import Blog2 from "media/blog-2.png"

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

const textVariantsThree = {
    initial: {
        opacity: 0,
    },
    animate: {
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

const TrendingBlog = () => {
    return (
        <section className='pt-0 3xl:pt-[20px] pb-[60px] md:pb-[110px] 3xl:pb-[200px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <div className="flex items-center justify-between mb-[40px]">
                            <motion.div variants={textVariants}
                                initial="initial"
                                whileInView="animate" className="txt text-center md:text-start">
                                <motion.h2 variants={textVariants} className='text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px] text-[#202020] font-bold mb-3'>Our Trending Blogs</motion.h2>
                                <motion.p variants={textVariants} className='text-[#646474] text-[14px] md:text-[16px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[30px] md:mb-4 lg:mb-8 lg:w-8/12'>Proud to serve as the innovation partner for industry leaders who have
                                    experienced our expertise and excellence firsthand.</motion.p>
                            </motion.div>
                            <motion.div variants={textVariantsThree}
                                initial="initial"
                                whileInView="animate" className='md:flex items-center group hidden'>
                                <CTA
                                    text="Learn More"
                                    href="#href"
                                    css="border group-hover:border-[#B9B9B9] group-hover:bg-transparent bg-[#6B46FF] transition-all ease-in-out duration-700 text-[#646474] group-hover:text-black text-white border-[#6B46FF] font-semibold" />
                                <div className='overflow-hidden'>
                                    <Link href="#href" className='w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full border group-hover:border-[#B9B9B9] group-hover:bg-transparent border-[#6B46FF] bg-[#6B46FF] flex items-center justify-center  circleBtn overflow-hidden'>
                                        <Image src={ArrowImage2} alt='Arrow Image' width={16} height={16} className='group-hover:brightness-[100] group-hover:invert-[1] transition-all ease-in-out duration-700' />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 pl-4 lg:pl-0 pr-4">
                <div className="col-span-12 3xl:col-span-11">
                    <div className="grid grid-cols-12 gap-4 lg:gap-7">
                        <div className="col-span-12 lg:col-span-6">
                            <motion.div variants={textVariantsThree}
                                initial="initial"
                                whileInView="animate" className="relative max-h-[350px] lg:max-h-full h-full rounded-r-[20px] rounded-l-[20px] md:rounded-l-[0px] overflow-hidden group">
                                <Image src={Blog1} alt='Blog' className='h-full w-full' />
                                <motion.div variants={textVariantsThree} className="txtCard bg-black/20 backdrop-blur-lg absolute z-10 bottom-0 right-0 h-full sm:h-max py-9 px-5 md:px-8 rounded-[20px] w-full sm:w-[375px]">
                                    <motion.h3 variants={textVariantsThree} className='text-[18px] xl:text-[22px] font-semibold leading-[28px] xl:leading-[32px] text-white mb-5'>Power of AI and ML for <br className='lg:block hidden' /> Transforming Mobile App</motion.h3>
                                    <motion.p variants={textVariantsThree} className='text-[16px] xl:text-[18px] leading-[21px] xl:leading-[23px] font-[300] text-white opacity-70 mb-[30px]'>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown.</motion.p>
                                    <motion.div variants={textVariantsThree} className='flex items-center group'>
                                        <CTA
                                            text="Learn More"
                                            href="#href"
                                            css="border border-[#B9B9B9] bg-transparent group-hover:bg-[#6B46FF] transition-all ease-in-out duration-700 text-[#646474] text-white group-hover:border-[#6B46FF] font-semibold" />
                                        <div className=' overflow-hidden md:block hidden'>
                                            <motion.a variants={textVariantsThree} href="#href" className='w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full border border-[#B9B9B9] group-hover:border-[#6B46FF] group-hover:bg-[#6B46FF] flex items-center justify-center overflow-hidden circleBtn'>
                                                <Image src={ArrowImage2} alt='Arrow Image' width={16} height={16} className='group-hover:brightness-[100] group-hover:invert-0 transition-all ease-in-out duration-700' />
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className="col-span-12 lg:col-span-6">
                            <motion.div variants={textVariantsThree}
                                initial="initial"
                                whileInView="animate" className="relative rounded-[20px] mb-[20px] lg:mb-[28px] overflow-hidden">
                                <div className="grid grid-cols-12 gap-y-6">
                                    <div className="col-span-12 sm:col-span-6">
                                        <motion.div variants={textVariantsThree} className='py-[30px] xl:py-[55px] px-[20px] xl:px-[25px] 3xl:px-[40px] rounded-l-[25px] rounded-r-[25px] sm:rounded-r-[0px] sm:rounded-l-[20px] border border-[#E2E2E2] h-full flex flex-col justify-center lg:justify-start'>
                                            <motion.h3 variants={textVariantsThree} className='text-[18px] xl:text-[22px] font-semibold leading-[28px] xl:leading-[32px] text-[#202020] mb-3 xl:mb-5'>Power of AI and ML for <br className='lg:block hidden' /> Transforming Mobile App</motion.h3>
                                            <motion.p variants={textVariantsThree} className='text-[16px] xl:text-[18px] leading-[21px] xl:leading-[23px] font-[300] text-[#202020] opacity-70 mb-[30px]'>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown.</motion.p>
                                            <motion.div variants={textVariantsThree} className='flex items-center group'>
                                                <CTA
                                                    text="Learn More"
                                                    href="#href"
                                                    css="border border-[#B9B9B9] bg-transparent group-hover:bg-[#6B46FF] transition-all ease-in-out duration-700 text-[#646474] group-hover:text-white group-hover:border-[#6B46FF] font-semibold" />
                                                <div className='overflow-hidden xl:block hidden'>
                                                    <motion.a variants={textVariantsThree} href="#href" className='w-[60px] h-[60px] rounded-full border border-[#B9B9B9] group-hover:border-[#6B46FF] group-hover:bg-[#6B46FF] flex items-center justify-center  circleBtn overflow-hidden'>
                                                        <Image src={ArrowImage3} alt='Arrow Image' width={16} height={16} className='group-hover:brightness-[100] group-hover:invert-0 transition-all ease-in-out duration-700' />
                                                    </motion.a>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                    <motion.div variants={textVariantsThree} className="col-span-12 sm:col-span-6">
                                        <Image src={Blog2} alt='Blog' className='h-full w-full rounded-[25px] sm:rounded-[0px]' />
                                    </motion.div>
                                </div>
                            </motion.div>
                            <div className="relative rounded-[20px] overflow-hidden">
                                <motion.div variants={textVariantsThree}
                                    initial="initial"
                                    whileInView="animate" className="grid grid-cols-12 gap-y-6">
                                    <motion.div variants={textVariantsThree} className="col-span-12 sm:col-span-6">
                                        <Image src={Blog2} alt='Blog' className='h-full w-full rounded-[25px] sm:rounded-[0px]' />
                                    </motion.div>
                                    <motion.div variants={textVariantsThree} className="col-span-12 sm:col-span-6">
                                        <motion.div variants={textVariantsThree} className='py-[30px] xl:py-[55px] px-[20px] xl:px-[25px] 3xl:px-[40px] rounded-[25px] sm:rounded-l-[0px] sm:rounded-r-[20px] border border-[#E2E2E2] h-full flex flex-col justify-center lg:justify-start'>
                                            <motion.h3 variants={textVariantsThree} className='text-[18px] xl:text-[22px] font-semibold leading-[28px] xl:leading-[32px] text-[#202020] mb-3 xl:mb-5'>AR and VR technology  <br className='lg:block hidden' /> businesses 2024</motion.h3>
                                            <motion.p variants={textVariantsThree} className='text-[16px] xl:text-[18px] leading-[21px] xl:leading-[23px] font-[300] text-[#202020] opacity-70 mb-[30px]'>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown.</motion.p>
                                            <motion.div variants={textVariantsThree} className='flex items-center group'>
                                                <CTA
                                                    text="Learn More"
                                                    href="#href"
                                                    css="border border-[#B9B9B9] bg-transparent group-hover:bg-[#6B46FF] transition-all ease-in-out duration-700 text-[#646474] group-hover:text-white group-hover:border-[#6B46FF] font-semibold" />
                                                <div className='overflow-hidden xl:block hidden'>
                                                    <motion.a variants={textVariantsThree} href="#href" className='w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full border border-[#B9B9B9] group-hover:border-[#6B46FF] group-hover:bg-[#6B46FF] flex items-center justify-center overflow-hidden circleBtn'>
                                                        <Image src={ArrowImage3} alt='Arrow Image' width={16} height={16} className='group-hover:brightness-[100] group-hover:invert-0 transition-all ease-in-out duration-700' />
                                                    </motion.a>
                                                </div>
                                            </motion.div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="3xl:block hidden 3xl:col-span-1"></div>
            </div>
        </section>
    )
}

export default TrendingBlog
