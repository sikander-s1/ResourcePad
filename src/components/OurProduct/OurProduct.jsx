"use client"
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CTA from '../CTA/CTA'
import ServiceSlider from './ServiceSlider'
import { motion } from "framer-motion";
// Images
import ArrowImage2 from "media/assets/images/arrow.png"
import ProductImage from "media/assets/images/productImage.png"
import ProductImageTwo from "media/assets/images/productImage2.png"
import ProductImageThree from "media/assets/images/productImage3.png"
import ProductImageFour from "media/assets/images/productImage4.png"
import ProductImageFive from "media/assets/images/productImage5.png"
import ProductImageSix from "media/assets/images/productImage6.png"
import ProductBg from "media/assets/images/process-bg.png"
import SliderShade from "media/assets/images/slider-shade.png"

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

const productsVariants = {
    initial: {
        y: 100,
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

const imageVariants = {
    initial: {
        scale: 0.8,
        opacity: 0,
    },
    animate: {
        scale: 1,
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

const OurProduct = ({ content }) => {
    const { join, bgImage } = content;

    const products = [
        {
            number: "01",
            title: "Ideate",
            desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
            image: ProductImage
        },
        {
            number: "02",
            title: "Design",
            desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
            image: ProductImageTwo
        },
        {
            number: "03", title: "Develop",
            desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
            image: ProductImageThree
        },
        {
            number: "04", title: "Test",
            desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
            image: ProductImageFour
        },
        {
            number: "05", title: "Launch",
            desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
            image: ProductImageFive
        },
        {
            number: "06", title: "Support",
            desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
            image: ProductImageSix
        },
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index'), 10);
                        setActiveIndex(index);
                    }
                });
            },
            { threshold: 1 } // Adjust threshold as needed
        );

        itemRefs.current.forEach((ref) => ref && observer.observe(ref));

        return () => {
            itemRefs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, []);
    return (
        <>
            <section className='pt-[50px] sm:pt-[80px] 2xl:py-[120px] relative'>
                <Image src={ProductBg} alt='Background Image' fill className='object-cover object-center z-[-1]' />
                <div className="container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12">
                            <div className="flex items-center justify-between mb-[20px] sm:mb-[50px] xl:mb-[90px]">
                                <motion.div variants={textVariants}
                                    initial="initial"
                                    whileInView="animate">
                                    <motion.h2 variants={textVariants} className='text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px] text-[#fff] font-bold mb-3 text-center sm:text-start'>Our Product <br className='lg:block hidden' />
                                        Development Process</motion.h2>
                                </motion.div>
                                <motion.div variants={textVariantsTwo}
                                    initial="initial"
                                    whileInView="animate" className='sm:flex items-center group hidden'>
                                    <CTA
                                        text="Hire Now"
                                        href="#href"
                                        css="border group-hover:border-[#B9B9B9] bg-[#6B46FF] group-hover:bg-transparent transition-all ease-in-out duration-700 text-white border-[#6B46FF] group-hover:text-white" />
                                    <div className='overflow-hidden'>
                                        <motion.a variants={textVariantsTwo} href="#href" className='w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full bg-[#6B46FF] flex items-center justify-center group-hover:border-white border border-[#6B46FF] group-hover:bg-transparent circleBtn overflow-hidden'>
                                            <Image src={ArrowImage2} alt='Arrow Image' width={16} height={16} className='group-hover:brightness-[100] group-hover:invert-0 transition-all ease-in-out duration-700' />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-7 xl:col-span-6">
                            <div className="h-full">
                                <motion.ul
                                    variants={productsVariants}
                                    initial="initial"
                                    whileInView="animate">
                                    {products.map((content, index) => (
                                        <motion.li
                                            key={index}
                                            data-index={index}
                                            ref={(el) => (itemRefs.current[index] = el)}
                                            className={`flex items-start gap-6 lg:gap-10 mb-[40px] lg:mb-[120px] ${activeIndex === index ? "opacity-100 text-white" : "opacity-50 text-gray-500"
                                                }`}>
                                            <div className="number sm:block hidden">
                                                <p className="text-[50px] lg:text-[70px] leading-[60px] lg:leading-normal font-semibold">{content.number}</p>
                                            </div>
                                            <div className="txt text-center sm:text-start">
                                                <h3 className=" text-[22px] sm:text-[35px] lg:text-[45px] font-semibold lg:mb-[10px]">{content.title}</h3>
                                                <p className="text-[14px] sm:text-[16px] xl:text-[18px] leading-[25px] xl:leading-[27px] font-light lg:w-9/12">{content.desc}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>
                        </div>
                        <motion.div variants={imageVariants}
                            initial="initial"
                            whileInView="animate" className="col-span-12 lg:col-span-5 xl:col-span-6 lg:block hidden">
                            <motion.div
                                variants={imageVariants}
                                className="sticky top-[100px]">
                                {activeIndex !== null && (
                                    <Image
                                        src={products[activeIndex].image}
                                        alt={`Image of ${products[activeIndex].title}`}
                                        className="mx-auto"
                                    />
                                )}
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
            {join ?
                <section className='pt-[50px] sm:pt-[80px] 2xl:pt-[120px] 2xl:pb-[250px] relative bg-black'>
                    <Image src={bgImage} alt="Bg Shadow" className="absolute top-[-200px] left-[100px] right-0 w-6/12 mx-auto z-[0]" />
                    <div className="container">
                        <div className="grid grid-cols-12">
                            <motion.div className="col-span-12 relative z-[9]" variants={textVariants}
                                initial="initial"
                                whileInView="animate">
                                <motion.h2 variants={textVariants} className='text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px] text-[#fff] font-bold mb-3 text-center lg:mb-8'>Join Us! Optimize customer <br className="lg:block hidden" /> relationships with our CRM.</motion.h2>
                                <motion.div variants={textVariantsTwo}
                                    initial="initial"
                                    whileInView="animate" className='sm:flex items-center justify-center group hidden'>
                                    <CTA
                                        text="Hire Now"
                                        href="#href"
                                        css="border group-hover:border-[#B9B9B9] bg-[#6B46FF] group-hover:bg-transparent transition-all ease-in-out duration-700 text-white border-[#6B46FF] group-hover:text-white" />
                                    <div className='overflow-hidden'>
                                        <motion.a variants={textVariantsTwo} href="#href" className='w-[50px] lg:w-[60px] h-[50px] lg:h-[60px] rounded-full bg-[#6B46FF] flex items-center justify-center group-hover:border-white border border-[#6B46FF] group-hover:bg-transparent circleBtn overflow-hidden'>
                                            <Image src={ArrowImage2} alt='Arrow Image' width={16} height={16} className='group-hover:brightness-[100] group-hover:invert-0 transition-all ease-in-out duration-700' />
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </section>
                : null}
            <section className='bg-black relative mb-[40px]'>
                <div className="absolute left-0 top-[-25px] w-6/12 min-h-[10px] max-h-[10px]">
                    <Image src={SliderShade} alt='shade' className='min-h-[145px] max-h-[145px]' />
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <ServiceSlider />
                    </div>
                </div>
            </section>
        </>
    )
}

export default OurProduct
