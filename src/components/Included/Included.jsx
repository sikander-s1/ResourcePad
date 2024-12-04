import React from 'react'
import Image from 'next/image'
// Images
import Include1 from "media/icons/include1.png"
import Include2 from "media/icons/include2.png"
import Include3 from "media/icons/include3.png"
import Include4 from "media/icons/include4.png"
import Include5 from "media/icons/include5.png"
import Include6 from "media/icons/include6.png"

const Included = ({ content }) => {

    const { title, desc, cardContent, css = 'pt-0'} = content;

    return (
        <section className={`pb-[120px] ${css}`}>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='mx-auto mb-1 md:mb-3 font-bold text-[#202020] text-[25px] text-center md:text-[45px] lg:text-[55px] leading-[35px] md:leading-[55px] lg:leading-[65px]'>
                            {title}
                        </h2>
                        <p className='mb-5 lg:mb-10 text-[#646474] text-[14px] text-center md:text-[16px] lg:text-[20px] leading-[26px] lg:leading-[30px]'>{desc}</p>
                    </div>
                </div>
                <div className="gap-5 grid grid-cols-3">
                    {cardContent.map((data, index) => (
                        <div key={index} className="border-[#E2E2E2] px-5 lg:px-10 py-8 border rounded-[20px] card">
                            <div className="mb-3 lg:mb-7 image">
                                <Image src={data.icon} alt='Icon' />
                            </div>
                            <div className="txt">
                                <h3 className='mb-3 lg:mb-4 font-bold text-[25px] leading-[35px]'>
                                    {data.cardTitle}
                                </h3>
                                <p className='lg:w-11/12 font-normal text-[#646474] text-[20px]'>
                                    {data.cardDesc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Included
