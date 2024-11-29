"use client"
import React from "react";
import Image from "next/image";
// Import Slider
import AutoScroll from "../AutoSlider/AutoSlider";

const ServiceSlider = () => {

    const slides = [
        'build custom software',
        'hire developers',
        'launch Ai solutions',
        'build custom software',
        'launch Ai solutions'
    ]

    return (
        <section className='py-[25px]'>
            <AutoScroll wrapperClass="" options={{ loop: true, align: "start" }}>
                {slides.map((e, i) => (
                    <div key={i} className="shrink-0 grow-0 basis-1.5/5 md:basis-2/6 lg:basis-2/7 mr-5">
                        <p className="text-[16px] lg:text-[20px] xxl:text-[25px] leading-[30px] xxl:leading-[35px] text-white uppercase text-center relative xl:after:content-[''] xl:after:absolute xl:after:top-[12px] xl:after:left-0 xl:after:w-[10px] xl:after:h-[10px] xl:after:bg-white xl:after:rotate-[45deg]">{e}</p>
                    </div>
                ))
                }
            </AutoScroll>
        </section>
    )
}

export default ServiceSlider
