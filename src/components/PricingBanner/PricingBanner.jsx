import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
// Images
import ArrowImage from "media/arrow.png"
import Icon1 from "media/icons/tab-icon1.png";
import Icon2 from "media/icons/tab-icon2.png";
import Arrow from "media/icons/arrow.png";
import Phone from "media/icons/phone-call.png";
import ArrowTwo from "media/icons/color-arrow.png";
import PhoneTwo from "media/icons/color-phone.png";
import Shade1 from "media/price-shade1.png"
import Shade2 from "media/price-shade2.png"
import BgImage from "media/bg-particle.png"

// const tabInfo = [
//     {
//         icon: Icon1,
//         label: "For businesses & enterprises",
//         index: 0,
//     },
//     {
//         icon: Icon2,
//         label: "For individuals & small teams",
//         index: 1,
//     },
// ];

// const tabContents = [
//     {
//         productList: [
//             "HRMS",
//             "CRM",
//             "Chat",
//             "Invoicing System (POS)",
//             "Donation Manage System",
//             "LMS",
//             "Hotel & Property System",
//         ],
//         pricingCards: [
//             {
//                 title: (
//                     <>
//                         Professional <br className="lg:block hidden" /> Customer Platform
//                     </>
//                 ),
//                 desc: "Comprehensive marketing, sales, customer service, content, and operations software",
//                 price: "1,299",
//                 isBtn: true,
//                 subTitle: "Includes 5 seats",
//                 subDisc: "Additional seats start at US$45/mo",
//             },
//             {
//                 title: (
//                     <>
//                         Enterprise Customer <br className="lg:block hidden" /> Platform
//                     </>
//                 ),
//                 desc: (
//                     <>
//                         Our most powerful marketing, sales, <br className="xxl:block hidden" /> customer
//                         service, content, and operations<br className="xxl:block hidden" /> software
//                     </>
//                 ),
//                 price: "4,300",
//                 isBtn: false,
//                 subTitle: "Includes 7 seats",
//                 subDisc: "Additional seats start at US$75/mo",
//             },
//         ],
//     },
//     {
//         productList: [
//             "Email Marketing",
//             "Social Media Tools",
//             "Customer Feedback System",
//         ],
//         pricingCards: [
//             {
//                 title: <>Starter Pack for Teams</>,
//                 desc: "Basic tools to manage team communication and tasks",
//                 price: "499",
//                 isBtn: true,
//                 subTitle: "Includes 3 seats",
//                 subDisc: "Additional seats start at US$25/mo",
//             },
//         ],
//     },
// ];

const PricingBanner = ({ content }) => {
    const { title, desc, isPrice, tabInfo, tabContents } = content;
    // Tabs
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const textRef = useRef();

    useEffect(() => {
        if (textRef.current) {
            const text = textRef.current.innerText;
            const rotatedText = text
                .split("")
                .map(
                    (char, i) =>
                        `<span style="display:inline-block; transform:rotate(${i * 10.3}deg)">${char}</span>`
                )
                .join("");
            textRef.current.innerHTML = rotatedText;
        }
    }, []);

    return (
        <section className="relative z-0 pt-[80px] xl:pt-[120px] pb-[90px]">
            {isPrice ?
                <>
                    <div className="top-0 left-0 z-[-1] absolute">
                        <Image src={Shade1} alt='Shade 1' />
                    </div>
                    <div className="top-[-200px] right-0 z-[-1] absolute">
                        <Image src={Shade2} alt='Shade 1' />
                    </div>
                </> :
                <>
                    <div className="top-0 right-[60px] z-[-1] absolute">
                        <Image src={BgImage} alt='Shade' className='lg:w-10/12 ml-auto' />
                    </div>
                </>}
            <div className="container relative z-0">
                <div className="grid grid-cols-12">
                    <div className="col-span-12 text-center">
                        {isPrice ? null :
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{
                                    duration: 1,
                                    staggerChildren: 0.1,
                                    ease: "easeInOut",
                                }}
                                className="w-[200px] h-[200px] rounded-full xl:flex items-center justify-center absolute right-[22px] top-[-90px] hidden">
                                <Link href="#href" className="w-[100px] h-[100px] absolute bg-[#6B46FF] rounded-full flex items-center justify-center circleBtn overflow-hidden z-[10]">
                                    <Image src={ArrowImage} alt="Circle Btn" width={25} height={25} />
                                </Link>
                                <div
                                    className="text text-[15px] text-black w-full h-full relative before:absolute before:content-[''] before:left-[36%] before:top-[15px] before:w-[5px] before:h-[5px] before:bg-black before:rounded-full after:absolute after:content-[''] after:left-[31%] after:bottom-[16px] after:w-[5px] after:h-[5px] after:bg-black after:rounded-full" ref={textRef}>
                                    <p>
                                        Contact Our experts <span className="!text-transparent"></span> Contact
                                        Our
                                    </p>
                                </div>
                            </motion.div>}
                        {isPrice ?
                            <p className="flex justify-center items-center bg-[#F4F1FF] mx-auto mb-6 rounded-full w-[120px] h-[45px] font-semibold text-[#6B46FF] text-[18px] leading-[28px]">
                                PRICING
                            </p> : null}
                        <h1 className="mb-4 font-bold text-[#202020] text-[30px] sm:text-[40px] md:text-[55px] lg:text-[65px] leading-[40px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px]">
                            {title}
                        </h1>
                        <p className="mx-auto mb-3 lg:mb-20 lg:w-10/12 xl:w-9/12 font-normal text-[#646474] text-[16px] md:text-[22px] leading-[23px] md:leading-[29px]">
                            {desc}
                        </p>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="col-span-12">
                        <div className="grid grid-cols-12">
                            <div className="col-span-4">
                                <div className="flex justify-center items-center border-[#C3CAC9] mx-auto border rounded-full lg:w-10/12 h-[65px] btn">
                                    <Link href="#href" className='flex items-center gap-x-3 font-normal text-[#202020] text-[18px] leading-[28px]'>
                                        <Image src={Arrow} alt='Arrow' />
                                        Back to Overview
                                    </Link>
                                </div>
                            </div>
                            <div className="col-span-8">
                                <ul className={`flex justify-between items-center gap-4 border-[#C3CAC9] mb-6 border rounded-full h-[65px]`}>
                                    {tabInfo.map((tab) => (
                                        <li
                                            key={tab.index}
                                            role="tab"
                                            aria-selected={activeTab === tab.index}
                                            className={`${isPrice ? 'px-4 lg:px-14' : 'w-full flex items-center justify-center px-4 lg:px-8'} cursor-pointer py-2 flex items-center gap-x-3 text-[20px] leading-[30px] h-full duration-700 ease-in-out ${activeTab === tab.index
                                                ? 'bg-[#6B46FF] rounded-full text-white font-normal'
                                                : 'text-[#202020] opacity-60 font-semibold'
                                                }`}
                                            onClick={() => handleTabClick(tab.index)}
                                        >
                                            <Image src={tab.icon} alt="Icon" className={`${activeTab === tab.index
                                                ? 'brightness-[100]'
                                                : ''
                                                }`} />
                                            {tab.label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="col-span-12">
                        <div className="mt-5 lg:mt-8 tab_content">
                            {isPrice ?
                                (
                                    tabContents[activeTab]?.productList && (
                                        <div className="gap-x-7 grid grid-cols-12">
                                            <div className="col-span-3">
                                                <div className="border-[#E2E2E2] px-7 py-14 border rounded-[20px] h-full product_list">
                                                    <h3 className="mb-5 lg:mb-10 font-bold text-[#202020] text-[30px] leading-[35px]">
                                                        Products List
                                                    </h3>
                                                    <ul>
                                                        {tabContents[activeTab].productList.map((list, index) => (
                                                            <li key={index} className="mb-2 group">
                                                                <div className="group-hover:bg-[#E7E4F5] px-4 py-2 rounded-full duration-700 group-hover:duration-700 ease-in-out">
                                                                    <Link href="#href" className="group-hover:text-[#6B46FF] opacity-60 group-hover:opacity-100 font-normal text-[#202020] text-[20px] leading-[30px]">
                                                                        {list}
                                                                    </Link>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-span-9">
                                                <div className="gap-x-7 grid grid-cols-12">
                                                    {tabContents[activeTab].pricingCards.map((priceData, index) => (
                                                        <div className="col-span-6" key={index}>
                                                            <div className="flex flex-col justify-between border-[#E2E2E2] bg-white shadow-[0_0px_8px_0px_rgba(0,0,0,0.07)] px-8 pt-9 pb-12 border rounded-[20px] h-full card">
                                                                <div className="card_top">
                                                                    <h3 className="mb-5 font-bold text-[#202020] text-[30px] leading-[35px]">
                                                                        {priceData.title}
                                                                    </h3>
                                                                    <p className="mb-7 font-normal text-[#646474] text-[20px] leading-[25px]">
                                                                        {priceData.desc}
                                                                    </p>
                                                                </div>
                                                                <div className="mb-8 pricing">
                                                                    <p className="inline-block font-bold text-[#6B46FF] text-[55px] leading-[60px]">
                                                                        <sup>$</sup>
                                                                        {priceData.price}
                                                                    </p>
                                                                    <span className="font-normal text-[#646474] text-[20px] leading-[25px]">
                                                                        /Month
                                                                    </span>
                                                                </div>
                                                                <div className="card_bottom">
                                                                    {priceData.isBtn ?
                                                                        <div className="flex justify-between items-center bg-[#ECECEC] rounded-full h-[55px] btns">
                                                                            <Link href="#href" className='flex justify-center items-center px-8 rounded-full w-full h-full font-semibold text-[#646474] text-[20px] text-center leading-[25px]'>
                                                                                Monthly
                                                                            </Link>
                                                                            <Link href="#href" className='flex justify-center items-center px-8 gredient_border rounded-full w-full h-full font-semibold text-[#202020] text-[20px] leading-[25px]'>
                                                                                Annually
                                                                            </Link>
                                                                        </div> : null}
                                                                    <h6 className="pt-4 lg:pt-8 pb-1 font-semibold text-[#202020] text-[25px]">
                                                                        {priceData.subTitle}
                                                                    </h6>
                                                                    <p className="mb-4 lg:mb-8 font-normal text-[#646474] text-[20px] leading-[25px]">
                                                                        {priceData.subDisc}
                                                                    </p>
                                                                    {priceData.isBtn ?
                                                                        <>
                                                                            <div className="flex items-center">
                                                                                <Link href="#href" className='flex justify-center items-center gap-x-3 bg-[#6B46FF] rounded-full w-full h-[65px] font-normal text-[18px] text-white leading-[25px]'>
                                                                                    <Image src={Phone} alt='Phone' />
                                                                                    Talk to Sales
                                                                                </Link>
                                                                                <Link href='#href' className='flex justify-center items-center bg-[#6B46FF] rounded-full w-[75px] h-[65px]'>
                                                                                    <Image src={ArrowTwo} alt='Arrow' className='brightness-[100]' />
                                                                                </Link>
                                                                            </div>
                                                                        </> :
                                                                        <>
                                                                            <div className="flex items-center">
                                                                                <Link href="#href" className='flex justify-center items-center gap-x-3 border-[#D8D8D8] bg-transparent border rounded-full w-full h-[65px] font-semibold text-[#6B46FF] text-[18px] leading-[25px]'>
                                                                                    <Image src={PhoneTwo} alt='Phone' />
                                                                                    Talk to Sales
                                                                                </Link>
                                                                                <Link href='#href' className='flex justify-center items-center border-[#D8D8D8] bg-transparent border rounded-full w-[75px] h-[65px]'>
                                                                                    <Image src={ArrowTwo} alt='Arrow' className='' />
                                                                                </Link>
                                                                            </div>
                                                                        </>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ) :
                                (
                                    tabContents[activeTab] && (
                                        <div>
                                            {tabContents[activeTab].map((item, index) => (
                                                <div key={index}>
                                                    <div className="gap-x-7 grid grid-cols-12 pt-[80px]">
                                                        <div className="col-span-12">
                                                            <h2 className='text-[#202020] text-[55px] leading-[65px] font-bold'>{item.subTitle}</h2>
                                                            <p className='text-[#646474] text-[20px] leading-[30px] font-light mb-4 lg:mb-12'>{item.subDesc}</p>
                                                        </div>
                                                    </div>
                                                    <div className={`grid ${item.css} gap-x-4`}>
                                                        {item.isBlog ?
                                                            (item.blogs && item.blogs.map((blog, index) => (
                                                                <div key={index}>
                                                                    <div className="card">
                                                                        <Image src={blog.image} alt='Blog' className='min-h-[315px]' />
                                                                        <h3 className='text-[#202020] text-[25px] leading-[35px] font-semibold mb-3 mt-3 lg:mt-6 lg:w-11/12'>{blog.blogTitle}</h3>
                                                                        <p className='text-[#646474] text-[18px] leading-[21px] font-normal'>{blog.blogDesc}</p>
                                                                    </div>
                                                                </div>
                                                            ))) :
                                                            (item.bookList.map((book, index) => (
                                                                <div>
                                                                    <div key={index}>
                                                                        <Image src={book} alt='Books' />
                                                                    </div>
                                                                </div>
                                                            )))}
                                                        <div className="btn">
                                                            <Link href="#href" className='text-[18px] text-[#202020] leading-[28px] font-medium border border-[#CCCCCC] h-[68px] w-[220px] flex items-center justify-center rounded-full mt-4 lg:mt-14'>
                                                                View More
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingBanner;
