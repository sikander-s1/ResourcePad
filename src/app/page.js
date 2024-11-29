"use client"
import Image from "next/image";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import BrandsSlider from "@/components/BrandsSlider/BrandsSlider";
import Brand from "@/components/Brand/Brand";
// Images
import ServicesBg from "media/assets/images/services-bg.png"
import LookingFor from "@/components/LookingFor/LookingFor";
import OurClient from "@/components/OurClient/OurClient";
import OurProduct from "@/components/OurProduct/OurProduct";
import Industries from "@/components/Industry/Industries";
import TrendingBlog from "@/components/TrendingBlog/TrendingBlog";
import ContactForm from "@/components/ContactForm/ContactForm";
import Footer from "@/components/Footer/Footer";
import SmoothScroll from "@/components/Smoothness/SmoothScroll";

export default function Home() {
  // ========== Banner
  const banenrContent = {
    title: <>Your <span className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:z-[-1] before:h-[4px] before:bg-gradient-to-r from-[#A34CD5]  via-[#2C5DEE] to-[#0BEFBA]">Trusted</span> Partner for <br className="lg:block hidden" />Guaranteed Software Delivery</>,
    desc: "We partner with leading brands and funded start-ups to design, build and scale software that delivers business value and empowers users to accomplish their goals."
  }

  // ========== Brand

  const cardData = [
    {
      order: '01',
      title: <>Web <br className='lg:block hidden' /> Development </>,
      description: 'We build responsive, high-performance web applications that ensure our clients long-term business success.',
      image: ServicesBg,
      bgClass: '!sticky top-[146px]',
    },
    {
      order: '02',
      title: <>Web <br className='lg:block hidden' /> Development </>,
      description: 'We build responsive, high-performance web applications that ensure our clients long-term business success.',
      image: ServicesBg,
      bgClass: '!sticky top-[176px]',
    },
    {
      order: '03',
      title: <>Web <br className='lg:block hidden' /> Development </>,
      description: 'We build responsive, high-performance web applications that ensure our clients long-term business success.',
      image: ServicesBg,
      bgClass: '!sticky top-[210px]',
    },
    {
      order: '04',
      title: <>Web <br className='lg:block hidden' /> Development </>,
      description: 'We build responsive, high-performance web applications that ensure our clients long-term business success.',
      image: ServicesBg,
      bgClass: '!sticky top-[242px]',
    },
    {
      order: '05',
      title: <>Web <br className='lg:block hidden' /> Development </>,
      description: 'We build responsive, high-performance web applications that ensure our clients long-term business success.',
      image: ServicesBg,
      bgClass: '!sticky top-[274px]',
    },
  ];

  const brandContent = {
    title: "Unleash Your Brand's Creative Potential",
    desc: "When she reached the first hills of the Italic Mountains had a last view back on the skyline.",
    card: cardData,
    hireTitle: <>Hire developers with a <span className='text-[#6B46FF]'>proven</span> track record.</>
  }

  return (
    <>
      <Header />
      <Banner content={banenrContent} />
      <BrandsSlider />
      <Brand content={brandContent} />
      <LookingFor />
      <OurClient />
      <OurProduct />
      <Industries />
      <TrendingBlog />
      <ContactForm />
      <Footer />
    </>
  );
}
