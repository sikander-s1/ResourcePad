import React from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
// Images
import FeaturesBg from "media/features-bg.png"
import line from "media/bg-line.png"
import Number1 from "media/icons/number1.png"
import Number2 from "media/icons/number2.png"
import Number3 from "media/icons/number3.png"

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

const Features = () => {
    return (
        <section className='pt-[20px] md:pt-[70px] pb-[70px] lg:pb-[130px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <motion.div variants={textVariants} initial="initial" whileInView="animate" className="txt">
                            <motion.h2 variants={textVariants} className='mx-auto mb-1 md:mb-3 font-bold text-[#202020] text-[25px] text-center md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px]'>Our three distinctive features</motion.h2>
                            <motion.p variants={textVariants} className='sm:mb-5 lg:mb-10 text-[#646474] text-[14px] text-center md:text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px]'>When she reached the first hills of the Italic Mountains had a last view back on the skyline.</motion.p>
                        </motion.div>
                    </div>
                </div>
                <div className="relative z-0 py-12 rounded-[20px] px-0 sm:px-[60px] xl:px-[120px] sm:h-[552px] sm:mt-[15px] lg:mt-[80px]">
                    <Image src={FeaturesBg} fill className='object-cover object-center !top-[20px] sm:!top-0 lg:!top-[-50%] lg:translate-y-[37%] z-[-1] rounded-[20px]' alt='Features Bg' />
                    <div className="grid grid-cols-12 relative gap-y-6">
                        <Image src={line} alt='Line' className='absolute left-0 right-0 mx-auto top-0 z-[-1] w-full lg:block hidden' />
                        <div className="col-span-12 lg:col-span-4">
                            <motion.div variants={textVariants} initial="initial" whileInView="animate" className="relative h-full px-4 xxl:px-6 pt-[50px] lg:pt-[60px] text-center">
                                <Image src={Number1} alt='Number' className='absolute top-0 lg:top-[-15px] left-0 right-0 mx-auto' />
                                <motion.h3 variants={textVariants} className='text-white text-[20px] xl:text-[25px] leading-[25px] xl:leading-[30px] font-bold mb-4'>
                                    Tailored Solutions
                                </motion.h3>
                                <motion.p variants={textVariants} className='text-[16px] xl:text-[18px] leading-[22px] xl:leading-[25px] text-white font-light opacity-80 xl:w-10/12 mx-auto'>We offer customized solutions tailored to your nonprofit’s unique needs, goals, and vision.</motion.p>
                            </motion.div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <motion.div variants={textVariants} initial="initial" whileInView="animate" className="relative h-full px-4 xxl:px-6 pt-[50px] lg:pt-[60px] text-center lg:mt-[4px] xl:mt-[15px] xxl:mt-[30px]">
                                <Image src={Number2} alt='Number' className='absolute bottom-[115px] sm:bottom-[95px] lg:bottom-[-55px] left-0 right-0 mx-auto' />
                                <motion.h3 variants={textVariants} className='text-white text-[20px] xl:text-[25px] leading-[25px] xl:leading-[30px] font-bold mb-4'>
                                    Non-Profit Expertise
                                </motion.h3>
                                <motion.p variants={textVariants} className='text-[16px] xl:text-[18px] leading-[22px] xl:leading-[25px] text-white font-light opacity-80 xl:w-10/12 mx-auto'>With deep nonprofit expertise, we create solutions that tackle unique challenges for greater impact and efficiency.</motion.p>
                            </motion.div>
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <motion.div variants={textVariants} initial="initial" whileInView="animate" className="relative h-full px-4 xxl:px-6 pt-[50px] lg:pt-[60px] text-center">
                                <Image src={Number3} alt='Number' className='absolute top-0 lg:top-[-15px] left-0 right-0 mx-auto' />
                                <motion.h3 variants={textVariants} className='text-white text-[20px] xl:text-[25px] leading-[25px] xl:leading-[30px] font-bold mb-4'>
                                    Cost-Effective Approach
                                </motion.h3>
                                <motion.p variants={textVariants} className='text-[16px] xl:text-[18px] leading-[22px] xl:leading-[25px] text-white font-light opacity-80 xl:w-11/12 mx-auto lg:px-2'>We provide affordable, value-driven packages that maximize your investment without sacrificing quality.</motion.p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features
