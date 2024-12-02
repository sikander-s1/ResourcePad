"use client"
import React, { useEffect, useRef } from 'react'
import CTA from '../CTA/CTA';
import Link from 'next/link';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion";
// ============== Images
import ArrowImage from "media/assets/images/arrow.png"
import bgParticle from "media/assets/images/bg-particle.png"
import Icon1 from "media/assets/images/icons/icon-1.png"
import Icon2 from "media/assets/images/icons/icon-2.png"
import Icon3 from "media/assets/images/icons/icon-3.png"
import Icon4 from "media/assets/images/icons/icon-4.png"
import Icon5 from "media/assets/images/icons/icon-5.png"
import Icon6 from "media/assets/images/icons/icon-6.png"
import Icon7 from "media/assets/images/icons/color-arrow.png"
import tab1 from "media/assets/images/icons/dashboard.png"

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

const sliderVariants = {
    initial: {
        y: "-30%",
        opacity: 0,
    },
    animate: {
        y: "0%",
        opacity: 1,
        transition: {
            repeatType: "mirror",
            duration: 1,
        },
    },
};

const Banner = ({ content }) => {
    const { title, desc, btn, btnText, tabContent } = content;

    const textRef = useRef();

    useEffect(() => {
        if (textRef.current) {
            const text = textRef.current.innerText;
            const rotatedText = text
                .split("")
                .map(
                    (char, i) =>
                        `<span style="display:inline-block; transform:rotate(${i * 10.3}deg)">${char}</span>`
                )
                .join("");
            textRef.current.innerHTML = rotatedText;
        }
    }, []);

    return (
        <section className='pt-[80px] xl:pt-[120px] relative'>
            <div className='absolute right-0 top-0 z-[-1]'>
                <Image src={bgParticle} alt='Background Particle' />
            </div>
            <div className="container relative">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 pb-12 lg:pb-28">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{
                                duration: 1,
                                staggerChildren: 0.1,
                                ease: "easeInOut",
                            }}
                            className="w-[200px] h-[200px] rounded-full xl:flex items-center justify-center absolute right-[22px] top-[-90px] hidden"
                        >
                            <Link href="#href" className="w-[100px] h-[100px] absolute bg-[#6B46FF] rounded-full flex items-center justify-center circleBtn overflow-hidden z-[10]">
                                <Image src={ArrowImage} alt="Circle Btn" width={25} height={25} />
                            </Link>
                            <div
                                className="text text-[15px] text-black w-full h-full relative before:absolute before:content-[''] before:left-[36%] before:top-[15px] before:w-[5px] before:h-[5px] before:bg-black before:rounded-full after:absolute after:content-[''] after:left-[31%] after:bottom-[16px] after:w-[5px] after:h-[5px] after:bg-black after:rounded-full"
                                ref={textRef}
                            >
                                <p>
                                    Contact Our experts <span className="!text-transparent"></span> Contact
                                    Our
                                </p>
                            </div>
                        </motion.div>
                        <motion.div variants={textVariants}
                            initial="initial"
                            whileInView="animate" className="txt relative z-[-1]">
                            <motion.h1 variants={textVariants} className='text-[#202020] text-[30px] sm:text-[40px] md:text-[55px] lg:text-[65px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px] leading-[40px] font-bold text-center mb-4'>{title}</motion.h1>
                            <p className='text-center text-[#646474] text-[16px] md:text-[22px] leading-[23px] md:leading-[29px] font-normal lg:w-10/12 xl:w-8/12 xxl:px-8 mx-auto mb-3 lg:mb-0'>{desc}</p>
                        </motion.div>
                        <motion.div variants={sliderVariants}
                            initial="initial"
                            whileInView="animate" className="flex flex-wrap items-center justify-center gap-5 pt-4 lg:pt-10 relative z-[0]">
                            {btn ?
                                <div className='w-full sm:w-auto'>
                                    <CTA
                                        text="See Our Work"
                                        href="#href"
                                        css="border border-[#B9B9B9] hover:bg-[#6B46FF] transition-all ease-in-out duration-700 hover:text-white hover:border-[#6B46FF] " />
                                </div> : null}
                            <div className='flex items-center group overflow-hidden w-full sm:w-auto'>
                                <CTA
                                    text={btnText}
                                    href="#href"
                                    css="border group-hover:border-[#B9B9B9] bg-[#6B46FF] group-hover:bg-transparent transition-all ease-in-out duration-700 text-white group-hover:text-black border-[#6B46FF] overflow-hidden w-full" />
                                <div className='sm:block hidden'>
                                    <Link href="#href" className='w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full bg-[#6B46FF] flex items-center justify-center circleBtn group-hover:bg-transparent group-hover:border-[#B9B9B9] border border-[#6B46FF] group-hover:duration-700 ease-in-out duration-700 overflow-hidden'>
                                        <Image src={ArrowImage} alt='Arrow Image' width={16} height={16} className='group-hover:invert-[1] group-hover:duration-700 duration-700 ease-in-out' />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="col-span-12">
                        <Tabs defaultValue={tabContent[0]?.id} className={`${btn ? 'w-full xl:w-10/12' : 'xl:w-10/12'} mx-auto`}>
                            <TabsList className={`mx-auto flex items-center justify-center sm:justify-between relative ${btn ? "md:before:content-[''] md:before:absolute md:before:top-[50%] md:before:translate-y-[-50%] md:before:right-[120px] xxl:before:right-[122px] md:before:h-[70%] md:before:w-[1px] md:before:bg-[#c3c3c3]" : ""}`}>
                                {tabContent.map((item, index) => (
                                    <div key={index}>
                                        <TabsTrigger value={item.id} className='group'>
                                            {btn ?
                                                <div>
                                                    <Image src={item.tabIcon} alt='Icon1' className='mb-[10px] md:block hidden mx-auto' />
                                                </div> :
                                                <div className='w-[61px] h-[61px] border border-[#CBCBCB] rounded-full hidden md:flex items-center justify-center mb-[10px] group-hover:bg-[#6B46FF] group-hover:duration-700 duration-700 ease-in-out'>
                                                    <Image src={item.tabIcon} alt='Icon1' className='mx-auto group-hover:brightness-[100] group-hover:duration-700 duration-700 ease-in-out' />
                                                </div>
                                            }
                                            <span className='text-[14px] md:text-[16px] lg:text-[18px] text-[#525261] font-normal md:pt-3'>{item.text}</span>
                                        </TabsTrigger>
                                    </div>
                                ))}
                                {btn ?
                                    <div className="lg:block hidden px-2 lg:px-5 py-2">
                                        <Link href="#href">
                                            <div className="border border-[#e5e7e5] rounded-full w-[62px] h-[62px] flex items-center justify-center mb-[10px]">
                                                <Image src={Icon7} alt='Icon1' className='block mx-auto' />
                                            </div>
                                            <span className='text-[14px] md:text-[16px] lg:text-[18px] text-[#525261] font-normal md:pt-3'>View All</span>
                                        </Link>
                                    </div> : null
                                }
                            </TabsList>
                            {tabContent.map((item, index) => (
                                <TabsContent key={index} value={item.id}>
                                    <div className={`${btn ? 'mt-[-30px] sm:mt-[-70px] md:mt-[-100px] lg:mt-[-160px]' : 'mt-[-70px] sm:mt-[-130px] md:mt-[-140px] lg:mt-[-230px]'} relative z-[-1]`}>
                                        <Image src={item.tabImage} alt='Tab 1' />
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Banner
