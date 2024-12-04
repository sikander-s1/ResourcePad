"use client"
import React from "react";
import Image from "next/image";
import AutoScroll from "@/components/AutoSlider/AutoSlider";
// Import Images
import icon1 from "media/brands/brand-1.png";
import icon2 from "media/brands/brand-2.png";
import icon3 from "media/brands/brand-3.png";
import icon4 from "media/brands/brand-4.png";
import icon5 from "media/brands/brand-5.png";
import icon6 from "media/brands/brand-6.png";
import icon7 from "media/brands/brand-7.png";
import icon8 from "media/brands/brand-8.png";
import icon9 from "media/brands/brand-9.png";

const BadgeSlider = () => {
    return (
        <section className='py-[25px]'>
            <AutoScroll wrapperClass="" options={{ loop: true, align: "start" }}>
                {
                    [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9].map((e, i) => (
                        <div key={i} className="shrink-0 grow-0 basis-1/3 md:basis-1/4 lg:basis-[12%] mr-5">
                            <Image src={e} alt="logo" className='block mx-auto' />
                        </div>
                    ))
                }
            </AutoScroll>
        </section>
    )
}

export default BadgeSlider
