import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion";
// Images
import CheckIcon from "media/icons/check-icon.png"

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

const OurPlans = () => {
    return (
        <section className='pt-[80px]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <motion.div variants={textVariants} initial="initial" whileInView="animate" className="txt">
                            <motion.h2 variants={textVariants} className='mx-auto mb-1 md:mb-3 font-bold text-[#202020] text-[25px] text-center md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px]'>Compare our Plans</motion.h2>
                            <motion.p variants={textVariants} className='mb-5 lg:mb-10 text-[#646474] text-[14px] text-center md:text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px]'>Everything you need to scale your business, bundled together and discounted.</motion.p>
                        </motion.div>
                    </div>
                </div>
                <div className="border-[#E2E2E2] pt-5 border rounded-[20px] overflow-x-auto clientScroll w-full">
                    <motion.table variants={textVariants} initial="initial" whileInView="animate" className="w-full border-collapse">
                        <motion.thead variants={textVariants}>
                            <tr>
                                <th className="sm:text-left px-7 py-3 bg-white font-bold text-[#202020] text-[17px] sm:text-[20px] xl:text-[30px] leading-[25px] xl:leading-[35px] text-center ">
                                    Streamline Your HR <br /> with the Right Plan
                                </th>
                                <th className="bg-white">
                                    <div className="flex flex-col justify-center items-center mb-6">
                                        <div className='mb-1 xl:mb-3'>
                                            <p className="inline-block font-bold text-[#202020] text-[20px] xl:text-[30px] leading-[25px] xl:leading-[35px]"><sup>$</sup>1,299</p>
                                            <span className="font-normal text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px]">/Month</span>
                                        </div>
                                        <Link href="#href" className='bg-[#6B46FF] px-8 py-3 rounded-full font-medium text-[16px] xl:text-[20px] text-white leading-[22px] xl:leading-[25px]'>
                                            Professional
                                        </Link>
                                    </div>
                                </th>
                                <th className="bg-white">
                                    <div className="flex flex-col justify-center items-center mb-6">
                                        <div className='mb-1 xl:mb-5'>
                                            <p className="inline-block font-bold text-[#202020] text-[20px] xl:text-[30px] leading-[25px] xl:leading-[35px]"><sup>$</sup>1,299</p>
                                            <span className="font-normal text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px]">/Month</span>
                                        </div>
                                        <Link href="#href" className='border-[#D8D8D8] bg-white px-8 py-3 border rounded-full font-medium text-[#787979] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px]'>
                                            Enterprise
                                        </Link>
                                    </div>
                                </th>
                            </tr>
                        </motion.thead>
                        <motion.tbody variants={textVariants}>
                            <tr className='h-[65px]'>
                                <td className="px-2 sm:px-9 py-3 bg-[#F9F8FF] font-medium text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px] text-center sm:text-left">
                                    Custom properties
                                </td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-[#F9F8FF]">
                                    <Image src={CheckIcon} alt="CheckIcon" className="block mx-auto" />
                                </td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-[#F9F8FF]">
                                    <Image src={CheckIcon} alt="CheckIcon" className="block mx-auto" />
                                </td>
                            </tr>
                            <tr className='h-[65px]'>
                                <td className="px-2 sm:px-9 py-3 bg-white font-medium text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px] text-center sm:text-left">
                                    HRM Exports
                                </td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-white">
                                    <Image src={CheckIcon} alt="CheckIcon" className="block mx-auto" />
                                </td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-white">
                                    <Image src={CheckIcon} alt="CheckIcon" className="block mx-auto" />
                                </td>
                            </tr>
                            <tr className='h-[65px]'>
                                <td className="px-2 sm:px-9 py-3 bg-[#F9F8FF] font-medium text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px] text-center sm:text-left">
                                    Conversational bots
                                </td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-[#F9F8FF] font-medium text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px]">
                                    Additional features
                                </td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-[#F9F8FF] font-medium text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px]">
                                    Additional features
                                </td>
                            </tr>
                            <tr className='h-[65px]'>
                                <td className="px-2 sm:px-9 py-3 bg-white font-medium text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px] text-center sm:text-left">
                                    Custom user permissions
                                </td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-white">
                                    <Image src={CheckIcon} alt="CheckIcon" className="block mx-auto" />
                                </td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-white">
                                    <Image src={CheckIcon} alt="CheckIcon" className="block mx-auto" />
                                </td>
                            </tr>
                            <tr className='h-[65px]'>
                                <td className="px-2 sm:px-9 py-3 bg-[#F9F8FF] font-medium text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px] text-center sm:text-left">
                                    Shared inbox
                                </td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-[#F9F8FF] font-medium text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px]">
                                    Up to 100 inboxes
                                </td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-[#F9F8FF] font-medium text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px]">
                                    Up to 200 inboxes
                                </td>
                            </tr>
                            <tr className='h-[65px]'>
                                <td className="px-2 sm:px-9 py-3 bg-white font-medium text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px] text-center sm:text-left">
                                    Facebook Messenger integration
                                </td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-white"></td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-white">
                                    <Image src={CheckIcon} alt="CheckIcon" className="block mx-auto" />
                                </td>
                            </tr>
                            <tr className='h-[65px]'>
                                <td className="px-2 sm:px-9 py-3 bg-[#F9F8FF] rounded-bl-[20px] font-medium text-[#646474] text-[16px] xl:text-[20px] leading-[22px] xl:leading-[25px] text-center sm:text-left">
                                    Form automation
                                </td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-[#F9F8FF]"></td>
                                <td className="text-center px-2 sm:px-9 py-3 bg-[#F9F8FF] rounded-br-[20px]">
                                    <Image src={CheckIcon} alt="CheckIcon" className="block mx-auto" />
                                </td>
                            </tr>
                        </motion.tbody>
                    </motion.table>
                </div>
                {/* Input Select */}
                <div className="grid grid-cols-12">
                    <div className="col-span-12 md:col-span-4 xl:col-span-3 px-5 py-6">
                        <select name="features" className='font-semibold text-[20px] leading-[30px] focus:outline-none sm:w-5/12 md:w-9/12'>
                            <option value="features" className='mb-3 font-medium text-[20px] leading-[30px]'>
                                See More Features
                            </option>
                            <option value="features" className='mb-3 font-medium text-[20px] leading-[30px]'>
                                Features 1
                            </option>
                            <option value="features" className='mb-3 font-medium text-[20px] leading-[30px]'>
                                Features 2
                            </option>
                            <option value="features" className='mb-3 font-medium text-[20px] leading-[30px]'>
                                Features 3
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurPlans
