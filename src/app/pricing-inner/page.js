"use client"
import React from 'react'
import PricingBanner from '@/components/PricingBanner/PricingBanner'
import OurPlans from '@/components/OurPlans/OurPlans'
import Included from '@/components/Included/Included'
import Faqs from '@/components/Faqs/Faqs'
import Industries from '@/components/Industry/Industries'
import TrendingBlog from '@/components/TrendingBlog/TrendingBlog'
import ContactForm from '@/components/ContactForm/ContactForm'

// Images
import Include1 from "media/icons/include1.png"
import Include2 from "media/icons/include2.png"
import Include3 from "media/icons/include3.png"
import Include4 from "media/icons/include4.png"
import Include5 from "media/icons/include5.png"
import Include6 from "media/icons/include6.png"
import Icons1 from "media/icons/faqs-icon-1.png"
import Icons2 from "media/icons/faqs-icon-2.png"
import Icons3 from "media/icons/faqs-icon-3.png"
import Icons4 from "media/icons/faqs-icon-4.png"
import Icons5 from "media/icons/faqs-icon-5.png"
import Icon1 from "media/icons/tab-icon1.png";
import Icon2 from "media/icons/tab-icon2.png";

const ProductCRMInner = () => {

    // ========== Pricing Banner

    const tabInfo = [
        {
            icon: Icon1,
            label: "For businesses & enterprises",
            index: 0,
        },
        {
            icon: Icon2,
            label: "For individuals & small teams",
            index: 1,
        },
    ];

    const tabContents = [
        {
            productList: [
                "HRMS",
                "CRM",
                "Chat",
                "Invoicing System (POS)",
                "Donation Manage System",
                "LMS",
                "Hotel & Property System",
            ],
            pricingCards: [
                {
                    title: (
                        <>
                            Professional <br className="lg:block hidden" /> Customer Platform
                        </>
                    ),
                    desc: "Comprehensive marketing, sales, customer service, content, and operations software",
                    price: "1,299",
                    isBtn: true,
                    subTitle: "Includes 5 seats",
                    subDisc: "Additional seats start at US$45/mo",
                },
                {
                    title: (
                        <>
                            Enterprise Customer <br className="lg:block hidden" /> Platform
                        </>
                    ),
                    desc: (
                        <>
                            Our most powerful marketing, sales, <br className="xxl:block hidden" /> customer
                            service, content, and operations<br className="xxl:block hidden" /> software
                        </>
                    ),
                    price: "4,300",
                    isBtn: false,
                    subTitle: "Includes 7 seats",
                    subDisc: "Additional seats start at US$75/mo",
                },
            ],
        },
        {
            productList: [
                "Email Marketing",
                "Social Media Tools",
                "Customer Feedback System",
            ],
            pricingCards: [
                {
                    title: <>Starter Pack for Teams</>,
                    desc: "Basic tools to manage team communication and tasks",
                    price: "499",
                    isBtn: true,
                    subTitle: "Includes 3 seats",
                    subDisc: "Additional seats start at US$25/mo",
                },
            ],
        },
    ];

    const Banner = {
        title: <>10-day <span className="relative before:bottom-0 before:left-0 before:z-[-1] before:absolute before:content-[''] before:bg-gradient-to-r from-[#A34CD5] via-[#2C5DEE] to-[#0BEFBA] before:w-full before:h-[4px]"> free trial. </span> <br className="lg:block hidden" /> No credit card required.</>,
        desc: "From startups to enterprises, find the right solution to streamline your HR processes.",
        isPrice: true,
        tabInfo: tabInfo,
        tabContents: tabContents,
    }

    // ========== Included
    const cardContent = [
        {
            icon: Include1,
            cardTitle: "Employee Information",
            cardDesc: "Centralized database for storing employee details, such as personal information."
        },
        {
            icon: Include2,
            cardTitle: "Attendance & Time Tracking",
            cardDesc: "Centralized database for storing employee details, such as personal information."
        },
        {
            icon: Include3,
            cardTitle: "Payroll Management",
            cardDesc: "Centralized database for storing employee details, such as personal information."
        },
        {
            icon: Include4,
            cardTitle: "Performance Management",
            cardDesc: "Centralized database for storing employee details, such as personal information."
        },
        {
            icon: Include5,
            cardTitle: "Recruitment and Onboarding",
            cardDesc: "Centralized database for storing employee details, such as personal information."
        },
        {
            icon: Include6,
            cardTitle: "Training and Development",
            cardDesc: "Centralized database for storing employee details, such as personal information."
        },
    ]

    const IncludedContent = {
        title: "What's included",
        desc: "Get 100+ features out of the box with the world's leading customer insights hub",
        cardContent: cardContent
    }

    //===== FAQS =====//
    const accordionData = [
        {
            question: 'What are the benefits of using your HRMS (Human Resource Management System)?',
            answer: "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
            icons: Icons1
        },
        {
            question: 'How secure is the Donation Management System?',
            answer: "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
            icons: Icons2
        },
        {
            question: 'Can I customize the features of your Chat system?',
            answer: "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
            icons: Icons3
        },
        {
            question: 'Do you offer a free trial of your products?',
            answer: "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
            icons: Icons4
        },
        {
            question: 'How does your Invoicing System (POS) work?',
            answer: "Our HRMS automates key HR tasks like employee management, payroll, time tracking, and recruitment, improving efficiency, reducing administrative workload, and enhancing the employee experience.",
            icons: Icons5
        },
    ];
    const faqs = {
        accordionData: accordionData,
        isprice: false,
    }

    // ========== Contact Form Start
    const formContent = {
        title: "Let's Work Together!",
        desc: "Partner with us for a digital journey that transforms your business ideas into successful, cutting-edge solutions.",
        inputs: false
    }

    return (
        <>
            <PricingBanner content={Banner} />
            <OurPlans />
            <Included content={IncludedContent} />
            <Faqs content={faqs} />
            <Industries />
            <TrendingBlog />
            <ContactForm content={formContent} />
        </>
    )
}

export default ProductCRMInner
