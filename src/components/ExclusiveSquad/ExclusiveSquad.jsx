import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
// Images
import ExclusiveImage from "media/exclusiveimage.png"
import Exclusive1 from "media/exclusive1.png"
import Exclusive2 from "media/exclusive2.png"
import Exclusive3 from "media/exclusive3.png"

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

const TypingAnimation = ({ text }) => {
    // Splitting the text into an array of letters
    const letters = text.split('');

    // Variants for the animation
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.5, // Delay for each letter
                duration: 0.6,
            },
        }),
    };

    return (
        <motion.h3
            className="text-[#6B46FF] text-[135px] xl:text-[157px] leading-[160px] xl:leading-[170px] font-bold ml-[30px] text-center lg:text-start"
        >
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    custom={index}
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                >
                    {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
            ))}
        </motion.h3>
    );
};

const ExclusiveSquad = () => {
    return (
        <section className='pt-[30px] xl:pt-[60px] 2xl:pt-[180px] 2xl:pb-[180px] lg:pb-[120px] pb-[30px]'>
            <div className="container">
                <div className="grid grid-cols-12 sm:gap-x-10 xl:gap-x-0 items-center">
                    <div className="lg:block hidden lg:col-span-5">
                        <div className="txt">
                            <TypingAnimation text="Hello," />
                            <Image src={ExclusiveImage} alt='Exclusive Image' className='w-6/12 lg:w-full xl:w-auto mr-auto xl:ml-0 block' />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-7">
                        <motion.div variants={textVariants} initial="initial" whileInView="animate" className="txt">
                            <motion.h2 variants={textVariants} className='text-[25px] md:text-[45px] xl:text-[55px] leading-[35px] md:leading-[55px] xl:leading-[60px] xl:w-11/12 xxl:w-10/12 text-[#202020] font-bold mb-1 md:mb-3 xl:mb-7'>Your Exclusive Squad of
                                Software Specialists</motion.h2>
                            <motion.p variants={textVariants} className='text-[#646474] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[26px] lg:leading-[28px] mb-5 xl:mb-8 xxl:mb-14 xl:pr-8'>ResourcePad developers are expert problem-solvers, delivering high-quality, tailored solutions that integrate seamlessly with your team, ensuring fast, efficient, and on-time project delivery.</motion.p>
                        </motion.div>
                        <motion.ul variants={textVariants} initial="initial" whileInView="animate">
                            <motion.li variants={textVariants} className='flex items-start sm:items-center gap-x-3 lg:gap-x-7 mb-5 sm:mb-3 md:mb-8'>
                                <div className='w-[20%] sm:w-auto lg:w-[11%]'>
                                    <Image src={Exclusive1} alt='Exclusive' width={89} height={89} className='h-full w-full' />
                                </div>
                                <div className='lg:w-[89%]'>
                                    <h5 className='text-[#202020] text-[20px] leading-[25px] sm:leading-[30px] font-semibold mb-1'>Expertise Across Technologies</h5>
                                    <p className='text-[#646474] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[26px] lg:leading-[28px] xl:pr-8'>Our developers are proficient in a wide range of programming languages and frameworks, ensuring tailored solutions for your specific needs.</p>
                                </div>
                            </motion.li>
                            <motion.li variants={textVariants} className='flex items-start sm:items-center gap-x-3 lg:gap-x-7 mb-5 sm:mb-3 md:mb-8'>
                                <div className='w-[20%] sm:w-auto lg:w-[11%]'>
                                    <Image src={Exclusive2} alt='Exclusive' width={89} height={89} className='h-full w-full' />
                                </div>
                                <div className='lg:w-[89%]'>
                                    <h5 className='text-[#202020] text-[20px] leading-[25px] sm:leading-[30px] font-semibold mb-1'>Seamless Integration</h5>
                                    <p className='text-[#646474] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[26px] lg:leading-[28px] xl:pr-8'>They work as an extension of your team, quickly adapting to your workflows and project requirements for maximum efficiency.</p>
                                </div>
                            </motion.li>
                            <motion.li variants={textVariants} className='flex items-start sm:items-center gap-x-3 lg:gap-x-7 mb-5 sm:mb-3 md:mb-8'>
                                <div className='w-[20%] sm:w-auto lg:w-[11%]'>
                                    <Image src={Exclusive3} alt='Exclusive' width={89} height={89} className='h-full w-full' />
                                </div>
                                <div className='lg:w-[89%]'>
                                    <h5 className='text-[#202020] text-[20px] leading-[25px] sm:leading-[30px] font-semibold mb-1'>Quality & Reliability</h5>
                                    <p className='text-[#646474] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[26px] lg:leading-[28px] xl:pr-8'>We focus on delivering high-quality code, meeting deadlines, and ensuring the success of your project from start to finish.</p>
                                </div>
                            </motion.li>
                        </motion.ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ExclusiveSquad
