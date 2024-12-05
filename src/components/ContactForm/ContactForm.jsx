"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
// Images 
import ContactBg from "media/contact-bg.png"
import ContactBgTwo from "media/contact-bg-2.png"
import Plus from "media/icons/plus-icon.png"
import ContactImage from "media/contact-image.png"
import Icon1 from "media/icons/con-icon-1.png"
import Icon2 from "media/icons/con-icon-2.png"
import Icon3 from "media/icons/con-icon-3.png"
import Icon4 from "media/icons/con-icon-4.png"
import Icon5 from "media/icons/con-icon-5.png"
import Icon6 from "media/icons/con-icon-6.png"
import Form1 from "media/icons/form1.png"
import Form2 from "media/icons/form2.png"
import Form3 from "media/icons/form3.png"
import Form4 from "media/icons/form4.png"
import Form5 from "media/icons/form5.png"

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

const ContactForm = ({ content }) => {
    const { title, desc, inputs } = content

    const [active, setActive] = useState(false)

    const services = [
        {
            icon: Icon1,
            txt: "Website"
        },
        {
            icon: Icon2,
            txt: "Mobile App"
        },
        {
            icon: Icon3,
            txt: "Digital Product"
        },
        {
            icon: Icon4,
            txt: "Blockchain"
        },
        {
            icon: Icon5,
            txt: "Software Development"
        },
        {
            icon: Icon6,
            txt: "Ecommerce Development"
        }
    ]

    const toggleButton = () => setActive(!active)
    return (
        <section className='bg-black relative py-[70px] xl:py-[120px] z-0 overflow-hidden'>
            <Image src={ContactBg} alt='Background Particle' className='absolute right-0 top-0 z-[-1]' />
            {active ?
                <Image src={ContactBgTwo} alt='Background Particle' className='absolute left-0 bottom-[-150px] z-[-1] max-w-[900px] max-h-[900px] ml-auto' /> : null}
            <div className="container">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-12 lg:col-span-7">
                        <motion.div variants={textVariants}
                            initial="initial"
                            whileInView="animate" className="txt">
                            <motion.p variants={textVariants} className='text-[25px] sm:text-[30px] xl:text-[40px] xxl:text-[49px] leading-[30px] sm:leading-[40px] xl:leading-tight font-regular text-[#CCCCCC]'>Excited?</motion.p>
                            <motion.div variants={textVariants} className="flex items-center gap-4 lg:gap-5">
                                <motion.h2 variants={textVariants} className='text-[#886AFF] text-[30px] md:text-[45px] lg:text-[45px] xxl:text-[65px] leading-[35px] md:leading-[55px] xxl:leading-[75px] font-bold mb-[20px] xxl:mb-[10px]'>{title}</motion.h2>
                                {inputs ? null :
                                    <motion.button variants={textVariants} onClick={toggleButton} className="border border-[#444444] w-[50px] lg:w-[70px] h-[50px] lg:h-[70px] rounded-full flex items-center justify-center mt-[-9px] group">
                                        <Image src={Plus} alt='Plus Icon' className={`group-hover:rotate-45 duration-700 group-hover:duration-700 ease-in-out w-6 lg:w-8 lg:h-8 h-6 ${active ? 'rotate-45' : ''}`} />
                                    </motion.button>
                                }
                            </motion.div>
                            <motion.p variants={textVariants} className='text-[#CCCCCC] text-[14px] md:text-[16px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[30px] font-light lg:w-10/12'>{desc}</motion.p>
                            {inputs ?
                                <form className='bg-white/10 h-[65px] rounded-full mt-5 lg:mt-10 flex flex-wrap items-center justify-between gap-3 lg:w-10/12 mb-[40px]'>
                                    <input type="email" placeholder='Email address' className='text-[18px] sm:text-[20px] font-light text-[#9F9FA9] bg-transparent h-full focus:outline-none pl-[30px]' required />
                                    <button className='text-[18px] sm:text-[20px] text-white font-normal w-full sm:w-[215px] bg-[#6B46FF] h-[65px] rounded-full'>
                                        Subscribe
                                    </button>
                                </form>
                                : null}
                        </motion.div>
                    </div>
                    <motion.div variants={textVariantsTwo} initial="initial" whileInView="animate" className="col-span-12 lg:col-span-5 lg:block hidden">
                        <Image src={ContactImage} alt='Laptop Image' className='w-10/12 ml-auto mr-auto 2xl:mr-0' />
                    </motion.div>
                </div>
                {active ?
                    <motion.div variants={textVariantsTwo} initial="initial" whileInView="animate" className={`grid grid-cols-12 gap-y-6 pt-[60px] lg:pt-[90px] xl:pt-[150px] pb-[50px] xl:pb-[90px]`}>
                        <motion.div variants={textVariantsTwo} className="col-span-12 lg:col-span-5 xxl:col-span-4">
                            <motion.div variants={textVariantsTwo} className="services">
                                <motion.h6 variants={textVariantsTwo} className='text-[20px] md:text-[30px] leading-[30px] md:leading-[40px] font-semibold text-white mb-[15px]'>
                                    Services you are looking for
                                </motion.h6>
                                <motion.ul variants={textVariantsTwo} className='flex items-center gap-y-5 gap-x-2 sm:gap-x-4 flex-wrap'>
                                    {services.map((data, i) => (
                                        <motion.li variants={textVariantsTwo} key={i} className='group'>
                                            <div className='flex items-center gap-3 border border-[#444444] px-1 lg:px-2 py-1 lg:py-2 rounded-full group-hover:bg-[#886AFF] duration-700 ease-in-out'>
                                                <Image src={data.icon} alt='Icon' />
                                                <p className='text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-white font-light opacity-50 pr-3 group-hover:opacity-100 duration-700 ease-in-out'>{data.txt}</p>
                                            </div>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        </motion.div>
                        <div className="col-span-1 xxl:col-span-2"></div>
                        <motion.div variants={textVariantsTwo} className="col-span-12 lg:col-span-6 xxl:col-span-6">
                            <motion.div variants={textVariantsTwo} className="grid grid-cols-12 gap-y-6 gap-x-5">
                                <motion.div variants={textVariantsTwo} className="col-span-12 sm:col-span-6">
                                    <motion.div variants={textVariantsTwo} className="bg-white/10 backdrop-blur-xl py-4 px-4 flex items-center gap-3 rounded-[50px]">
                                        <Image src={Form1} alt='Icon' />
                                        <input type="text" name='name' placeholder='John Fletcher' className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-normal placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-normal bg-transparent w-full focus:outline-none text-white' />
                                    </motion.div>
                                </motion.div>
                                <motion.div variants={textVariantsTwo} className="col-span-12 sm:col-span-6">
                                    <motion.div variants={textVariantsTwo} className="bg-white/10 backdrop-blur-xl py-4 px-4 flex items-center gap-3 rounded-[50px]">
                                        <Image src={Form2} alt='Icon' />
                                        <input type="email" name='email' placeholder='Work Email' className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-normal placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-normal bg-transparent w-full focus:outline-none text-white' />
                                    </motion.div>
                                </motion.div>
                                <motion.div variants={textVariantsTwo} className="col-span-12 sm:col-span-6">
                                    <motion.div variants={textVariantsTwo} className="bg-white/10 backdrop-blur-xl py-4 px-4 flex items-center gap-3 rounded-[50px]">
                                        <Image src={Form3} alt='Icon' />
                                        <input type="number" name='number' placeholder='Mobile' className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-normal placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-normal bg-transparent w-full focus:outline-none text-white' />
                                    </motion.div>
                                </motion.div>
                                <motion.div variants={textVariantsTwo} className="col-span-12 sm:col-span-6">
                                    <motion.div variants={textVariantsTwo} className="bg-white/10 backdrop-blur-xl py-4 px-4 flex items-center gap-3 rounded-[50px]">
                                        <Image src={Form4} alt='Icon' />
                                        <input type="text" name='companyname' placeholder='Company Name' className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-normal placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-normal bg-transparent w-full focus:outline-none text-white' />
                                    </motion.div>
                                </motion.div>
                                <motion.div variants={textVariantsTwo} className="col-span-12">
                                    <motion.div variants={textVariantsTwo} className="bg-white/10 backdrop-blur-xl py-4 px-4 flex items-start gap-3 rounded-[20px] h-[255px]">
                                        <Image src={Form5} alt='Icon' />
                                        <textarea name='message' placeholder='Message' className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-normal placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-normal bg-transparent w-full focus:outline-none text-white h-full' />
                                    </motion.div>
                                    <motion.div variants={textVariantsTwo} className="txt">
                                        <p className='text-[15px] font-normal leading-[24px] text-[#888888] py-[20px] text-center sm:text-left'>By registering, you agree to the processing of your personal data by Resource Pad as described in the
                                            Privacy Statement.</p>
                                    </motion.div>
                                    <motion.div variants={textVariantsTwo} className="btn">
                                        <button type='submit' className='text-[20px] text-white font-semibold w-full bg-[#6B46FF] h-[62px] rounded-full'>
                                            Submit Now
                                        </button>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    </motion.div> : null}
            </div>
        </section>
    )
}

export default ContactForm