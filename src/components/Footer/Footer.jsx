"use client"
import React from 'react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { motion } from "framer-motion";
import Link from 'next/link'
import Image from 'next/image'
// Images
import Logo from "media/assets/images/footerlogo.png"
import Facebook from "media/assets/images/icons/facebook.svg";
import Instagram from "media/assets/images/icons/instagram.svg";
import Twitter from "media/assets/images/icons/twitter.svg";
import Linkedin from "media/assets/images/icons/linkedin.svg";
import PhoneCall from "media/assets/images/icons/phone-call.png"
import Email from "media/assets/images/icons/email.png"
import LocationDot from "media/assets/images/icons/location-dot.png"
import Truested from "media/assets/images/truestedImage.png"
import Truested2 from "media/assets/images/truestedImage2.png"

const textVariants = {
    initial: {
        x: -500,
        opacity: 0,
    },
    animate: {
        x: 0,
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
const variants = {
    open: {
        transition: {
            staggerChildren: 0.1,
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1,
        },
    },
};
const itemVariants = {
    open: {
        y: 0,
        opacity: 1,
    },
    closed: {
        y: 50,
        opacity: 0,
    },
};

const Footer = () => {
    return (
        <>
            <section className='bg-black pb-[70px] lg:pb-[100px]'>
                <div className="container">
                    <div className="grid grid-cols-12 pb-[50px]">
                        <div className="col-span-12">
                            <div className="flex flex-col lg:flex-row gap-y-10 items-center justify-between">
                                <motion.div variants={textVariants}
                                    initial="initial"
                                    whileInView="animate" className="listItems">
                                    <motion.ul variants={textVariants} className="lists items-center justify-center gap-x-3 lg:gap-x-9 flex">
                                        <motion.li variants={textVariants}>
                                            <motion.a variants={textVariants} href="#href" className='text-[16px] lg:text-[18px] leading-[28px] text-white font-[300] tracking-[1px]'>
                                                About
                                            </motion.a>
                                        </motion.li>
                                        <motion.li variants={textVariants}>
                                            <NavigationMenu>
                                                <NavigationMenuList>
                                                    <NavigationMenuItem>
                                                        <NavigationMenuTrigger className='text-[16px] lg:text-[18px] leading-[28px] text-white font-[300] tracking-[1px]'>Services</NavigationMenuTrigger>
                                                        <NavigationMenuContent>
                                                            <NavigationMenuLink>
                                                                <div className="grid grid-cols-12 gap-5">
                                                                    <div className="col-span-6">
                                                                        <Link href="#href" className='text-[16px] lg:text-[18px] leading-[28px] text-white font-[300] tracking-[1px]'>
                                                                            Services 1
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-span-6">
                                                                        <Link href="#href" className='text-[16px] lg:text-[18px] leading-[28px] text-white font-[300] tracking-[1px]'>
                                                                            Services 2
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-span-6">
                                                                        <Link href="#href" className='text-[16px] lg:text-[18px] leading-[28px] text-white font-[300] tracking-[1px]'>
                                                                            Services 3
                                                                        </Link>
                                                                    </div>
                                                                    <div className="col-span-6">
                                                                        <Link href="#href" className='text-[16px] lg:text-[18px] leading-[28px] text-white font-[300] tracking-[1px]'>
                                                                            Services 4
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </NavigationMenuLink>
                                                        </NavigationMenuContent>
                                                    </NavigationMenuItem>
                                                </NavigationMenuList>
                                            </NavigationMenu>
                                        </motion.li>
                                        <motion.li variants={textVariants}>
                                            <NavigationMenu>
                                                <NavigationMenuList>
                                                    <NavigationMenuItem>
                                                        <NavigationMenuTrigger className='text-[16px] lg:text-[18px] leading-[28px] text-white font-[300] tracking-[1px]'>Products</NavigationMenuTrigger>
                                                        <NavigationMenuContent>
                                                            <NavigationMenuLink className='text-[16px] lg:text-[18px] leading-[28px] text-white font-[300] tracking-[1px]'>Link</NavigationMenuLink>
                                                        </NavigationMenuContent>
                                                    </NavigationMenuItem>
                                                </NavigationMenuList>
                                            </NavigationMenu>
                                        </motion.li>
                                        <motion.li variants={textVariants}>
                                            <motion.a variants={textVariants} href="#href" className='text-[16px] lg:text-[18px] leading-[28px] text-white font-[300] tracking-[1px]'>
                                                Contact
                                            </motion.a>
                                        </motion.li>
                                    </motion.ul>
                                </motion.div>
                                <motion.div variants={variants} whileInView="animate" className="socialIcons flex items-center justify-center gap-x-10">
                                    <motion.a variants={itemVariants}
                                        whileInView="animate"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }} href="#href">
                                        <Image src={Facebook} alt='Facebook' />
                                    </motion.a>
                                    <motion.a variants={itemVariants}
                                        whileInView="animate"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }} href="#href">
                                        <Image src={Instagram} alt='Facebook' />
                                    </motion.a>
                                    <motion.a variants={itemVariants}
                                        whileInView="animate"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }} href="#href">
                                        <Image src={Twitter} alt='Facebook' />
                                    </motion.a>
                                    <motion.a variants={itemVariants}
                                        whileInView="animate"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }} href="#href">
                                        <Image src={Linkedin} alt='Facebook' />
                                    </motion.a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-t-[#ffffff25] pt-[50px] lg:pt-[90px]">
                        <div className="grid grid-cols-12 gap-y-4 sm:gap-y-10">
                            <motion.div variants={textVariantsTwo}
                                initial="initial"
                                whileInView="animate" className="col-span-12 lg:col-span-3">
                                <motion.div variants={textVariantsTwo} className="logo">
                                    <motion.a variants={textVariantsTwo} href="#href" className='mb-[20px] lg:mb-[35px] block'>
                                        <Image src={Logo} alt='Logo' className='mx-auto lg:ml-0 block' />
                                    </motion.a>
                                    <motion.p variants={textVariantsTwo} className='text-[16px] xl:text-[20px] font-extralight text-white opacity-80 leading-[26px] xl:leading-[28px] xl:pr-[30px] text-center lg:text-left'>When she reached the first hills of
                                        the Italic Mountains, she had a last
                                        view back on the skyline.</motion.p>
                                </motion.div>
                            </motion.div>
                            <motion.div variants={textVariantsTwo}
                                initial="initial"
                                whileInView="animate" className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3">
                                <motion.div variants={textVariantsTwo} className="flex flex-col lg:items-center pr-[20px] xl:pr-[60px]">
                                    <motion.div variants={textVariantsTwo}>
                                        <motion.h6 variants={textVariantsTwo} className='text-[20px] sm:text-[25px] font-medium leading-normal text-white mb-[10px] sm:mb-[20px] md:mb-[35px]'>Learn More</motion.h6>
                                        <motion.ul variants={textVariantsTwo}>
                                            <motion.li variants={textVariantsTwo} className='mb-5'>
                                                <motion.a variants={textVariantsTwo} href="#href" className='text-[#E6EAE6] opacity-80 text-[16px] xl:text-[18px] leading-[26px] xl:leading-[28px] font-extralight'>
                                                    Open Source HRMS
                                                </motion.a>
                                            </motion.li>
                                            <motion.li variants={textVariantsTwo} className='mb-5'>
                                                <motion.a variants={textVariantsTwo} href="#href" className='text-[#E6EAE6] opacity-80 text-[16px] xl:text-[18px] leading-[26px] xl:leading-[28px] font-extralight'>
                                                    CS & Support
                                                </motion.a>
                                            </motion.li>
                                            <motion.li variants={textVariantsTwo} className='mb-5'>
                                                <motion.a variants={textVariantsTwo} href="#href" className='text-[#E6EAE6] opacity-80 text-[16px] xl:text-[18px] leading-[26px] xl:leading-[28px] font-extralight'>
                                                    Our Partners
                                                </motion.a>
                                            </motion.li>
                                            <motion.li variants={textVariantsTwo} className='mb-5'>
                                                <motion.a variants={textVariantsTwo} href="#href" className='text-[#E6EAE6] opacity-80 text-[16px] xl:text-[18px] leading-[26px] xl:leading-[28px] font-extralight'>
                                                    Testimonials
                                                </motion.a>
                                            </motion.li>
                                            <motion.li variants={textVariantsTwo} className='mb-5'>
                                                <motion.a variants={textVariantsTwo} href="#href" className='text-[#E6EAE6] opacity-80 text-[16px] xl:text-[18px] leading-[26px] xl:leading-[28px] font-extralight'>
                                                    HRM API
                                                </motion.a>
                                            </motion.li>
                                        </motion.ul>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                            <motion.div variants={textVariantsTwo}
                                initial="initial"
                                whileInView="animate" className="col-span-12 sm:col-span-6 md:col-span-5 lg:col-span-3">
                                <motion.div variants={textVariantsTwo}>
                                    <motion.h6 variants={textVariantsTwo} className='text-[20px] sm:text-[25px] font-medium leading-normal text-white sm:mb-[20px] mb-[10px] md:md:mb-[35px]'>
                                        Contact
                                    </motion.h6>
                                    <motion.ul variants={textVariantsTwo} className='w-full xl:w-8/12'>
                                        <motion.li variants={textVariantsTwo} className='mb-5 md:mb-8'>
                                            <motion.a variants={textVariantsTwo} href="tel:(123) 456-7890" className='text-[#E6EAE6] opacity-80 text-[16px] xl:text-[18px] leading-[26px] xl:leading-[28px] font-extralight flex items-center gap-x-3'>
                                                <Image src={PhoneCall} alt='Phone Call' />
                                                <span>(123) 456-7890</span>
                                            </motion.a>
                                        </motion.li>
                                        <motion.li variants={textVariantsTwo} className='mb-5 md:mb-8'>
                                            <motion.a variants={textVariantsTwo} href="mailto:resourcepad@mail.com" className='text-[#E6EAE6] opacity-80 text-[16px] xl:text-[18px] leading-[26px] xl:leading-[28px] font-extralight flex items-center gap-x-3'>
                                                <Image src={Email} alt='Phone Call' />
                                                <span>resourcepad@mail.com</span>
                                            </motion.a>
                                        </motion.li>
                                        <motion.li variants={textVariantsTwo} className='mb-5 md:mb-8'>
                                            <motion.a variants={textVariantsTwo} href="Unit 5-15 brownridge road office #204 Georgetown Ontario L7G0C6" className='text-[#E6EAE6] opacity-80 text-[16px] xl:text-[18px] leading-[26px] xl:leading-[28px] font-extralight flex items-start gap-x-3' target='_blank'>
                                                <Image src={LocationDot} alt='Phone Call' className='pt-1' />
                                                <span className='w-10/12 xl:w-full'>Unit 5-15 brownridge
                                                    road office #204
                                                    Georgetown Ontario
                                                    L7G0C6</span>
                                            </motion.a>
                                        </motion.li>
                                    </motion.ul>
                                </motion.div>
                            </motion.div>
                            <motion.div variants={textVariantsTwo}
                                initial="initial"
                                whileInView="animate" className="col-span-12 md:col-span-4 lg:col-span-3">
                                <motion.h6 variants={textVariantsTwo} h6 className='text-[20px] sm:text-[25px] font-medium leading-normal text-white sm:mb-[20px] mb-[10px] md:mb-[35px] text-center md:text-left'>
                                    Loved and Trusted
                                </motion.h6>
                                <motion.ul variants={textVariantsTwo}>
                                    <motion.li variants={textVariantsTwo} className='mb-8'>
                                        <Image src={Truested} alt='Truested' className='mx-auto md:ml-0' />
                                    </motion.li>
                                    <motion.li variants={textVariantsTwo}>
                                        <Image src={Truested2} alt='Truested' className='mx-auto md:ml-0' />
                                    </motion.li>
                                </motion.ul>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Copy Right */}
            <div className="copyright bg-black pb-[30px]">
                <p className='text-center text-[18px] leading-[28px] text-white opacity-45'>Copyright © 2024 Resource Pad. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
