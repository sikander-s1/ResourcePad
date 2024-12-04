"use client"
import React from 'react'
import Image from 'next/image'
import ClientTestimonials from './ClientTestimonials/ClientTestimonials'
import { motion } from "framer-motion";
// Images
import Trustpilot from "media/trustpilot.png"
import Clutch from "media/clutch.png"
import Slide from "media/industry-slider.png"

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

const textVariantsTwo = {
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

const Industries = () => {
    return (
        <section className='sm:pt-[30px] lg:pt-[60px] 3xl:pt-[120px] pb-[50px] xxl:pb-[90px]'>
            <div className="container">
                <div className="flex items-center justify-between">
                    <motion.div variants={textVariants}
                        initial="initial"
                        whileInView="animate" className="txt lg:w-[60%] 2xl:w-auto">
                        <motion.h2 variants={textVariants} className='text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px] text-[#202020] font-bold mb-3 text-center lg:text-left'>Industry leaders use <br className='lg:block hidden' />
                            Resource Pad</motion.h2>
                        <motion.p variants={textVariants} className='text-[#646474] text-[14px] md:text-[16px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[30px] mb-4 lg:mb-8 lg:w-8/12 text-center lg:text-left'>Proud to serve as the innovation partner for industry leaders who have
                            experienced our expertise and excellence firsthand.</motion.p>
                    </motion.div>
                    <motion.div variants={textVariantsTwo}
                        initial="initial"
                        whileInView="animate" className="hidden lg:flex items-center gap-4">
                        <Image src={Trustpilot} alt='Trustpilot' width={200} />
                        <Image src={Clutch} alt='Clutchs' width={200} />
                    </motion.div>
                </div>
            </div>
            {/* Client Testimonials */}
            <div className="relative">
                <Image src={Slide} alt='Shade' className='absolute top-[50%] translate-y-[-50%] left-0 right-0' />
                <ClientTestimonials />
            </div>
            {/* Client Testimonials */}
        </section>
    )
}

export default Industries
