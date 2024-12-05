"use client"
import Banner from "@/components/Banner/Banner";
import BrandsSlider from "@/components/BrandsSlider/BrandsSlider";
import Brand from "@/components/Brand/Brand";
import LookingFor from "@/components/LookingFor/LookingFor";
import OurClient from "@/components/OurClient/OurClient";
import OurProduct from "@/components/OurProduct/OurProduct";
import Industries from "@/components/Industry/Industries";
import TrendingBlog from "@/components/TrendingBlog/TrendingBlog";
import ContactForm from "@/components/ContactForm/ContactForm";
// Images
import ServicesBg from "media/services-bg.png"
import Icon1 from "media/icons/icon-1.png"
import Icon2 from "media/icons/icon-2.png"
import Icon3 from "media/icons/icon-3.png"
import Icon4 from "media/icons/icon-4.png"
import Icon5 from "media/icons/icon-5.png"
import Icon6 from "media/icons/icon-6.png"
import tab1 from "media/icons/dashboard.png"
import Card1 from "media/card1.png"
import Card2 from "media/card2.png"
import Card3 from "media/card3.png"
import Card4 from "media/card4.png"
import card3bg from "media/card3bg.png"
import CTAbg from "media/cta-bg.png"
import Client1 from "media/client-1.png"
import Client2 from "media/client-2.png"
import Client3 from "media/client-3.png"
import ProductImage from "media/productImage.png"
import ProductImageTwo from "media/productImage2.png"
import ProductImageThree from "media/productImage3.png"
import ProductImageFour from "media/productImage4.png"
import ProductImageFive from "media/productImage5.png"
import ProductImageSix from "media/productImage6.png"

export default function Home() {
  // ========== Banner
  const tabInfo = [
    {
      icon: Icon1,
      label: "Fintech",
      index: 0,
    },
    {
      icon: Icon2,
      label: "E-commerce",
      index: 1,
    },
    {
      icon: Icon3,
      label: "Healthcare",
      index: 2,
    },
    {
      icon: Icon4,
      label: "Food",
      index: 3,
    },
    {
      icon: Icon5,
      label: "Automotive",
      index: 4,
    },
    {
      icon: Icon6,
      label: "Charity",
      index: 5,
    },
  ];

  const tabContents = [
    {
      tabImage: tab1,
    },
    {
      tabImage: tab1,
    },
    {
      tabImage: tab1,
    },
    {
      tabImage: tab1,
    },
    {
      tabImage: tab1,
    },
    {
      tabImage: tab1,
    },
  ];

  const banenrContent = {
    title: <>Your <span className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:z-[-1] before:h-[4px] before:bg-gradient-to-r from-[#A34CD5]  via-[#2C5DEE] to-[#0BEFBA]">Trusted</span> Partner for <br className="lg:block hidden" />Guaranteed Software Delivery</>,
    desc: "We partner with leading brands and funded start-ups to design, build and scale software that delivers business value and empowers users to accomplish their goals.",
    btn: true,
    tabInfo: tabInfo,
    tabContents: tabContents,
    isTab: true,
    btnText: "Contact Us!",
  }

  // ========== BrandSlider
  const brandsSlider = {
    padding: false
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
    btn: true,
    isChecked: false,
    hireTitle: <>Hire developers with a <span className='text-[#6B46FF]'>proven</span> track record.</>
  }

  // ========== Looking
  const lookingCards = [
    {
      image: Card1,
      cardTitle: "Integrated with the tools you love",
      cardDesc: "When she reached the first hills of the Italic Mountains had a last view back on the skyline.",
      css: "",
      imageCss: "object-cover object-center w-full rounded-[20px] z-0",
      imagePosition: false,
      isBgImage: false
    },
    {
      image: Card2,
      cardTitle: "View work your way",
      cardDesc: "Instantly switch between 15 views including list, board, gantt, and more.",
      css: "relative z-10 h-full flex flex-col items-start justify-start sm:justify-end",
      imageCss: "object-cover object-center w-full rounded-[20px] z-0",
      imagePosition: true,
      isBgImage: false
    },
    {
      image: Card3,
      bgImage: card3bg,
      cardTitle: "Stay ahead of what’s next",
      cardDesc: "Organize your work, reminders, and calendar events all from your personalized Home.",
      css: "",
      imageCss: "",
      imagePosition: false,
      isBgImage: true
    },
    {
      image: Card4,
      cardTitle: "AI-powered productivity",
      cardDesc: "Get work done faster with the only AI-powered assistant tailored to your role.",
      css: "",
      imageCss: "",
      imagePosition: false,
      isBgImage: false
    },
  ]
  const LookingForContent = {
    title: "Everything your team is looking for",
    desc: "When she reached the first hills of the Italic Mountains had a last view back on the skyline.",
    lookingCards: lookingCards,
    ctaTitle: <>Trusted by over <span className='text-[#886AFF]'>2,000,000</span> teams</>,
    ctaDesc: "",
    ctaBg: CTAbg,
    counter: true,
  }

  // ========== Our Client
  const clientsSlider = [
    {
      btn1: "Dashboard",
      btn2: "CRM",
      cardTitle: "Airoflowy",
      cardDesc: "Streaming & media app development platform",
      counterTitle1: "2 phases",
      counterDesc1: <>Already <br className='lg:block hidden' /> completed</>,
      counterTitle2: "80%",
      counterDesc2: <>Unit test<br className='lg:block hidden' /> coverage</>,
      counterTitle3: "Native-Like",
      counterDesc3: "Performance",
      cardImage: Client1
    },
    {
      btn1: "Dashboard",
      btn2: "HRM",
      cardTitle: "UIFRY HRM",
      cardDesc: "Streaming & media app development platform",
      counterTitle1: "2 phases",
      counterTitle1: "2 phases",
      counterDesc1: <>Already <br className='lg:block hidden' /> completed</>,
      counterTitle2: "80%",
      counterDesc2: <>Unit test<br className='lg:block hidden' /> coverage</>,
      counterTitle3: "Native-Like",
      counterDesc3: "Performance",
      cardImage: Client2
    },
    {
      btn1: "Web App",
      btn2: "POS",
      cardTitle: "CahinPOS",
      cardDesc: "Streaming & media app development platform",
      counterTitle1: "2 phases",
      counterTitle1: "2 phases",
      counterDesc1: <>Already <br className='lg:block hidden' /> completed</>,
      counterTitle2: "80%",
      counterDesc2: <>Unit test<br className='lg:block hidden' /> coverage</>,
      counterTitle3: "Native-Like",
      counterDesc3: "Performance",
      cardImage: Client3
    },
    {
      btn1: "Dashboard",
      btn2: "CRM",
      cardTitle: "Airoflowy",
      cardDesc: "Streaming & media app development platform",
      counterTitle1: "2 phases",
      counterDesc1: <>Already <br className='lg:block hidden' /> completed</>,
      counterTitle2: "80%",
      counterDesc2: <>Unit test<br className='lg:block hidden' /> coverage</>,
      counterTitle3: "Native-Like",
      counterDesc3: "Performance",
      cardImage: Client1
    },
    {
      btn1: "Dashboard",
      btn2: "HRM",
      cardTitle: "UIFRY HRM",
      cardDesc: "Streaming & media app development platform",
      counterTitle1: "2 phases",
      counterTitle1: "2 phases",
      counterDesc1: <>Already <br className='lg:block hidden' /> completed</>,
      counterTitle2: "80%",
      counterDesc2: <>Unit test<br className='lg:block hidden' /> coverage</>,
      counterTitle3: "Native-Like",
      counterDesc3: "Performance",
      cardImage: Client2
    },
    {
      btn1: "Web App",
      btn2: "POS",
      cardTitle: "CahinPOS",
      cardDesc: "Streaming & media app development platform",
      counterTitle1: "2 phases",
      counterTitle1: "2 phases",
      counterDesc1: <>Already <br className='lg:block hidden' /> completed</>,
      counterTitle2: "80%",
      counterDesc2: <>Unit test<br className='lg:block hidden' /> coverage</>,
      counterTitle3: "Native-Like",
      counterDesc3: "Performance",
      cardImage: Client3
    },
  ]
  const clients = {
    title: "Our clients lead the way",
    desc: "When she reached the first hills of the Italic Mountains had a last view back on the skyline.",
    clientsSlider: clientsSlider
  }

  // ========== Our Product
  const products = [
    {
      number: "01",
      title: "Ideate",
      desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
      image: ProductImage
    },
    {
      number: "02",
      title: "Design",
      desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
      image: ProductImageTwo
    },
    {
      number: "03", title: "Develop",
      desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
      image: ProductImageThree
    },
    {
      number: "04", title: "Test",
      desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
      image: ProductImageFour
    },
    {
      number: "05", title: "Launch",
      desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
      image: ProductImageFive
    },
    {
      number: "06", title: "Support",
      desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
      image: ProductImageSix
    },
  ];

  const ourProduct = {
    joinTitle: <>Join Us! Optimize customer <br className="lg:block hidden" /> relationships with our CRM.</>,
    joinDesc: "",
    join: false,
    product: products,
    isHire: false,
    isContent: false,
    isTitle: true
  }

  // ========== Contact Form Start
  const formContent = {
    title: "Let's Work Together!",
    desc: "Partner with us for a digital journey that transforms your business ideas into successful, cutting-edge solutions.",
    inputs: false,
    isTitle: true,
  }

  return (
    <>
      <Banner content={banenrContent} />
      <BrandsSlider content={brandsSlider} />
      <Brand content={brandContent} />
      <LookingFor content={LookingForContent} />
      <OurClient content={clients} />
      <OurProduct content={ourProduct} />
      <Industries />
      <TrendingBlog />
      <ContactForm content={formContent} />
    </>
  );
}
