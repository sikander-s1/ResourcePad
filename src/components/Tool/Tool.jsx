"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion";
// Images
import ToolBg from "media/tool-bg.png";
import ToolBg2 from "media/tool-shade.png";
import Tool1 from "media/icons/tool1.png"
import Tool2 from "media/icons/tool2.png"
import Tool3 from "media/icons/tool3.png"
import Tool4 from "media/icons/tool4.png"
import Tool5 from "media/icons/tool5.png"
import Tool6 from "media/icons/tool6.png"
import Tool7 from "media/icons/tool7.png"
import Tool8 from "media/icons/tool8.png"
import Tool9 from "media/icons/tool9.png"
import Tool10 from "media/icons/tool10.png"
import Tool11 from "media/icons/tool11.png"
import Tool12 from "media/icons/tool12.png"

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

const tabInfo = [
    {
        label: "Front-end & Back-end",
        index: 0,
    },
    {
        label: "Mobile",
        index: 1,
    },
    {
        label: "Data",
        index: 2,
    },
    {
        label: "Cloud & Devops",
        index: 3,
    },
    {
        label: "QA",
        index: 4,
    },
    {
        label: "Support",
        index: 5,
    },
    {
        label: "Design",
        index: 6,
    },
];

const tabContents = [
    {
        tools: [
            Tool1,
            Tool2,
            Tool3,
            Tool4,
            Tool5,
            Tool6,
            Tool7,
            Tool8,
            Tool9,
            Tool10,
            Tool11,
            Tool12,
        ]
    },
    {
        tools: [
            Tool2,
            Tool1,
            Tool4,
            Tool3,
            Tool5,
            Tool9,
            Tool6,
            Tool7,
            Tool8,
            Tool10,
            Tool11,
            Tool12,
        ]
    },
    {
        tools: [
            Tool1,
            Tool2,
            Tool3,
            Tool4,
            Tool5,
            Tool6,
            Tool7,
            Tool8,
            Tool9,
            Tool10,
            Tool11,
            Tool12,
        ]
    },
    {
        tools: [
            Tool1,
            Tool2,
            Tool3,
            Tool4,
            Tool5,
            Tool6,
            Tool11,
            Tool12,
        ]
    },
    {
        tools: [
            Tool1,
            Tool2,
            Tool3,
            Tool4,
            Tool5,
            Tool6,
            Tool7,
            Tool8,
            Tool9,
            Tool10,
            Tool11,
            Tool12,
        ]
    },
    {
        tools: [
            Tool1,
            Tool3,
            Tool2,
            Tool5,
            Tool4,
            Tool6,
            Tool7,
            Tool9,
            Tool8,
            Tool11,
            Tool10,
            Tool12,
        ]
    },
    {
        tools: [
            Tool1,
            Tool2,
            Tool3,
            Tool4,
            Tool5,
            Tool6,
            Tool7,
            Tool8,
            Tool9,
            Tool10,
            Tool11,
            Tool12,
        ]
    },
];

const Tool = () => {
    // Tabs
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    return (
        <section className='pt-0 pb-[50px] sm:pb-[90px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <motion.div className="txt" variants={textVariants} initial="initial" whileInView="animate">
                            <motion.h2 variants={textVariants} className='text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px] text-[#202020] font-bold text-center mb-5 lg:mb-8 xxl:mb-14'>
                                Our tool stack <br className='lg:block hidden' />
                                To bring ideas into reality
                            </motion.h2>
                        </motion.div>
                    </div>
                </div>
                <div className="border border-[#E2E2E2] rounded-[20px] relative z-0 py-6 sm:py-10 lg:py-20 px-4 md:px-7 lg:px-12">
                    <Image src={ToolBg} alt='Tool BG' fill={true} className='object-cover object-center z-[-1] rounded-[20px]' />
                    <Image src={ToolBg2} alt='Tool BG' className='absolute right-0 bottom-0 z-[-1] opacity-60' />
                    <div className="grid grid-cols-12 gap-y-7 sm:gap-y-12">
                        {/* Tabs Navigation */}
                        <div className="col-span-12 lg:col-span-6">
                            <motion.div variants={textVariants} initial="initial" whileInView="animate" className="txt sm:text-start text-center">
                                <motion.h3 variants={textVariants} className='text-[#202020] text-[25px] sm:text-[30px] font-bold leading-[30px] sm:leading-[40px] mb-2 sm:mb-4'>
                                    Integrated with the tools you love
                                </motion.h3>
                                <motion.p variants={textVariants} className='text-[#646474] text-[16px] sm:text-[20px] leading-[22px] sm:leading-[30px] font-light xl:w-9/12 mb-4 md:mb-9'>
                                    When she reached the first hills of the Italic Mountains had a last view back on the skyline.
                                </motion.p>
                                <motion.ul variants={textVariantsTwo} initial="initial" whileInView="animate" className='flex flex-wrap xl:gap-x-4 gap-2 xl:gap-y-5 items-center justify-center sm:justify-start xl:w-10/12'>
                                    {tabInfo.map((tab) => (
                                        <motion.li variants={textVariantsTwo} key={tab.index} role="tab" aria-selected={activeTab === tab.index}
                                            className={`cursor-pointer px-2 sm:px-4 lg:px-6 py-1.5 sm:py-2.5 flex items-center gap-x-3 text-[14px] sm:text-[16px] md:text-[20px] leading-[20px] md:leading-[30px] h-full duration-700 ease-in-out border rounded-full font-normal ${activeTab === tab.index
                                                ? 'bg-gradient-to-br from-[#6B46FF] to-[#8E72FF] rounded-full text-white border-[#6B46FF] shadow-[0_7px_19px_rgba(151,165,255,1)]'
                                                : 'text-[#202020] opacity-60 border-[#DEDEDE]'}`} onClick={() => handleTabClick(tab.index)}>
                                            {tab.label}
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </motion.div>
                        </div>

                        {/* Tab Contents */}
                        <div className="col-span-12 lg:col-span-6 flex items-center justify-center sm:justify-start lg:justify-end">
                            <div className='flex flex-wrap gap-2 sm:gap-4 items-center justify-center sm:justify-start'>
                                {tabContents[activeTab]?.tools.map((tool, index) => (
                                    <motion.div variants={textVariantsTwo} initial="initial" whileInView="animate" key={index}>
                                        <motion.div variants={textVariantsTwo} className="border border-[#E2E2E2] rounded-[20px] w-[80px] sm:w-[90px] md:w-[110px] h-[80px] sm:h-[90px] md:h-[110px] bg-white flex items-center justify-center">
                                            <Image src={tool} alt='ToolIon' className='w-6/12 object-contain' />
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Tool;
