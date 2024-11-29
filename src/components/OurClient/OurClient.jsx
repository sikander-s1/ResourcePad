"use client"
import React, { useEffect, useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
// Slick Slider
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Images
import Card1 from "media/assets/images/client-1.png"
import Card2 from "media/assets/images/client-2.png"
import Card3 from "media/assets/images/client-3.png"
import Arrow from "media/assets/images/arrow.png"

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
        y: 50,
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

const OurClient = () => {
    // var settings = {
    //     arrows: false,
    //     dots: false,
    //     infinite: true,
    //     autoplay: true,
    //     centerMode: true,
    //     centerPadding: '25px',
    //     autoplaySpeed: 2500,
    //     speed: 500,
    //     slidesToShow: 3.05,
    //     slidesToScroll: 1,
    // };
    return (
        <section className='pt-0 lg:pt-[60px] 3xl:pt-[140px] pb-[50px] sm:pb-[90px] 3xl:pb-[150px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <motion.div variants={textVariants}
                            initial="initial"
                            whileInView="animate" className="txt mb-4 md:mb-10 xxl:mb-16">
                            <motion.h2 variants={textVariants} className='text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px] text-[#202020] font-bold mb-1 xxl:mb-3'>Our clients lead the way</motion.h2>
                            <motion.p variants={textVariants} className='text-[#646474] text-[14px] md:text-[16px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[30px] mb-4 lg:mb-8'>When she reached the first hills of the Italic Mountains had a last view back on the skyline.</motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div className="Slider sticky top-[100px]" variants={topVariants}
                initial="initial"
                whileInView="animate">
                <div className="grid grid-cols-12">
                    <div className="3xl:col-span-1"></div>
                    <div className="col-span-12 3xl:col-span-11">
                        <div className="overflow-x-scroll flex items-center clientScroll pb-[30px] sm:pl-[15px] xxl:pl-[50px] 3xl:pl-0">
                            <div className='px-2 min-w-full sm:min-w-[480px]'>
                                <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                    <Image src={Card1} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                    <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Streaming
                                            </Link>
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Mobile
                                            </Link>
                                        </div>
                                        <div className="arrow">
                                            <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                                <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                        <div className='border-b border-b-white border-opacity-60 pb-7'>
                                            <h3 className='text-[25px] font-semibold leading-normal text-white'>Streama.io</h3>
                                            <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>Streaming & media app development platform</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>2 phases</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Already
                                                    <br className='lg:block hidden' />
                                                    completed
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>80%</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Unit test
                                                    <br className='lg:block hidden' />
                                                    coverage
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>Native-Like</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 min-w-full sm:min-w-[480px]'>
                                <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                    <Image src={Card2} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                    <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Banking
                                            </Link>
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Website
                                            </Link>
                                        </div>
                                        <div className="arrow">
                                            <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                                <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                        <div className='border-b border-b-white border-opacity-60 pb-7'>
                                            <h3 className='text-[25px] font-semibold leading-normal text-white'>Cred</h3>
                                            <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>Streaming & media app development platform</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>2 phases</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Already
                                                    <br className='lg:block hidden' />
                                                    completed
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>80%</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Unit test
                                                    <br className='lg:block hidden' />
                                                    coverage
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>Native-Like</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 min-w-full sm:min-w-[480px]'>
                                <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                    <Image src={Card3} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                    <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Finance
                                            </Link>
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Mobile
                                            </Link>
                                        </div>
                                        <div className="arrow">
                                            <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                                <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                        <div className='border-b border-b-white border-opacity-60 pb-7'>
                                            <h3 className='text-[25px] font-semibold leading-normal text-white'>Financy</h3>
                                            <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>Streaming & media app development platform</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>2 phases</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Already
                                                    <br className='lg:block hidden' />
                                                    completed
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>80%</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Unit test
                                                    <br className='lg:block hidden' />
                                                    coverage
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>Native-Like</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 min-w-full sm:min-w-[480px]'>
                                <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                    <Image src={Card1} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                    <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Streaming
                                            </Link>
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Mobile
                                            </Link>
                                        </div>
                                        <div className="arrow">
                                            <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                                <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                        <div className='border-b border-b-white border-opacity-60 pb-7'>
                                            <h3 className='text-[25px] font-semibold leading-normal text-white'>Streama.io</h3>
                                            <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>Streaming & media app development platform</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>2 phases</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Already
                                                    <br className='lg:block hidden' />
                                                    completed
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>80%</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Unit test
                                                    <br className='lg:block hidden' />
                                                    coverage
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>Native-Like</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 min-w-full sm:min-w-[480px]'>
                                <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                    <Image src={Card2} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                    <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Banking
                                            </Link>
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Website
                                            </Link>
                                        </div>
                                        <div className="arrow">
                                            <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                                <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                        <div className='border-b border-b-white border-opacity-60 pb-7'>
                                            <h3 className='text-[25px] font-semibold leading-normal text-white'>Cred</h3>
                                            <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>Streaming & media app development platform</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>2 phases</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Already
                                                    <br className='lg:block hidden' />
                                                    completed
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>80%</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Unit test
                                                    <br className='lg:block hidden' />
                                                    coverage
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>Native-Like</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2 min-w-full sm:min-w-[480px]'>
                                <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                    <Image src={Card3} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                    <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Finance
                                            </Link>
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Mobile
                                            </Link>
                                        </div>
                                        <div className="arrow">
                                            <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                                <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                        <div className='border-b border-b-white border-opacity-60 pb-7'>
                                            <h3 className='text-[25px] font-semibold leading-normal text-white'>Financy</h3>
                                            <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>Streaming & media app development platform</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>2 phases</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Already
                                                    <br className='lg:block hidden' />
                                                    completed
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>80%</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Unit test
                                                    <br className='lg:block hidden' />
                                                    coverage
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>Native-Like</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <Slider {...settings}>
                            <div className='px-2'>
                                <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                    <Image src={Card1} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                    <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Streaming
                                            </Link>
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Mobile
                                            </Link>
                                        </div>
                                        <div className="arrow">
                                            <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                                <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                        <div className='border-b border-b-white border-opacity-60 pb-7'>
                                            <h3 className='text-[25px] font-semibold leading-normal text-white'>Streama.io</h3>
                                            <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>Streaming & media app development platform</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>2 phases</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Already
                                                    <br className='lg:block hidden' />
                                                    completed
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>80%</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Unit test
                                                    <br className='lg:block hidden' />
                                                    coverage
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>Native-Like</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                    <Image src={Card2} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                    <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Banking
                                            </Link>
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Website
                                            </Link>
                                        </div>
                                        <div className="arrow">
                                            <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                                <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                        <div className='border-b border-b-white border-opacity-60 pb-7'>
                                            <h3 className='text-[25px] font-semibold leading-normal text-white'>Cred</h3>
                                            <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>Streaming & media app development platform</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>2 phases</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Already
                                                    <br className='lg:block hidden' />
                                                    completed
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>80%</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Unit test
                                                    <br className='lg:block hidden' />
                                                    coverage
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>Native-Like</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                    <Image src={Card3} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                    <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Finance
                                            </Link>
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Mobile
                                            </Link>
                                        </div>
                                        <div className="arrow">
                                            <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                                <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                        <div className='border-b border-b-white border-opacity-60 pb-7'>
                                            <h3 className='text-[25px] font-semibold leading-normal text-white'>Financy</h3>
                                            <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>Streaming & media app development platform</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>2 phases</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Already
                                                    <br className='lg:block hidden' />
                                                    completed
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>80%</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Unit test
                                                    <br className='lg:block hidden' />
                                                    coverage
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>Native-Like</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                    <Image src={Card1} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                    <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Streaming
                                            </Link>
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Mobile
                                            </Link>
                                        </div>
                                        <div className="arrow">
                                            <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                                <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                        <div className='border-b border-b-white border-opacity-60 pb-7'>
                                            <h3 className='text-[25px] font-semibold leading-normal text-white'>Streama.io</h3>
                                            <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>Streaming & media app development platform</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>2 phases</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Already
                                                    <br className='lg:block hidden' />
                                                    completed
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>80%</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Unit test
                                                    <br className='lg:block hidden' />
                                                    coverage
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>Native-Like</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                    <Image src={Card2} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                    <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Banking
                                            </Link>
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Website
                                            </Link>
                                        </div>
                                        <div className="arrow">
                                            <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                                <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                        <div className='border-b border-b-white border-opacity-60 pb-7'>
                                            <h3 className='text-[25px] font-semibold leading-normal text-white'>Cred</h3>
                                            <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>Streaming & media app development platform</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>2 phases</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Already
                                                    <br className='lg:block hidden' />
                                                    completed
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>80%</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Unit test
                                                    <br className='lg:block hidden' />
                                                    coverage
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>Native-Like</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='px-2'>
                                <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                    <Image src={Card3} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                    <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                        <div className="flex items-center gap-3">
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Finance
                                            </Link>
                                            <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                                Mobile
                                            </Link>
                                        </div>
                                        <div className="arrow">
                                            <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                                <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                        <div className='border-b border-b-white border-opacity-60 pb-7'>
                                            <h3 className='text-[25px] font-semibold leading-normal text-white'>Financy</h3>
                                            <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>Streaming & media app development platform</p>
                                        </div>
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>2 phases</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Already
                                                    <br className='lg:block hidden' />
                                                    completed
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>80%</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Unit test
                                                    <br className='lg:block hidden' />
                                                    coverage
                                                </p>
                                            </div>
                                            <div>
                                                <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>Native-Like</h6>
                                                <p className='text-white text-[14px] lg:text-[16px] font-normal opacity-80'>
                                                    Performance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider> */}
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default OurClient
