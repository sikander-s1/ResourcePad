import React from 'react'
import Image from 'next/image'
// Images
import Map from "media/map.png"

const ContactBanner = () => {
    return (
        <section className='pt-[80px] xl:pt-[120px] relative'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-[#202020] text-[30px] sm:text-[40px] md:text-[55px] lg:text-[65px] sm:leading-[50px] md:leading-[65px] lg:leading-[75px] leading-[40px] font-bold text-center mb-4'>Get in <span className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:z-[-1] before:h-[4px] before:bg-gradient-to-r from-[#A34CD5]  via-[#2C5DEE] to-[#0BEFBA]">Touch</span> with Us!</h2>
                        <p className='text-center text-[#646474] text-[16px] md:text-[22px] leading-[23px] md:leading-[29px] font-normal lg:w-10/12 xl:w-9/12 xxl:px-8 mx-auto mb-3 lg:mb-0'>Have a question or ready to start your project? Our team is here to help! Reach out today, and let's discuss how we can bring your ideas to life.</p>
                    </div>
                    <div className="col-span-12">
                        <Image src={Map} alt='Map Image' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactBanner
