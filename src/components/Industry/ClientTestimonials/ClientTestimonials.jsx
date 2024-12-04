"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// Slick Slider
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// Images
import Client1 from "media/clients/testi1.png"
import Client2 from "media/clients/testi2.png"
import Client3 from "media/clients/testi3.png"
import Client4 from "media/clients/testi4.png"
import Client5 from "media/clients/testi5.png"
import Client6 from "media/clients/testi6.png"
import Client7 from "media/clients/testi7.png"
import Client8 from "media/clients/testi8.png"

const productsVariants = {
    initial: {
        y: 10,
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

const ClientTestimonials = () => {

    const slides = [
        {
            image: Client1,
            title: "Jase Reece",
            designation: "Manager",
            desc: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then'
        },
        {
            image: Client2,
            title: "Trace Ethan",
            designation: "Manager",
            desc: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown the headline alphabet Village and the subline of her own road, the Line Lane. pityful a rethoric question ran over her cheek, then A small river named duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences into your mouth One day however a small line of blind text by the name decided.'
        },
        {
            image: Client3,
            title: "Zackery Arthur",
            designation: "Manager",
            desc: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown the headline alphabet Village and the subline of her own road, the Line Lane. pityful a rethoric question ran over her cheek, then A small river named duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences into your mouth One day however.'
        },
        {
            image: Client4,
            title: "Derek Dillon",
            designation: "Manager",
            desc: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.'
        },
        {
            image: Client5,
            title: "Paul William",
            designation: "Manager",
            desc: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown the headline alphabet Village and the subline of her own road, the Line Lane. pityful a rethoric question ran over her cheek, then A small river named duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences into your mouth One day however.'
        },
        {
            image: Client6,
            title: "Naomi Skyla",
            designation: "Manager",
            desc: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown the headline alphabet Village and the subline of her own road, the Line Lane. pityful a rethoric question ran over her cheek, then a small river.'
        },
        {
            image: Client7,
            title: "Zariah Nola",
            designation: "Manager",
            desc: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown the headline alphabet Village and the subline of her own road, the Line Lane. pityful a rethoric question ran over her cheek, then a small river.'
        },
        {
            image: Client8,
            title: "Marlie Ana",
            designation: "Manager",
            desc: 'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown the headline alphabet Village and the subline of her own road, the Line Lane. pityful a rethoric question ran over her cheek, then a small river.'
        }
    ]

    var settingsOne = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        centerMode: true,
        centerPadding: '25px',
        autoplaySpeed: 100,
        speed: 10000,
        slidesToShow: 4.05,
        slidesToScroll: 1,
        cssEase: 'linear',
        rtl: true,
        responsive: [
            {
                breakpoint: 1301,
                settings: {
                    slidesToShow: 3.05,
                }
            },
            {
                breakpoint: 1099,
                settings: {
                    slidesToShow: 2.05,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    return (
        <section className='lg:py-[25px]'>
            <Slider {...settingsOne}>
                {slides.map((e, i) => (
                    <motion.div variants={productsVariants}
                        initial="initial"
                        whileInView="animate" key={i}>
                        <motion.div variants={productsVariants} className="rounded-[20px] px-[15px] 2xl:px-[26px] py-[20px] bg-white mx-[10px] my-[20px] custom_shadow">
                            <motion.div variants={productsVariants} className="flex items-center gap-4">
                                <motion.div variants={productsVariants} className="image">
                                    <Image src={e.image} alt="Profile" />
                                </motion.div>
                                <motion.div variants={productsVariants} className="txt">
                                    <motion.h6 variants={productsVariants} className="text-[17px] md:text-[20px] leading-[20px] md:leading-[24px] text-[#202020] font-semibold">
                                        {e.title}
                                    </motion.h6>
                                    <motion.p variants={productsVariants} className="text-[14px] md:text-[16px] leading-[22px] md:leading-[24px] text-[#9999A4] font-normal">{e.designation}</motion.p>
                                </motion.div>
                            </motion.div>
                            <motion.p variants={productsVariants} className="text-[#646474] text-[14px] md:text-[16px] leading-[18px] md:leading-[26px] xxl:leading-[24px] font-normal pt-4">{e.desc}</motion.p>
                        </motion.div>
                        <motion.div variants={productsVariants} className="rounded-[20px] px-[15px] 2xl:px-[26px] py-[20px] bg-white mx-[10px] my-[20px] custom_shadow lg:block hidden">
                            <motion.div variants={productsVariants} className="flex items-center gap-4">
                                <motion.div variants={productsVariants} className="image">
                                    <Image src={e.image} alt="Profile" />
                                </motion.div>
                                <motion.div variants={productsVariants} className="txt">
                                    <motion.h6 variants={productsVariants} className="text-[17px] md:text-[20px] leading-[20px] md:leading-[24px] text-[#202020] font-semibold">
                                        {e.title}
                                    </motion.h6>
                                    <motion.p className="text-[14px] md:text-[16px] leading-[18px] md:leading-[24px] xxl:leading-[24px] text-[#9999A4] font-normal">{e.designation}</motion.p>
                                </motion.div>
                            </motion.div>
                            <motion.p className="text-[#646474] text-[14px] md:text-[16px] leading-[24px] md:leading-[26px] xxl:leading-[24px] font-normal pt-4">{e.desc}</motion.p>
                        </motion.div>
                    </motion.div>
                ))}
            </Slider>
        </section>
    )
}

export default ClientTestimonials
