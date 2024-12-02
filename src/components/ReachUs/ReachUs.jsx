import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// Images
import Icon1 from "media/assets/images/icons/icon-1.png"
import Icon2 from "media/assets/images/icons/icon-2.png"
import Icon3 from "media/assets/images/icons/icon-3.png"
import Icon4 from "media/assets/images/icons/icon-4.png"
import Icon5 from "media/assets/images/icons/icon-5.png"
import Icon6 from "media/assets/images/icons/icon-6.png"
import Form1 from "media/assets/images/icons/form1.png"
import Form2 from "media/assets/images/icons/form2.png"
import Form3 from "media/assets/images/icons/form3.png"
import Form4 from "media/assets/images/icons/form4.png"
import Form5 from "media/assets/images/icons/form5.png"
import Form6 from "media/assets/images/icons/form6.png"
import Form7 from "media/assets/images/icons/form7.png"
import Form8 from "media/assets/images/icons/form8.png"
import Form9 from "media/assets/images/icons/form9.png"
import Form10 from "media/assets/images/icons/form10.png"
import Chat from 'media/assets/images/icons/chat-icon.png'
import Email from 'media/assets/images/icons/email2.png'
import Phone from 'media/assets/images/icons/phone.png'
import Location from 'media/assets/images/icons/location.png'
import Watsapp from 'media/assets/images/icons/whatsapp.png'
import Shade from "media/assets/images/reach-shade.png"

const ReachUs = () => {

    const lists = [
        {
            icon: Icon1,
            txt: 'Fintech',
            hover: 'hover:border-[#7CD482]'
        },
        {
            icon: Icon2,
            txt: 'E-commerce',
            hover: 'hover:border-[#FFAE7B]'
        },
        {
            icon: Icon3,
            txt: 'Healthcare',
            hover: 'hover:border-[#FF7777]'
        },
        {
            icon: Icon4,
            txt: 'Food',
            hover: 'hover:border-[#FFD164]'
        },
        {
            icon: Icon5,
            txt: 'Automotive',
            hover: 'hover:border-[#78C7F8]'
        },
        {
            icon: Icon6,
            txt: 'Charity',
            hover: 'hover:border-[#97A5FF]'
        }
    ]

    return (
        <section>
            <div className="container">
                <div className="grid grid-cols-12 items-center gap-x-5 lg:gap-x-14">
                    <div className="col-span-7">
                        <div className="txt">
                            <h4 className='text-[30px] leading-[40px] text-[#202020] font-semibold mb-3 lg:mb-6'>My product industry is:</h4>
                            <ul className='flex items-center flex-wrap gap-x-4 gap-y-2 lg:w-10/12 mb-5 lg:mb-10'>
                                {lists.map((content, index) => (
                                    <li key={index}>
                                        <Link href="#href" className={`flex items-center gap-x-2 border border-[#DEDEDE] pl-1 pr-4 py-1 rounded-full ${content.hover} hover:duration-700 duration-700 ease-in-out mb-4`}>
                                            <Image src={content.icon} alt='Icon' width={39} height={39} />
                                            <span className='text-[20px] leading-[30px] text-[#646474]'>
                                                {content.txt}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <form>
                                <div className="grid grid-cols-12 gap-5">
                                    <div className="col-span-6">
                                        <div className="border border-[#e2e2e27f] bg-[#F8F8FA] py-4 px-4 flex items-center gap-3 rounded-[50px]">
                                            <Image src={Form1} alt='Icon' />
                                            <input type="text" name='name' placeholder='John Fletcher' className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-[400] placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-[400] bg-transparent w-full focus:outline-none text-[#9F9FA9]' required />
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="border border-[#e2e2e27f] bg-[#F8F8FA] py-4 px-4 flex items-center gap-3 rounded-[50px]">
                                            <Image src={Form6} alt='Icon' />
                                            <select name="jobs" className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-[400] placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-[400] bg-transparent w-full focus:outline-none text-[#9F9FA9] !border-0'>
                                                <option value="name" className='font-[400]'>Job Title</option>
                                                <option value="name" className='font-[400]'>Job 1</option>
                                                <option value="name" className='font-[400]'>Job 2</option>
                                                <option value="name" className='font-[400]'>Job 3</option>
                                                <option value="name" className='font-[400]'>Job 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="border border-[#e2e2e27f] bg-[#F8F8FA] py-4 px-4 flex items-center gap-3 rounded-[50px]">
                                            <Image src={Form2} alt='Icon' />
                                            <input type="email" name='email' placeholder='Work Email' className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-[400] placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-[400] bg-transparent w-full focus:outline-none text-[#9F9FA9]' required />
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="border border-[#e2e2e27f] bg-[#F8F8FA] py-4 px-4 flex items-center gap-3 rounded-[50px]">
                                            <Image src={Form4} alt='Icon' />
                                            <input type="text" name='companyName' placeholder='Company Name' className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-[400] placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-[400] bg-transparent w-full focus:outline-none text-[#9F9FA9]' required />
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="border border-[#e2e2e27f] bg-[#F8F8FA] py-4 px-4 flex items-center gap-3 rounded-[50px]">
                                            <Image src={Form7} alt='Icon' />
                                            <select name="employees" className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-[400] placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-[400] bg-transparent w-full focus:outline-none text-[#9F9FA9] !border-0'>
                                                <option value="employees" className='font-[400]'>Employees</option>
                                                <option value="name" className='font-[400]'>Employees 1</option>
                                                <option value="name" className='font-[400]'>Employees 2</option>
                                                <option value="name" className='font-[400]'>Employees 3</option>
                                                <option value="name" className='font-[400]'>Employees 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="border border-[#e2e2e27f] bg-[#F8F8FA] py-4 px-4 flex items-center gap-3 rounded-[50px]">
                                            <Image src={Form3} alt='Icon' />
                                            <input type="number" name='number' placeholder='Mobile' className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-[400] placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-[400] bg-transparent w-full focus:outline-none text-[#9F9FA9]' required />
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="border border-[#e2e2e27f] bg-[#F8F8FA] py-4 px-4 flex items-center gap-3 rounded-[50px]">
                                            <Image src={Form8} alt='Icon' />
                                            <select name="country" className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-[400] placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-[400] bg-transparent w-full focus:outline-none text-[#9F9FA9] !border-0'>
                                                <option value="country" className='font-[400] pb-4'>Country</option>
                                                <option value="name" className='font-[400] pb-4'>US</option>
                                                <option value="name" className='font-[400] pb-4'>UK</option>
                                                <option value="name" className='font-[400] pb-4'>Japan</option>
                                                <option value="name" className='font-[400] pb-4'>China</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div className="border border-[#e2e2e27f] bg-[#F8F8FA] py-4 px-4 flex items-center gap-3 rounded-[50px]">
                                            <Image src={Form9} alt='Icon' />
                                            <select name="products" className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-[400] placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-[400] bg-transparent w-full focus:outline-none text-[#9F9FA9] !border-0'>
                                                <option value="products" className='font-[400]'>Product Interest</option>
                                                <option value="name" className='font-[400]'>Products 1</option>
                                                <option value="name" className='font-[400]'>Products 2</option>
                                                <option value="name" className='font-[400]'>Products 3</option>
                                                <option value="name" className='font-[400]'>Products 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <div className="border border-[#e2e2e27f] bg-[#F8F8FA] py-4 px-4 flex items-start gap-3 rounded-[20px] h-[255px]">
                                            <Image src={Form10} alt='Icon' className='pt-[1px]' />
                                            <textarea name='message' placeholder='Questions/Comments' className='placeholder:text-[16px] md:placeholder:text-[20px] placeholder:font-[400] placeholder:leading-[20px] md:placeholder:leading-[24px] text-[16px] md:text-[20px] font-[400] bg-transparent w-full focus:outline-none text-white h-full resize-none' />
                                        </div>
                                    </div>
                                    <div className="col-span-12">
                                        <p className='text-[17px] font-[400] leading-[28px] text-[#888888] py-[20px] text-center sm:text-left'>By registering, you agree to the processing of your personal data by Resource Pad as described in the
                                            Privacy Statement.</p>
                                        <div className="btn">
                                            <button type='submit' className='text-[20px] text-white font-normal w-full bg-[#6B46FF] h-[62px] rounded-full tracking-wide'>
                                                Submit Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-span-5">
                        <div className="bg-[#F8F8FA] relative z-[0] rounded-[20px] px-5 lg:px-10 py-5 lg:pt-12 lg:pb-[60px]">
                            <div className="mb-8">
                                <h3 className='text-[#202020] text-[50px] leading-[60px] font-bold mb-3'>How to Reach Us</h3>
                                <p className='text-[#646474] text-[20px] leading-[28px] pr-5'>Fill out the form below and our team will get back to you as soon as possible:</p>
                            </div>
                            <div className="chat mb-[50px]">
                                <h4 className='text-[30px] leading-[40px] font-semibold text-[#202020] mb-4 lg:mb-6'>Chat with us</h4>
                                <ul>
                                    <li className='mb-3'>
                                        <Link href="#href" className='text-[#202020] opacity-80 text-[20px] font-normal underline underline-offset-4 flex items-center gap-x-3 pb-[2px]'>
                                            <Image src={Chat} alt='Chat Icon' />
                                            Start a live chat
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="mailto:;" className='text-[#202020] opacity-80 text-[20px] font-normal underline underline-offset-4 flex items-center gap-x-3 pb-[2px]'>
                                            <Image src={Email} alt='Chat Icon' />
                                            Support@sresourcepad.com
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="number mb-[50px]">
                                <h4 className='text-[30px] leading-[40px] font-semibold text-[#202020] mb-4 lg:mb-6'>Call us</h4>
                                <ul>
                                    <li className='mb-3'>
                                        <Link href="tel:;" className='text-[#202020] opacity-80 text-[20px] font-normal underline underline-offset-4 flex items-center gap-x-3 pb-[2px]'>
                                            <Image src={Phone} alt='Chat Icon' />
                                            +1 (123) 456-7890
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="chat mb-[50px]">
                                <h4 className='text-[30px] leading-[40px] font-semibold text-[#202020] mb-4 lg:mb-6'>Visit us</h4>
                                <ul>
                                    <li className='mb-3'>
                                        <Link href="#href" className='text-[#202020] opacity-80 text-[20px] font-normal underline underline-offset-4 flex items-center gap-x-3 pb-[2px]'>
                                            <Image src={Location} alt='Chat Icon' />
                                            Unit 5-15 brownridge road office #204
                                            Georgetown Ontario L7G0C6
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="watsapp">
                                <h4 className='text-[30px] leading-[40px] font-semibold text-[#202020] mb-4 lg:mb-6'>WhatsApp Chat Support</h4>
                                <p className='text-[#646474] text-[19px] leading-[25px] pr-12 mb-4 lg:mb-10'>Instantly Connect with Our Sales & Support Team for Quick Answers on Product Features, Pricing, and More.</p>
                                <div className="icon">
                                    <Link href="#href" className='text-white text-[18px] leading-[28px] font-medium flex items-center gap-x-3 bg-[#5ECC65] px-5 lg:px-8 py-3 w-max rounded-full tracking-wider'>
                                        <Image src={Watsapp} alt='Watsapp' />
                                        WhatsApp
                                    </Link>
                                </div>
                            </div>
                            <div className="shadeImage absolute bottom-0 right-0 z-[-1]">
                                <Image src={Shade} alt='Shade' className='rounded-[20px]'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReachUs
