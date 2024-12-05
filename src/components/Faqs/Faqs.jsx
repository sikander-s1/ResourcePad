"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// Images
import Plus from "media/icons/plus.png";
import Minus from "media/icons/minus.png";
import Slider from "media/faqs-shade.png";

const Faqs = ({ content }) => {
    const { accordionData, isprice } = content;

    const [activeIndex, setActiveIndex] = useState(null);

    const handleClick = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section className='sm:pt-[30px] lg:pt-[60px] 3xl:pt-[190px] pb-[50px] xxl:pb-[120px] relative z-0'>
            <div className="absolute top-0 left-0 right-0 mx-auto z-[-1]">
                <Image src={Slider} alt='Shade' />
            </div>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px] text-[#202020] font-bold mb-5 md:mb-8 xl:mb-12 text-center'>Frequently Asked Questions</h2>
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        {accordionData.map((item, index) => (
                            <div key={index} className={`border mb-3 lg:mb-[15px] xl:mb-[24px] rounded-[16px] shadow-[0_0px_8px_0px_rgba(0,0,0,0.07)] bg-white`}>
                                <div className="flex justify-between items-start md:items-center cursor-pointer px-4 py-5" onClick={() => handleClick(index)}>
                                    <div className="flex items-center lg:items-start gap-x-5">
                                        {isprice ?
                                            <Image src={item.icons} alt='Faqs Icons' className='w-[25px] h-[25px] lg:w-auto lg:h-auto md:block hidden' /> : null
                                        }
                                        <div>
                                            <h3
                                                className={`text-[17px] lg:text-[20px] xxl:text-[22px] leading-[20px] sm:leading-[23px] lg:leading-[32px] xxl:leading-[35px] font-semibold ${activeIndex === index ? "text-[#6B46FF]" : 'text-[#202020]'}`}>
                                                {item.question}
                                            </h3>
                                            <AnimatePresence>
                                                {activeIndex === index && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        transition={{ duration: 0.3 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <p className={`text-[#646474] text-[14px] sm:text-[16px] lg:text-[18px] xxl:text-[20px] leading-[20px] sm:leading-[23px] lg:leading-[24px] xxl:leading-[26px] font-normal mt-2 md:w-11/12 xxl:w-10/12`}>
                                                            {item.answer}
                                                        </p>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    </div>
                                    <span className={`ml-auto sm:ml-0 sm:mr-[7px] w-[10%] sm:w-auto`}>
                                        {activeIndex === index ? (
                                            <Image src={Minus} alt="Minus Icon" width={23} height={23} className='w-[40px] lg:w-auto lg:h-auto ml-auto' />
                                        ) : (
                                            <Image src={Plus} alt="Plus Icon" width={23} height={23} className='w-[20px] h-[20px] lg:w-auto lg:h-auto ml-auto' />
                                        )}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faqs;
