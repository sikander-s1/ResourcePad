"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// Images
import Arrow from "media/arrow.png";

const OurClient = ({ content }) => {
    const { title, desc, clientsSlider } = content;

    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalCards = clientsSlider.length;
    const isScrolling = useRef(false);
    const [allowPageScroll, setAllowPageScroll] = useState(false);
    const isSectionActive = useRef(false);

    const handleScroll = (event) => {
        if (!isSectionActive.current || allowPageScroll) return;

        event.preventDefault();

        if (isScrolling.current) return;
        isScrolling.current = true;

        const direction = event.deltaY > 0 ? 1 : -1;
        const nextIndex = currentIndex + direction;

        if (nextIndex >= 0 && nextIndex < totalCards) {
            setCurrentIndex(nextIndex);
        } else if (nextIndex >= totalCards) {
            setAllowPageScroll(true);
        }

        setTimeout(() => {
            isScrolling.current = false;
        }, 500);
    };

    useEffect(() => {
        const handleSectionIntersection = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    isSectionActive.current = true;
                    window.removeEventListener("wheel", handleScroll);
                    window.addEventListener("wheel", handleScroll, { passive: false });
                } else {
                    isSectionActive.current = false;
                    window.removeEventListener("wheel", handleScroll);
                }
            });
        };

        const observer = new IntersectionObserver(handleSectionIntersection, {
            root: null,
            threshold: 1, // Fully visible
        });

        if (containerRef.current) observer.observe(containerRef.current);

        return () => {
            window.removeEventListener("wheel", handleScroll);
            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [currentIndex, allowPageScroll]);

    return (
        <section className="pt-0 lg:pt-[60px] 3xl:pt-[140px] pb-[50px] sm:pb-[90px] 3xl:pb-[150px]">
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1, transition: { duration: 1 } }} className="txt xl:text-left text-center mb-4 md:mb-10 xxl:mb-16">
                            <motion.h2 className="text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px] text-[#202020] font-bold mb-1 xxl:mb-3">
                                {title}
                            </motion.h2>
                            <motion.p className="text-[#646474] text-[14px] md:text-[16px] lg:text-[20px] leading-[22px] md:leading-[26px] lg:leading-[30px] mb-4 lg:mb-8">
                                {desc}
                            </motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="Slider overflow-hidden relative" ref={containerRef}>
                <motion.div className="flex items-center"
                    style={{
                        transform: `translateX(-${currentIndex * 35}%)`,
                        transition: "transform 1s ease-in-out",
                    }}>
                    {clientsSlider.map((data, index) => (
                        <div key={index} className='px-2 min-w-full sm:min-w-[480px]'>
                            <div className="card h-full min-h-[420px] sm:min-h-[750px] flex flex-col justify-between relative rounded-[20px] overflow-hidden group">
                                <Image src={data.cardImage} alt='Card' fill className='object-cover object-center z-[-1] rounded-[20px]' />
                                <div className="carTop flex items-center justify-between pt-8 px-5 lg:px-10 pb-4">
                                    <div className="flex items-center gap-3">
                                        <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                            {data.btn1}
                                        </Link>
                                        <Link href="#href" className='text-white text-[14px] lg:text-[16px] font-medium border border-white rounded-[50px] w-[112px] h-[38px] flex items-center justify-center'>
                                            {data.btn2}
                                        </Link>
                                    </div>
                                    <div className="arrow">
                                        <Link href="#href" className='w-[38px] h-[38px] flex items-center justify-center border border-white rounded-[50px] circleBtn overflow-hidden'>
                                            <Image src={Arrow} alt='Arrow' width={12} height={12} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="card-bottom bg-black/15 backdrop-blur-lg pt-7 px-5 lg:px-10 pb-7 translate-y-[250px] sm:translate-y-[110px] lg:translate-y-[135px] group-hover:translate-y-0  group-hover:duration-700 duration-700 ease-in-out">
                                    <div className='border-b border-b-white border-opacity-60 pb-7'>
                                        <h3 className='text-[25px] font-semibold leading-normal text-white'>{data.cardTitle}</h3>
                                        <p className='text-white text-[14px] lg:text-[16px] leading-[24px]'>{data.cardDesc}</p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-y-5 pt-5">
                                        <div>
                                            <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>{data.counterTitle1}</h6>
                                            <p className='text-white text-[14px] lg:text-[16px] font-normal leading-[18px] lg:leading-[20px] opacity-80'>
                                                {data.counterDesc1}
                                            </p>
                                        </div>
                                        <div>
                                            <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>{data.counterTitle2}</h6>
                                            <p className='text-white text-[14px] lg:text-[16px] font-normal leading-[18px] lg:leading-[20px] opacity-80'>
                                                {data.counterDesc2}
                                            </p>
                                        </div>
                                        <div>
                                            <h6 className='text-[20px] font-semibold leading-normal text-white lg:mb-2'>{data.counterTitle3}</h6>
                                            <p className='text-white text-[14px] lg:text-[16px] font-normal leading-[18px] lg:leading-[20px] opacity-80'>
                                                {data.counterDesc3}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OurClient;
