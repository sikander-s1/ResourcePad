"use client";
import React from "react";
import Brand from "@/components/Brand/Brand";
import Banner from "@/components/Banner/Banner";
import OurClient from "@/components/OurClient/OurClient";
import LookingFor from "@/components/LookingFor/LookingFor";
import TeamMembers from "@/components/TeamMembers/TeamMembers";
import BrandsSlider from "@/components/BrandsSlider/BrandsSlider";
// Images
import ServicesBg1 from "media/services-bg4.png";
import ServicesBg2 from "media/services-bg5.png";
import Icon1 from "media/icons/crm-1.png";
import Icon2 from "media/icons/crm-2.png";
import Icon3 from "media/icons/crm-3.png";
import Icon4 from "media/icons/crm-4.png";
import Icon5 from "media/icons/crm-5.png";
import Icon6 from "media/icons/crm-6.png";
import Icon7 from "media/icons/crm-7.png";
import tab1 from "media/dashboard1.png";
import Card1 from "media/card8.png";
import Card2 from "media/card9.png";
import Card3 from "media/card10.png";
import Card4 from "media/card11.png";
import card3bg from "media/card3bg.png";
import card2bg from "media/cardDots.png";
import CTAbg from "media/cta-bg2.png";
import Client1 from "media/client-4.png";
import Client2 from "media/client-5.png";
import Client3 from "media/client-6.png";
import OurProduct from "@/components/OurProduct/OurProduct";
import bgShadow from "media/productShadow2.png";
import Profile1 from "media/Profile-1.png";
import Profile2 from "media/Profile-2.png";
import Include1 from "media/icons/include7.png";
import Include2 from "media/icons/include8.png";
import Include3 from "media/icons/include9.png";
import Include4 from "media/icons/include10.png";
import Include5 from "media/icons/include11.png";
import Include6 from "media/icons/include12.png";
import ProductImage from "media/productImage.png";
import ProductImageTwo from "media/productImage2.png";
import ProductImageThree from "media/productImage3.png";
import ProductImageFour from "media/productImage4.png";
import ProductImageFive from "media/productImage5.png";
import ProductImageSix from "media/productImage6.png";
import Industries from "@/components/Industry/Industries";
import TrendingBlog from "@/components/TrendingBlog/TrendingBlog";
import ContactForm from "@/components/ContactForm/ContactForm";
import ExclusiveSquad from "@/components/ExclusiveSquad/ExclusiveSquad";
import Tool from "@/components/Tool/Tool";
import Faqs from "@/components/Faqs/Faqs";
import Included from "@/components/Included/Included";
import Features from "@/components/Features/Features";

const ProductCRMInner = () => {
    // ========== Banner
    const banenrContent = {
        title: (
            <>
                Empowering{" "}
                <span className="relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:z-[-1] before:h-[4px] before:bg-gradient-to-r from-[#A34CD5]  via-[#2C5DEE] to-[#0BEFBA]">
                    Nonprofits{" "}
                </span>{" "}
                with <br className="lg:block hidden" /> Effective Management
                Tools
            </>
        ),
        desc:
            "At ResourcePad, we empower nonprofits to manage donations, engage supporters, and streamline operations, allowing them to focus on their mission.",
        btn: false,
        isTab: false,
        tabContent: "",
        btnText: "Request a Demo",
    };

    // ========== BrandSlider
    const brandsSlider = {
        padding: true,
    };

    // ========== Brand
    const cardData = [
        {
            order: "",
            title: <>Take the Next Step Towards Digital Empowerment</>,
            description:
                "Empower your nonprofit with our end-to-end development, payment processing, and API integration to enhance your impact—contact us to start your digital journey today.",
            image: ServicesBg1,
            bgClass: "!sticky top-[146px]",
            suggestions: [],
            checkContent: [
                "Secure and Seamless Donor Journey",
                "24/7 Live Support",
                "AI Powered Algorithms",
            ],
        },
        {
            order: "",
            title: <>Peerless Commitment to Non-Profits </>,
            description: (
                <>
                    We use a collaborative, step-by-step approach to align your
                    nonprofit’s goals with a clear digital strategy, ensuring
                    your vision is fully realized.
                </>
            ),
            image: ServicesBg2,
            bgClass: "!sticky top-[176px]",
            suggestions: [
                {
                    link: "#href",
                    text: "Simple Donor Journey",
                },
                {
                    link: "#href",
                    text: "Scalable Solutions",
                },
                {
                    link: "#href",
                    text: "Custom Database",
                },
                {
                    link: "#href",
                    text: "Compliance",
                },
                {
                    link: "#href",
                    text: "Data Security",
                },
                {
                    link: "#href",
                    text: "Third-Party Platforms",
                },
                {
                    link: "#href",
                    text: "24/7 Support",
                },
            ],
        },
    ];
    const brandContent = {
        title: "Save time and get more done",
        desc:
            "Supercharge productivity. Streamline work by doing it, and seeing it, in one place.",
        card: cardData,
        btn: false,
        isChecked: true,
        hireTitle: (
            <>
                Hire developers with a{" "}
                <span className="text-[#6B46FF]">proven</span> track record.
            </>
        ),
    };

    // ========== Looking
    const lookingCards = [
        {
            image: Card1,
            cardTitle: "Expertise in Non-Profit Sector",
            cardDesc:
                "Leveraging nonprofit expertise, we create custom solutions that address unique challenges and drive impact.",
            css:
                "relative z-10 h-full flex flex-col items-start justify-start sm:justify-end",
            imageCss: "w-max ml-auto rounded-[20px] z-0",
            descCss: "xl:!w-full lg:pr-12",
            imagePosition: false,
            isBgImage: false,
        },
        {
            image: Card2,
            bgImage: card2bg,
            cardTitle: "Customized Solutions",
            cardDesc:
                "We tailor solutions to your nonprofit’s unique story, needs, and goals, ensuring alignment with your vision and budget.",
            css:
                "relative z-10 h-full flex flex-col items-start justify-start sm:justify-end",
            imageCss: "w-max ml-auto mt-[-50px] image_shadow",
            descCss: "xl:!w-full lg:pr-12",
            imagePosition: false,
            isBgImage: false,
        },
        {
            image: Card3,
            cardTitle: "Reliable and Timely Delivery",
            cardDesc:
                "We deliver timely, high-quality solutions, ensuring your digital tools are ready when you need them most.",
            css:
                "relative z-10 h-full flex flex-col items-start justify-start sm:justify-end",
            imageCss: "object-cover object-center w-max rounded-[20px] z-0",
            descCss: "xl:!w-full lg:pr-12",
            imagePosition: true,
            isBgImage: false,
        },
        {
            image: Card4,
            cardTitle: "Long-Term Support",
            cardDesc:
                "We offer ongoing support to keep your digital solutions secure, updated, and optimized.",
            css: "mt-[30px]",
            imageCss: "",
            descCss: "xl:!w-full",
            imagePosition: false,
            isBgImage: false,
        },
    ];
    const LookingForContent = {
        title: "Why Choose Us",
        desc:
            "When she reached the first hills of the Italic Mountains had a last view back on the skyline.",
        lookingCards: lookingCards,
        topDesc: "Grow revenue with lower costs",
        ctaTitle: (
            <>
                <span className="text-[#886AFF]">AI powered</span> system, that
                automates <br className="lg:block hidden" /> support for your
                customers
                <br className="lg:block hidden" /> and employees.
            </>
        ),
        ctaDesc: "",
        ctaBg: CTAbg,
        counter: false,
    };

    // ========== Included
    const cardContent = [
        {
            icon: Include1,
            cardTitle: "Non-profit Expertise",
            cardDesc:
                "We offer tailored solutions that align with your nonprofit’s goals, backed by our sector expertise.",
        },
        {
            icon: Include2,
            cardTitle: "Budget Friendly Process",
            cardDesc:
                "We provide cost-effective packages tailored to the needs and budgets of nonprofits.",
        },
        {
            icon: Include3,
            cardTitle: "Radically Efficient & Focused",
            cardDesc:
                "We streamline workflows to maximize efficiency and save time and resources.",
        },
        {
            icon: Include4,
            cardTitle: "Collaborative Approach",
            cardDesc:
                "We offer tailored solutions that align with your nonprofit’s goals, backed by our sector expertise.",
        },
        {
            icon: Include5,
            cardTitle: "Timely Project Delivery",
            cardDesc:
                "We provide cost-effective packages tailored to the needs and budgets of nonprofits.",
        },
        {
            icon: Include6,
            cardTitle: "Radically Efficient & Focused",
            cardDesc:
                "We streamline workflows to maximize efficiency and save time and resources.",
        },
    ];

    const IncludedContent = {
        title: <> We’re helping Non-profits <br className="lg:block hidden" /> do their best work</>,
        desc: "",
        css: "pt-[60px] lg:pt-[130px]",
        cardContent: cardContent,
    };

    // ========== Our Client
    const clientsSlider = [
        {
            btn1: "Dashboard",
            btn2: "CRM",
            cardTitle: "Airoflowy",
            cardDesc: "Streaming & media app development platform",
            counterTitle1: "2 phases",
            counterDesc1: (
                <>
                    Already <br className="lg:block hidden" /> completed
                </>
            ),
            counterTitle2: "80%",
            counterDesc2: (
                <>
                    Unit test
                    <br className="lg:block hidden" /> coverage
                </>
            ),
            counterTitle3: "Native-Like",
            counterDesc3: "Performance",
            cardImage: Client1,
        },
        {
            btn1: "Dashboard",
            btn2: "HRM",
            cardTitle: "UIFRY HRM",
            cardDesc: "Streaming & media app development platform",
            counterTitle1: "2 phases",
            counterTitle1: "2 phases",
            counterDesc1: (
                <>
                    Already <br className="lg:block hidden" /> completed
                </>
            ),
            counterTitle2: "80%",
            counterDesc2: (
                <>
                    Unit test
                    <br className="lg:block hidden" /> coverage
                </>
            ),
            counterTitle3: "Native-Like",
            counterDesc3: "Performance",
            cardImage: Client2,
        },
        {
            btn1: "Web App",
            btn2: "POS",
            cardTitle: "CahinPOS",
            cardDesc: "Streaming & media app development platform",
            counterTitle1: "2 phases",
            counterTitle1: "2 phases",
            counterDesc1: (
                <>
                    Already <br className="lg:block hidden" /> completed
                </>
            ),
            counterTitle2: "80%",
            counterDesc2: (
                <>
                    Unit test
                    <br className="lg:block hidden" /> coverage
                </>
            ),
            counterTitle3: "Native-Like",
            counterDesc3: "Performance",
            cardImage: Client3,
        },
        {
            btn1: "Dashboard",
            btn2: "CRM",
            cardTitle: "Airoflowy",
            cardDesc: "Streaming & media app development platform",
            counterTitle1: "2 phases",
            counterDesc1: (
                <>
                    Already <br className="lg:block hidden" /> completed
                </>
            ),
            counterTitle2: "80%",
            counterDesc2: (
                <>
                    Unit test
                    <br className="lg:block hidden" /> coverage
                </>
            ),
            counterTitle3: "Native-Like",
            counterDesc3: "Performance",
            cardImage: Client1,
        },
        {
            btn1: "Dashboard",
            btn2: "HRM",
            cardTitle: "UIFRY HRM",
            cardDesc: "Streaming & media app development platform",
            counterTitle1: "2 phases",
            counterTitle1: "2 phases",
            counterDesc1: (
                <>
                    Already <br className="lg:block hidden" /> completed
                </>
            ),
            counterTitle2: "80%",
            counterDesc2: (
                <>
                    Unit test
                    <br className="lg:block hidden" /> coverage
                </>
            ),
            counterTitle3: "Native-Like",
            counterDesc3: "Performance",
            cardImage: Client2,
        },
        {
            btn1: "Web App",
            btn2: "POS",
            cardTitle: "CahinPOS",
            cardDesc: "Streaming & media app development platform",
            counterTitle1: "2 phases",
            counterTitle1: "2 phases",
            counterDesc1: (
                <>
                    Already <br className="lg:block hidden" /> completed
                </>
            ),
            counterTitle2: "80%",
            counterDesc2: (
                <>
                    Unit test
                    <br className="lg:block hidden" /> coverage
                </>
            ),
            counterTitle3: "Native-Like",
            counterDesc3: "Performance",
            cardImage: Client3,
        },
    ];
    const clients = {
        title: "Our clients lead the way",
        desc:
            "When she reached the first hills of the Italic Mountains had a last view back on the skyline.",
        clientsSlider: clientsSlider,
    };

    // ========== Our Product
    const products = [
        {
            number: "01",
            title: "Discuss your project",
            desc:
                "Meet our expert team and share your vision and goals. This helps us understand your needs deeply to form the perfect dedicated team for your project.",
            subTitle: "How we drive  your success Our process",
            subDesc:
                "Our process is designed to thoroughly understand your needs, ensuring the best possible outcome for both your team and your project.",
        },
        {
            number: "02",
            title: "Build the perfect team",
            desc:
                "We curate a selected team of  professionals with the skills and experience required for your project's success, ensuring the right fit from the start.",
            subTitle: "Build the perfect team",
            subDesc:
                "Our process is designed to thoroughly understand your needs, ensuring the best possible outcome for both your team and your project.",
        },
        {
            number: "03",
            title: "Meet your Dedicated Team",
            desc:
                "We analyze your vision thoroughly to ensure the roadmap is perfectly aligned with your end goals, setting the stage for product success.",
            subTitle: "Meet your Dedicated Team",
            subDesc:
                "Our process is designed to thoroughly understand your needs, ensuring the best possible outcome for both your team and your project.",
        },
        {
            number: "04",
            title: "Keep building",
            desc:
                "Start with a dedicated team focused on your project's goals, ensuring steady progress and avoiding delays from IT backlogs.",
            subTitle: "Keep building",
            subDesc:
                "Our process is designed to thoroughly understand your needs, ensuring the best possible outcome for both your team and your project.",
        },
    ];

    const ourProduct = {
        joinTitle: <>Hire a Developer Today</>,
        joinDesc:
            "When she reached the first hills of the Italic Mountains had a last view back on the skyline.",
        join: true,
        product: products,
        isTitle: false,
        isContent: true,
        isHire: true,
        bgImage: bgShadow,
    };

    // ========== Team Members

    const TeamMembersSliders = [
        {
            slideTitle: "Gary Smith",
            designation: "Back-end Developer",
            slideImage: Profile1,
            slideDesc:
                "As a software developer, I thrive on turning innovative ideas into functional applications. I specialize in crafting seamless user experiences and efficient code. My passion for technology drives me to continuously learn and adapt in this ever-evolving field.",
        },
        {
            slideTitle: "Travis Carter",
            designation: "Software Developer",
            slideImage: Profile1,
            slideDesc:
                "As a software developer, I thrive on turning innovative ideas into functional applications. I specialize in crafting seamless user experiences and efficient code. My passion for technology drives me to continuously learn and adapt in this ever-evolving field.",
        },
        {
            slideTitle: "Stacy Tisdale",
            designation: "Back-end Developer",
            slideImage: Profile2,
            slideDesc:
                "As a software developer, I thrive on turning innovative ideas into functional applications. I specialize in crafting seamless user experiences and efficient code. My passion for technology drives me to continuously learn and adapt in this ever-evolving field.",
        },
        {
            slideTitle: "Jason Strothers",
            designation: "Back-end Developer",
            slideImage: Profile1,
            slideDesc:
                "As a software developer, I thrive on turning innovative ideas into functional applications. I specialize in crafting seamless user experiences and efficient code. My passion for technology drives me to continuously learn and adapt in this ever-evolving field.",
        },
    ];
    const TeamMembersContent = {
        title: "Perfect fit for every team",
        desc:
            "When she reached the first hills of the Italic Mountains had a last view back on the skyline.",
        TeamMembersSliders: TeamMembersSliders,
    };

    // ========== Contact Form Start
    const formContent = {
        title: "Hire Developer Today",
        desc:
            "Partner with us for a digital journey that transforms your business ideas into successful, cutting-edge solutions.",
        inputs: false,
    };

    //===== FAQS =====//
    const accordionData = [
        {
            question:
                "How do I hire a dedicated team of developers from ResourcePad?",
            answer:
                "It's simple! Reach out to us through our contact form, and our team will connect with you to understand your project requirements. We'll then tailor a dedicated team based on your specific needs.",
        },
        {
            question: "What technologies do your developers specialize in?",
            answer:
                "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
        },
        {
            question: "Can I hire developers on a part-time basis?",
            answer:
                "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
        },
        {
            question: "How is the communication managed with the hired team?",
            answer:
                "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
        },
        {
            question:
                "What assurance do I have regarding the quality of work delivered by your team?",
            answer:
                "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
        },
    ];
    const faqs = {
        accordionData: accordionData,
        isprice: false,
    };
    return (
        <>
            <Banner content={banenrContent} />
            <BrandsSlider content={brandsSlider} />
            <Brand content={brandContent} />
            <LookingFor content={LookingForContent} />
            <Included content={IncludedContent} />
            <Features />
            <ContactForm content={formContent} />
        </>
    );
};

export default ProductCRMInner;
