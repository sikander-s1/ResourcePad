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
import bgShadow from "media/productShadow2.png"
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
import ExclusiveSquad from '@/components/ExclusiveSquad/ExclusiveSquad'
import Tool from '@/components/Tool/Tool'
import Faqs from '@/components/Faqs/Faqs'

const ProductCRMInner = () => {
    // ========== Banner
    const banenrContent = {
        title: <>Grow your <span className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:z-[-1] before:h-[4px] before:bg-gradient-to-r from-[#A34CD5]  via-[#2C5DEE] to-[#0BEFBA]">business</span>with the <br className="lg:block hidden" />help of a ResourcePad partner</>,
        desc: "At ResourcePad, connecting is easy! Reach out to our business development team for top-tier remote developers. Don’t wait—contact us now and let’s kickstart your next project!",
        btn: false,
        isTab: false,
        tabContent: '',
        btnText: "Hire a Developer"
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
            title: "Discuss your project",
            desc: "Meet our expert team and share your vision and goals. This helps us understand your needs deeply to form the perfect dedicated team for your project.",
            subTitle: "How we drive  your success Our process",
            subDesc: "Our process is designed to thoroughly understand your needs, ensuring the best possible outcome for both your team and your project."
        },
        {
            number: "02",
            title: "Build the perfect team",
            desc: "We curate a selected team of  professionals with the skills and experience required for your project's success, ensuring the right fit from the start.",
            subTitle: "Build the perfect team",
            subDesc: "Our process is designed to thoroughly understand your needs, ensuring the best possible outcome for both your team and your project."
        },
        {
            number: "03",
            title: "Meet your Dedicated Team",
            desc: "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
            subTitle: "Meet your Dedicated Team",
            subDesc: "Our process is designed to thoroughly understand your needs, ensuring the best possible outcome for both your team and your project."
        },
        {
            number: "04",
            title: "Keep building",
            desc: "Start with a dedicated team focused on your project's goals, ensuring steady progress and avoiding delays from IT backlogs.",
            subTitle: "Keep building",
            subDesc: "Our process is designed to thoroughly understand your needs, ensuring the best possible outcome for both your team and your project."
        },
    ];

    const ourProduct = {
        joinTitle: <>Hire a Developer Today</>,
        joinDesc: "When she reached the first hills of the Italic Mountains had a last view back on the skyline.",
        join: true,
        product: products,
        isTitle: false,
        isContent: true,
        isHire: true,
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
        title: "Hire Developer Today",
        desc: "Partner with us for a digital journey that transforms your business ideas into successful, cutting-edge solutions.",
        inputs: false
    }

    //===== FAQS =====//
    const accordionData = [
        {
            question: 'How do I hire a dedicated team of developers from ResourcePad?',
            answer: "It's simple! Reach out to us through our contact form, and our team will connect with you to understand your project requirements. We'll then tailor a dedicated team based on your specific needs.",
        },
        {
            question: 'What technologies do your developers specialize in?',
            answer: "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
        },
        {
            question: 'Can I hire developers on a part-time basis?',
            answer: "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
        },
        {
            question: 'How is the communication managed with the hired team?',
            answer: "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
        },
        {
            question: 'What assurance do I have regarding the quality of work delivered by your team?',
            answer: "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
        },
    ];
    const faqs = {
        accordionData: accordionData,
        isprice: false,
    }
    return (
        <>
            <Banner content={banenrContent} />
            <BrandsSlider content={brandsSlider} />
            <ExclusiveSquad />
            <OurProduct content={ourProduct} />
            <OurClient content={clients} />
            <Tool />
            <TeamMembers content={TeamMembersContent} />
            <Faqs content={faqs} />
            <ContactForm content={formContent} />
        </>
    )
}

export default ProductCRMInner
