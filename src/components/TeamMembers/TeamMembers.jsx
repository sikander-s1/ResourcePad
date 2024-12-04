import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
// Slick Slider
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Images
import Profile1 from "media/Profile-1.png"
import Profile2 from "media/Profile-2.png"
import CardShade from "media/cardbgShade.png"
import Icon1 from "media/icons/linkedin.png"
import Icon2 from "media/icons/twitter.png"
import CardParticle from "media/cardParticle.png"

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

const TeamMembers = ({ content }) => {
    const { title, desc, TeamMembersSliders } = content

    var settings = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '45px',
        autoplaySpeed: 0,
        speed: 3500,
        slidesToShow: 3.06,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    centerPadding: '0px',
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2.6,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <section className='sm:pt-[30px] lg:pt-[60px] 3xl:pt-[120px] pb-[50px] xxl:pb-[90px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 xl:col-span-8 xxl:col-span-7">
                        <motion.div variants={textVariants}
                            initial="initial"
                            whileInView="animate" className="txt">
                            <motion.h2 variants={textVariants} className='text-[25px] md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px] text-[#202020] font-bold mb-3 text-center lg:text-left'>{title}</motion.h2>
                            <motion.p variants={textVariants} className='text-[#646474] text-[14px] md:text-[16px] lg:text-[19px] leading-[22px] md:leading-[26px] lg:leading-[29px] mb-6 lg:mb-12 text-center lg:text-left'>{desc}</motion.p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12">
                <div className="3xl:col-span-1"></div>
                <div className="col-span-12 3xl:col-span-11">
                    <Slider {...settings} className='2xl:pl-[55px] 3xl:pl-0'>
                        {TeamMembersSliders.map((data, index) => (
                            <div key={index} className='px-3 lg:px-4 2xl:px-0'>
                                <div className="group relative h-full">
                                    <div className="card1 relative xl:min-h-[500px] opacity-100 group-hover:opacity-0 duration-700 ease-in-out group-hover:duration-700 scale-100 group-hover:scale-90">
                                        <Image src={data.slideImage} alt='Profile' className='xl:h-full' />
                                        <div className="txt absolute bottom-[20px] xl:bottom-[30px] xxl:bottom-[20px] left-[20px]">
                                            <h3 className='text-white text-[22px] lg:text-[30px] leading-[32px] lg:leading-[40px] font-bold'>{data.slideTitle}</h3>
                                            <p className='text-white opacity-80 text-[14px] lg:text-[17px] font-extralight leading-[24px] lg:leading-[24px]'>{data.designation}</p>
                                        </div>
                                    </div>
                                    <div className="card2 w-full 2xl:w-11/12 mx-auto absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-700 ease-in-out group-hover:duration-700 scale-90 group-hover:scale-100 rounded-[20px]">
                                        <div className="relative rounded-[20px] border border-[#E2E2E2] min-h-full xl:min-h-[490px] xxl:min-h-[530px] 2xl:min-h-[580px]">
                                            <Image src={CardShade} alt='Card Shade' fill={true} className='object-center object-cover rounded-[20px] z-[-1]' />
                                            <div className="particle absolute right-0 top-[40%] translate-y-[-50%] z-[-1]">
                                                <Image src={CardParticle} alt='CardParticle' className='w-6/12 ml-auto' />
                                            </div>
                                            <div className="flex flex-col justify-between h-full min-h-full xl:min-h-[490px] xxl:min-h-[530px] 2xl:min-h-[580px]">
                                                <div className="social_icons flex items-center justify-end gap-x-3 px-6 pt-7">
                                                    <Link href="#href" className='w-[50px] h-[50px] border border-[#2020203c] flex items-center justify-center rounded-full'>
                                                        <Image src={Icon1} alt='LinkedIn' />
                                                    </Link>
                                                    <Link href="#href" className='w-[50px] h-[50px] border border-[#2020203c] flex items-center justify-center rounded-full'>
                                                        <Image src={Icon2} alt='Twitter' />
                                                    </Link>
                                                </div>
                                                <div className="txt px-5 lg:px-7 pt-8 pb-8">
                                                    <h3 className='text-[#202020] text-[22px] lg:text-[30px] leading-[32px] lg:leading-[40px] font-bold'>{data.slideTitle}</h3>
                                                    <p className='text-[#646474] opacity-80 text-[14px] lg:text-[17px] font-extralight leading-[24px] lg:leading-[24px] mb-4 lg:mb-10'>{data.designation}</p>
                                                    <p className='text-[#646474] text-[16px] xxl:text-[19px] font-normal leading-[24px]'>{data.slideDesc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default TeamMembers
