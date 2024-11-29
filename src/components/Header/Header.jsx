"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu';
// ========== Components
import CTA from '../CTA/CTA'

// ========== Images
import Logo from 'media/assets/images/logo.png'
import Sidebar from '../HeaderMenu/Sidebar/Sidebar'

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

const Header = () => {

    return (
        <motion.header variants={textVariants} initial="initial" animate="animate" className={`sm:pt-4 bg-white h-[90px] shadow-lg relative flex items-center lg:items-start lg:justify-start justify-center`}>
            <div className="container">
                <div className="grid grid-cols-12 items-center">
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                        <div className="logo">
                            <Link href="#href">
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
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className='text-[16px] lg:text-[18px] leading-[28px] text-[#292D49] font-medium'>Services</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <NavigationMenuLink>
                                                    <div className="grid grid-cols-12 gap-5">
                                                        <div className="col-span-6">
                                                            <Link href="#href" className='text-[16px] lg:text-[18px] leading-[28px] text-[#292D49] font-medium'>
                                                                Services 1
                                                            </Link>
                                                        </div>
                                                        <div className="col-span-6">
                                                            <Link href="#href" className='text-[16px] lg:text-[18px] leading-[28px] text-[#292D49] font-medium'>
                                                                Services 2
                                                            </Link>
                                                        </div>
                                                        <div className="col-span-6">
                                                            <Link href="#href" className='text-[16px] lg:text-[18px] leading-[28px] text-[#292D49] font-medium'>
                                                                Services 3
                                                            </Link>
                                                        </div>
                                                        <div className="col-span-6">
                                                            <Link href="#href" className='text-[16px] lg:text-[18px] leading-[28px] text-[#292D49] font-medium'>
                                                                Services 4
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </NavigationMenuLink>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
                            </li>
                            <li>
                                <NavigationMenu>
                                    <NavigationMenuList>
                                        <NavigationMenuItem>
                                            <NavigationMenuTrigger className='text-[16px] lg:text-[18px] leading-[28px] text-[#292D49] font-medium'>Products</NavigationMenuTrigger>
                                            <NavigationMenuContent>
                                                <NavigationMenuLink className='text-[16px] lg:text-[18px] leading-[28px] text-[#292D49] font-medium'>Link</NavigationMenuLink>
                                            </NavigationMenuContent>
                                        </NavigationMenuItem>
                                    </NavigationMenuList>
                                </NavigationMenu>
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