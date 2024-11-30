import React from 'react'
import { motion } from "framer-motion";
import BadgeSlider from './Slider/BadgeSlider'

const textVariants = {
    initial: {
        y: -60,
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

const BrandsSlider = ({ content }) => {
    const { padding } = content;
    return (
        <motion.section variants={textVariants} initial="initial" whileInView="animate" className={`${padding ? 'mt-[40px] 2xl:mt-[-30px]' : 'mt-[-40px] sm:mt-[-100px] lg:mt-[-155px] 2xl:mt-[-200px]'} relative lg:before:absolute lg:before:top-0 lg:before:left-0 lg:before:content-[''] lg:before:w-[200px] xl:lg:before:w-[460px] lg:before:h-[160px] lg:before:bg-[#ffffff7e] lg:before:z-[2] lg:after:absolute lg:after:top-0 lg:after:right-0 lg:after:content-[''] lg:after:w-[200px] xl:lg:after:w-[460px] lg:after:h-[160px] lg:after:bg-[#ffffff7e] lg:after:z-[2]`}>
            <div className="grid grid-cols-12">
                <div className="col-span-12">
                    <motion.div variants={textVariants} className="txt mb-[20px]">
                        <motion.p variants={textVariants} className='text-center text-[16px] sm:text-[20px] text-[#646474] leading-[26px] sm:leading-[30px]'>Used by leading brands and companies from across the globe</motion.p>
                    </motion.div>
                    <BadgeSlider />
                </div>
            </div>
        </motion.section>
    )
}

export default BrandsSlider
