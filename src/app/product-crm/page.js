"use client"
import React from 'react'
import Brand from '@/components/Brand/Brand'
import Banner from '@/components/Banner/Banner'
import OurClient from '@/components/OurClient/OurClient'
import LookingFor from '@/components/LookingFor/LookingFor'
import TeamMembers from '@/components/TeamMembers/TeamMembers'
import BrandsSlider from '@/components/BrandsSlider/BrandsSlider'
// Images
import ServicesBg1 from "media/services-bg1.png"
import ServicesBg2 from "media/services-bg2.png"
import ServicesBg3 from "media/services-bg3.png"
import Icon1 from "media/icons/crm-1.png"
import Icon2 from "media/icons/crm-2.png"
import Icon3 from "media/icons/crm-3.png"
import Icon4 from "media/icons/crm-4.png"
import Icon5 from "media/icons/crm-5.png"
import Icon6 from "media/icons/crm-6.png"
import Icon7 from "media/icons/crm-7.png"
import tab1 from "media/dashboard1.png"
import Card1 from "media/card5.png"
import Card2 from "media/card6.png"
import Card3 from "media/card7.png"
import Card4 from "media/card4.png"
import card3bg from "media/card3bg.png"
import card2bg from "media/cardDots.png"
import CTAbg from "media/cta-bg1.png"
import Client1 from "media/client-4.png"
import Client2 from "media/client-5.png"
import Client3 from "media/client-6.png"
import OurProduct from '@/components/OurProduct/OurProduct'
import bgShadow from "media/productShadow.png"
import Profile1 from "media/Profile-1.png"
import Profile2 from "media/Profile-2.png"
import ProductImage from "media/productImage.png"
import ProductImageTwo from "media/productImage2.png"
import ProductImageThree from "media/productImage3.png"
import ProductImageFour from "media/productImage4.png"
import ProductImageFive from "media/productImage5.png"
import ProductImageSix from "media/productImage6.png"
import Industries from '@/components/Industry/Industries'
import TrendingBlog from '@/components/TrendingBlog/TrendingBlog'
import ContactForm from '@/components/ContactForm/ContactForm'

const ProductCRMInner = () => {
    // ========== Banner
    const tabInfo = [
        {
            icon: Icon1,
            label: "Chat",
            index: 0,
        },
        {
            icon: Icon2,
            label: "Projects",
            index: 1,
        },
        {
            icon: Icon3,
            label: "Whiteboards",
            index: 2,
        },
        {
            icon: Icon4,
            label: "forms",
            index: 3,
        },
        {
            icon: Icon5,
            label: "Automations",
            index: 4,
        },
        {
            icon: Icon6,
            label: "AI",
            index: 5,
        },
        {
            icon: Icon7,
            label: "Goals",
            index: 6,
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
        {
            tabImage: tab1,
        },
    ];
    const banenrContent = {
        title: <>Optimizing <span className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:z-[-1] before:h-[4px] before:bg-gradient-to-r from-[#A34CD5]  via-[#2C5DEE] to-[#0BEFBA]">Customer</span> <br className="lg:block hidden" />Journeys through Effective CRM</>,
        desc: "We partner with leading brands and funded start-ups to design, build and scale software that delivers business value and empowers users to accomplish their goals.",
        btn: false,
        tabInfo: tabInfo,
        tabContents: tabContents,
        isTab: true,
        btnText: "Get Started"
    }

    // ========== BrandSlider
    const brandsSlider = {
        padding: true
    }

    // ========== Brand
    const cardData = [
        {
            order: '01',
            title: <>Improve collaboration </>,
            description: "Get your teams working together more closely, even if they're far apart. Centralize project-related communications in one place, brainstorm ideas with Whiteboards, and draft plans together with collaborative Docs.",
            image: ServicesBg1,
            bgClass: '!sticky top-[146px]',
            suggestions: [
                {
                    link: "#href",
                    text: 'Comments',
                },
                {
                    link: "#href",
                    text: 'Docs',
                },
                {
                    link: "#href",
                    text: 'Whiteboards',
                },
                {
                    link: "#href",
                    text: 'Clips',
                },
            ]
        },
        {
            order: '02',
            title: <>Enhance visibility </>,
            description: <><b>Ditch the needless meetings and repetitive updates.</b> With a single source of truth for all ongoing projects across your entire org, you get a crystal-clear view of what's happening (or not), and who's responsible.</>,
            image: ServicesBg2,
            bgClass: '!sticky top-[176px]',
            suggestions: [
                {
                    link: "#href",
                    text: 'Reports',
                },
                {
                    link: "#href",
                    text: 'View',
                },
                {
                    link: "#href",
                    text: 'Dashboard',
                },
                {
                    link: "#href",
                    text: 'Goals',
                },
            ]
        },
        {
            order: '03',
            title: <>Automate work</>,
            description: <><b>Streamline business processes without breaking a sweat.</b>
                Whether it's onboarding employees, handling IT requests, or managing expense reimbursements, you can automate it all with powerful no-code Automations.</>,
            image: ServicesBg3,
            bgClass: '!sticky top-[210px]',
            suggestions: [
                {
                    link: "#href",
                    text: 'Reports',
                },
                {
                    link: "#href",
                    text: 'Forms',
                },
                {
                    link: "#href",
                    text: 'Automations',
                },
                {
                    link: "#href",
                    text: 'Task Templates',
                },
                {
                    link: "#href",
                    text: 'Custom Fields',
                },
            ]
        },
    ];

    const brandContent = {
        title: "Save time and get more done",
        desc: "Supercharge productivity. Streamline work by doing it, and seeing it, in one place.",
        card: cardData,
        btn: false,
        isChecked: false,
        hireTitle: <>Supercharge Your Sales with Our <span className='text-[#6B46FF]'>Powerful</span> CRM!</>
    }

    // ========== Looking
    const lookingCards = [
        {
            image: Card1,
            cardTitle: "Plays well with others",
            cardDesc: "Easily integrates with the tools you already Use.",
            css: "relative z-10 h-full flex flex-col items-start justify-start sm:justify-end",
            imageCss: "object-cover object-center w-max rounded-[20px] z-0",
            imagePosition: true,
            isBgImage: false
        },
        {
            image: Card2,
            bgImage: card2bg,
            cardTitle: "View work your way",
            cardDesc: "Instantly switch between 15 views including list, board, gantt, and more.",
            css: "relative z-10 h-full flex flex-col items-start justify-start sm:justify-end",
            imageCss: "mt-[-100px] image_shadow",
            imagePosition: false,
            isBgImage: true
        },
        {
            image: Card3,
            bgImage: card3bg,
            cardTitle: "Search everything",
            cardDesc: "Find any file, a connected app, or your local drive, from one place.",
            css: "",
            imageCss: "mt-[-190px]",
            imagePosition: false,
            isBgImage: true
        },
        {
            image: Card4,
            cardTitle: "AI-powered productivity",
            cardDesc: "Get work done faster with the only AI-powered assistant tailored to your role.",
            css: "",
            imageCss: "mt-[-150px]",
            imagePosition: false,
            isBgImage: false
        },
    ]
    const LookingForContent = {
        title: "Everything your team is looking for",
        desc: "When she reached the first hills of the Italic Mountains had a last view back on the skyline.",
        lookingCards: lookingCards,
        ctaTitle: <>Get Started with a Free Trial Today!</>,
        ctaDesc: "Start Your Free Trial Today! Experience the benefits of our CRM risk-free and see how it can transform your business.",
        ctaBg: CTAbg,
        counter: false,
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
        join: true,
        product: products,
        isTitle: true,
        isContent: false,
        isHire: false,
        bgImage: bgShadow
    }

    // ========== Team Members

    const TeamMembersSliders = [
        {
            slideTitle: "Gary Smith",
            designation: "Back-end Developer",
            slideImage: Profile1,
            slideDesc: "As a software developer, I thrive on turning innovative ideas into functional applications. I specialize in crafting seamless user experiences and efficient code. My passion for technology drives me to continuously learn and adapt in this ever-evolving field."
        },
        {
            slideTitle: "Travis Carter",
            designation: "Software Developer",
            slideImage: Profile1,
            slideDesc: "As a software developer, I thrive on turning innovative ideas into functional applications. I specialize in crafting seamless user experiences and efficient code. My passion for technology drives me to continuously learn and adapt in this ever-evolving field."
        },
        {
            slideTitle: "Stacy Tisdale",
            designation: "Back-end Developer",
            slideImage: Profile2,
            slideDesc: "As a software developer, I thrive on turning innovative ideas into functional applications. I specialize in crafting seamless user experiences and efficient code. My passion for technology drives me to continuously learn and adapt in this ever-evolving field."
        },
        {
            slideTitle: "Jason Strothers",
            designation: "Back-end Developer",
            slideImage: Profile1,
            slideDesc: "As a software developer, I thrive on turning innovative ideas into functional applications. I specialize in crafting seamless user experiences and efficient code. My passion for technology drives me to continuously learn and adapt in this ever-evolving field."
        }
    ]

    const TeamMembersContent = {
        title: "Perfect fit for every team",
        desc: "When she reached the first hills of the Italic Mountains had a last view back on the skyline.",
        TeamMembersSliders: TeamMembersSliders,
    }

    // ========== Contact Form Start
    const formContent = {
        title: "Let's Work Together!",
        desc: "Partner with us for a digital journey that transforms your business ideas into successful, cutting-edge solutions.",
        inputs: false
    }
    return (
        <>
            <Banner content={banenrContent} />
            <BrandsSlider content={brandsSlider} />
            <Brand content={brandContent} />
            <LookingFor content={LookingForContent} />
            <OurClient content={clients} />
            <OurProduct content={ourProduct} />
            <TeamMembers content={TeamMembersContent} />
            <Industries />
            <TrendingBlog />
            <ContactForm content={formContent} />
        </>
    )
}

export default ProductCRMInner
