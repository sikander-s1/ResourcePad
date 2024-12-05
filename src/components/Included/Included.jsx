import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";

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
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 2,
            staggerChildren: 0.2,
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

const Included = ({ content }) => {

    const { title, desc, cardContent, css = 'pt-0' } = content;

    return (
        <section className={`pb-[50px] !pt-0 lg:!pt-[130px] lg:pb-[120px] ${css}`}>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <motion.div variants={textVariants} initial="initial" whileInView="animate" className="txt">
                            <motion.h2 variants={textVariants} className='mx-auto mb-1 md:mb-3 font-bold text-[#202020] text-[25px] text-center md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px]'>
                                {title}
                            </motion.h2>
                            <motion.p variants={textVariants} className='mb-5 md:mb-7 lg:mb-10 text-[#646474] text-[14px] text-center md:text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px]'>{desc}</motion.p>
                        </motion.div>
                    </div>
                </div>
                <motion.div variants={textVariantsTwo} initial="initial" whileInView="animate" className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {cardContent.map((data, index) => (
                        <motion.div variants={textVariantsTwo} key={index} className="border-[#E2E2E2] px-5 xl:px-10 py-6 sm:py-8 border rounded-[20px] card">
                            <div className="mb-3 lg:mb-7 image">
                                <Image src={data.icon} alt='Icon' />
                            </div>
                            <div className="txt">
                                <h3 className='mb-3 lg:mb-4 font-bold text-[18px] sm:text-[20px] xl:text-[25px] leading-[25px] xl:leading-[35px]'>
                                    {data.cardTitle}
                                </h3>
                                <p className='xl:w-11/12 font-normal text-[#646474] text-[14px] sm:text-[18px] xl:text-[20px]'>
                                    {data.cardDesc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

export default Included
