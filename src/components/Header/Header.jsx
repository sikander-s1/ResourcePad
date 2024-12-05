"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from "framer-motion";
// ========== Components
import CTA from '../CTA/CTA'
import Sidebar from '../HeaderMenu/Sidebar/Sidebar'
// ========== Images
import Logo from 'media/logo.png'
import NavArrow from "media/icons/nav-arrow.png"

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

// DropDown
const Dropdown = ({ text }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openDropdown = () => setIsOpen(true);
    const closeDropdown = () => setIsOpen(false);

    return (
        <div className="relative inline-block text-left" onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
            <button className="text-[16px] lg:text-[18px] leading-[23px] text-[#292D49] font-medium focus:outline-none flex items-center gap-x-2">
                {text}
                <Image src={NavArrow} alt='Arrow' width={10} height={10} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute mt-2 w-48 bg-white shadow-lg rounded-md z-50"
                    >
                        <ul className="py-2">
                            <li>
                                <Link
                                    href="#sub-link1"
                                    className="block px-4 py-2 text-sm text-[#292D49] hover:bg-gray-100"
                                >
                                    Sub Link 1
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#sub-link2"
                                    className="block px-4 py-2 text-sm text-[#292D49] hover:bg-gray-100"
                                >
                                    Sub Link 2
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#sub-link3"
                                    className="block px-4 py-2 text-sm text-[#292D49] hover:bg-gray-100"
                                >
                                    Sub Link 3
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Header = () => {

    return (
        <motion.header variants={textVariants} initial="initial" animate="animate" className={`sm:pt-4 bg-white h-[90px] shadow-lg relative z-10 flex items-center lg:items-start lg:justify-start justify-center`}>
            <div className="container">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <div className="logo">
                            <Link href="/">
                                <Image src={Logo} alt='Logo' />
                            </Link>
                        </div>
                    </div>
                    <div className="sm:block hidden sm:col-span-5 md:col-span-7">
                        <ul className="lists items-center justify-center gap-x-3 lg:gap-x-8 md:flex hidden">
                            <li>
                                <Link href="#href" className='text-[16px] lg:text-[18px] leading-[28px] text-[#292D49] font-medium'>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Dropdown text="Services" />
                            </li>
                            <li className="relative inline-block text-left">
                                <Dropdown text="Products" />
                            </li>
                            <li>
                                <Link href="#href" className='text-[16px] lg:text-[18px] leading-[28px] text-[#292D49] font-medium'>
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                        <div className="flex items-center justify-end lg:justify-center 2xl:justify-end gap-2 lg:gap-4">
                            <div className='lg:block hidden'>
                                <CTA text="Start a Project" href="#href" css="border border-[#B9B9B9] hover:bg-[#000] transition-all ease-in-out duration-700 hover:text-white hover:border-[#000] mr-[25px]" />
                            </div>
                            <div>
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.header>
    )
}

export default Header