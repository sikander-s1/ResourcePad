"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import CTA from '../CTA/CTA'
import Link from 'next/link'
import Image from 'next/image'
// Images
import ArrowImage from "media/gray-arrow.png"
import ArrowImage2 from "media/arrow.png"
import Checked from "media/icons/checked.png"

const textVariants = {
    initial: {
        y: -200,
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

const divVariants = {
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

const Brand = ({ content }) => {
    const { title, desc, image, card, hireTitle, btn, isChecked } = content;
    const [isMobile, setIsMobile] = useState(false);

    const controls = useAnimation();

    useEffect(() => {
        const updateOrientation = () => {
            const regex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
            const isMobileDevice = regex.test(navigator.userAgent);
            setIsMobile(isMobileDevice && window.innerWidth > window.innerHeight);
        };

        const handleResize = () => {
            updateOrientation();
        };

        // Initial orientation and resize check
        updateOrientation();
        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const sizes = { g: 32, h: 138, b: 100 };
        if (window.innerWidth < 1440) sizes.g = 24;
        if (window.innerWidth < 992) sizes.h = 68;
        if (window.innerWidth < 575) sizes.b = 60;

        const handleScrollAnimation = () => {
            const cards = document.querySelectorAll('.explorer-section--card');
            cards.forEach((card, index) => {
                const scrollStart = sizes.h + sizes.g * index;
                const scrollEnd = sizes.b;

                window.addEventListener('scroll', () => {
                    const cardRect = card.getBoundingClientRect();
                    const scaleFactor = Math.max(
                        1 - 0.03 * (cards.length - index),
                        0.8
                    );

                    if (
                        cardRect.top >= scrollStart &&
                        cardRect.bottom <= window.innerHeight - scrollEnd
                    ) {
                        card.style.transform = `scale(${scaleFactor})`;
                    }
                });
            });
        };

        if (!isMobile) {
            handleScrollAnimation();
        }
    }, [isMobile]);

    return (
        <>
            <section className='pt-[10px] md:pt-[80px] 2xl:pt-[130px]'>
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <motion.div variants={textVariants}
                                initial="initial"
                                whileInView="animate" className="txt text-center">
                                <h2 className='text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px] text-[#202020] font-bold mb-1 md:mb-3'>{title}</h2>
                                <p className='text-[#646474] text-[14px] md:text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px] mb-5 lg:mb-8 xl:mb-12'>{desc}</p>
                            </motion.div>
                            <motion.div variants={divVariants} initial="initial" whileInView="animate" className="services">
                                <div className="explorer-section__content">
                                    {card.map((cardData, index) => (
                                        <motion.div
                                            key={index}
                                            className={`explorer-section--card flex items-center max-h-[350px] min-h-[400px] lg:min-h-[480px] rounded-[30px] border-8 border-white bg-gray-400 relative custom_shadow pt-[50px] pb-[70px] ${cardData.bgClass}`}
                                            initial={{ scale: 1 }}
                                            animate={controls}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Image src={cardData.image} alt='Background Image' fill={true} className='object-cover object-center z-[-1] rounded-[20px]' />
                                            <div className="grid grid-cols-12">
                                                <div className={`col-span-12 ${btn ? 'md:col-span-6' : 'lg:col-span-7 xl:col-span-6'}`}>
                                                    <div className='pl-[20px] sm:pl-[25px] md:pl-[40px] lg:pl-[60px] pr-[20px] sm:pr-[25px] md:pr-[40px] lg:pr-0'>
                                                        <div className="number">
                                                            <span className='text-[#2020204b] text-[35px] leading-[40px] font-semibold mb-[20px] lg:mb-[60px] block'>{cardData.order}</span>
                                                        </div>
                                                        <h3 className='text-[18px] sm:text-[30px] lg:text-[40px] leading-[25px] sm:leading-[40px] lg:leading-[45px] text-[#202020] font-bold mb-1 sm:mb-3 lg:mb-6'>{cardData.title}</h3>
                                                        <p className={`text-[#646474] text-[13px] sm:text-[15px] leading-[20px] sm:leading-[22px] font-normal mb-[15px] sm:mb-[35px] ${btn ? "lg:w-10/12 lg:text-[19px] lg:leading-[25px]" : "lg:text-[18px] lg:leading-[25px] lg:pr-[2px]"}`}>{cardData.description}</p>
                                                        {btn ?
                                                            <div className='flex items-center group overflow-hidden'>
                                                                <CTA
                                                                    text="Learn More"
                                                                    href="#href"
                                                                    css="border border-[#B9B9B9] bg-transparent group-hover:bg-[#6B46FF] transition-all ease-in-out duration-700 text-[#646474] group-hover:text-white group-hover:border-[#6B46FF] font-semibold overflow-hidden" />
                                                                <div className='overflow-hidden md:block hidden'>
                                                                    <Link href="#href" className='w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full border border-[#B9B9B9] group-hover:border-[#6B46FF] group-hover:bg-[#6B46FF] flex items-center justify-center  circleBtn overflow-hidden'>
                                                                        <Image src={ArrowImage} alt='Arrow Image' width={16} height={16} className='group-hover:brightness-[100] group-hover:invert-0 transition-all ease-in-out duration-700' />
                                                                    </Link>
                                                                </div>
                                                            </div> :
                                                            <div className='flex flex-wrap items-center gap-2 sm:gap-3 xl:w-11/12'>
                                                                {cardData.suggestions.map((data, index) => (
                                                                    <Link href={data.link} key={index} className='bg-white rounded-full w-max py-1 sm:py-2 px-3 sm:px-5 text-[#646474] text-[14px] sm:text-[16px] md:text-[18px] font-light'>
                                                                        {data.text}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        }
                                                        {isChecked && cardData.checkContent && (
                                                            <div className='flex flex-wrap gap-x-7 items-center lg:w-10/12'>
                                                                {cardData.checkContent.map((data, index) => (
                                                                    <div key={index} className='text-[#202020] text-[14px] sm:text-[18px] font-normal flex items-center gap-x-3 mb-3'>
                                                                        <Image src={Checked} alt='Checked' height={21} width={21} />
                                                                        {data}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="col-span-12 md:col-span-6"></div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            {/*  Hiring Part */}
            <motion.section variants={textVariants}
                initial="initial"
                whileInView="animate" className='sm:mb-[60px] lg:mb-[120px] lg:w-10/12 mx-auto pt-[30px] sm:pt-[50px]'>
                <div className="container">
                    <div className="xl:w-11/12 mx-auto border border-[#E2E2E2] rounded-3xl sm:rounded-full px-4 xl:px-6 py-6 sm:py-3 xl:py-5 flex flex-col gap-y-4 sm:flex-row items-center justify-between">
                        <div className="txt">
                            <h6 className='text-[#202020] text-[16px] md:text-[18px] lg:text-[25px] 2xl:text-[35px] font-semibold sm:text-left text-center'>{hireTitle}</h6>
                        </div>
                        <div className='flex items-center justify-end group overflow-hidden w-6/12 sm:w-4/12 xxl:w-3/12'>
                            <CTA
                                text="Hire Now"
                                href="#href"
                                css="border group-hover:border-[#B9B9B9] bg-[#6B46FF] group-hover:bg-transparent transition-all ease-in-out duration-700 text-white group-hover:text-black border-[#6B46FF] w-full" />
                            <div className='overflow-hidden md:block hidden'>
                                <Link href="#href" className='w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full bg-[#6B46FF] flex items-center justify-center circleBtn group-hover:bg-transparent group-hover:border-[#B9B9B9] border border-[#6B46FF] group-hover:duration-700 ease-in-out duration-700 overflow-hidden'>
                                    <Image src={ArrowImage2} alt='Arrow Image' width={16} height={16} className='group-hover:invert-[1] group-hover:duration-700 duration-700 ease-in-out' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>
        </>
    )
}

export default Brand
