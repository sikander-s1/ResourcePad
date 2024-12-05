"use client"
import React from 'react'
import PricingBanner from '@/components/PricingBanner/PricingBanner'
import OurPlans from '@/components/OurPlans/OurPlans'
import Included from '@/components/Included/Included'
import Faqs from '@/components/Faqs/Faqs'
import ContactForm from '@/components/ContactForm/ContactForm'
import Industries from '@/components/Industry/Industries'
import TrendingBlog from '@/components/TrendingBlog/TrendingBlog'
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
import Icon1 from "media/icons/tab-icon3.png";
import Icon2 from "media/icons/tab-icon4.png";
import Icon3 from "media/icons/tab-icon5.png";
import Book1 from "media/Book-1.png"
import Book2 from "media/Book-2.png"
import Book3 from "media/Book-3.png"
import Book4 from "media/Book-4.png"
import Event1 from "media/event-1.png"
import Event2 from "media/event-2.png"
import Event3 from "media/event-3.png"
import Blog1 from "media/trending-1.png"
import Blog2 from "media/trending-2.png"
import Blog3 from "media/trending-3.png"

const ProductCRMInner = () => {

    // ========== Pricing Banner

    const tabInfo = [
        {
            icon: Icon1,
            label: "Ebooks & Reports",
            index: 0,
        },
        {
            icon: Icon2,
            label: "Events",
            index: 1,
        },
        {
            icon: Icon3,
            label: "Blogs",
            index: 2,
        },
    ];

    const tabContents = [
        [
            {
                subTitle: "Ebooks & Reports",
                subDesc: "Everything you need to scale your business, bundled together and discounted.",
                bookList: [Book1, Book2, Book3, Book4],
                css: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-[50px] lg:pb-[80px]',
                isBlog: false,
            },
            {
                subTitle: "Our Events recordings",
                subDesc: "Everything you need to scale your business, bundled together and discounted.",
                bookList: [Event1, Event2, Event3],
                css: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[50px] lg:pb-[80px]',
                isBlog: false,
            },
            {
                subTitle: "Our Trending Blogs",
                subDesc: "Proud to serve as the innovation partner for industry leaders who have experienced.",
                blogs: [
                    {
                        image: Blog1,
                        blogTitle: "Maximizing Efficiency The Role of CRM",
                        blogDesc: "Explore how CRM systems enhance customer relationships and boost sales.",
                    },
                    {
                        image: Blog2,
                        blogTitle: "Why Every Business Needs an HRMS",
                        blogDesc: "Discuss the benefits of using HRMS for managing employee data, payroll, and performance.",
                    },
                    {
                        image: Blog3,
                        blogTitle: "The Importance of Integrated Chat Solutions",
                        blogDesc: "Highlight how chat tools improve team collaboration and customer engagement.",
                    },
                ],
                isBlog: true,
                css: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[50px] lg:pb-[80px]',
            },
        ],
        [
            {
                subTitle: "Ebooks & Reports",
                subDesc: "Everything you need to scale your business, bundled together and discounted.",
                bookList: [Book2, Book1, Book4, Book3],
                css: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-[50px] lg:pb-[80px]',
                isBlog: false,
            },
            {
                subTitle: "Our Events recordings",
                subDesc: "Everything you need to scale your business, bundled together and discounted.",
                bookList: [Event1, Event2, Event3],
                css: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[50px] lg:pb-[80px]',
                isBlog: false,
            },
            {
                subTitle: "Our Trending Blogs",
                subDesc: "Proud to serve as the innovation partner for industry leaders who have experienced.",
                blogs: [
                    {
                        image: Blog1,
                        blogTitle: "Maximizing Efficiency The Role of CRM",
                        blogDesc: "Explore how CRM systems enhance customer relationships and boost sales.",
                    },
                    {
                        image: Blog2,
                        blogTitle: "Why Every Business Needs an HRMS",
                        blogDesc: "Discuss the benefits of using HRMS for managing employee data, payroll, and performance.",
                    },
                    {
                        image: Blog3,
                        blogTitle: "The Importance of Integrated Chat Solutions",
                        blogDesc: "Highlight how chat tools improve team collaboration and customer engagement.",
                    },
                ],
                isBlog: true,
                css: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[50px] lg:pb-[80px]',
            },
        ],
        [
            {
                subTitle: "Ebooks & Reports",
                subDesc: "Everything you need to scale your business, bundled together and discounted.",
                bookList: [Book1, Book2, Book3, Book4],
                css: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-[50px] lg:pb-[80px]',
                isBlog: false,
            },
            {
                subTitle: "Our Events recordings",
                subDesc: "Everything you need to scale your business, bundled together and discounted.",
                bookList: [Event1, Event2, Event3],
                css: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[50px] lg:pb-[80px]',
                isBlog: false,
            },
            {
                subTitle: "Our Trending Blogs",
                subDesc: "Proud to serve as the innovation partner for industry leaders who have experienced.",
                blogs: [
                    {
                        image: Blog1,
                        blogTitle: "Maximizing Efficiency The Role of CRM",
                        blogDesc: "Explore how CRM systems enhance customer relationships and boost sales.",
                    },
                    {
                        image: Blog2,
                        blogTitle: "Why Every Business Needs an HRMS",
                        blogDesc: "Discuss the benefits of using HRMS for managing employee data, payroll, and performance.",
                    },
                    {
                        image: Blog3,
                        blogTitle: "The Importance of Integrated Chat Solutions",
                        blogDesc: "Highlight how chat tools improve team collaboration and customer engagement.",
                    },
                ],
                isBlog: true,
                css: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-[50px] lg:pb-[80px]',
            },
        ],
    ];

    const Banner = {
        title: <>Explore Our <span className="relative before:bottom-0 before:left-0 before:z-[-1] before:absolute before:content-[''] before:bg-gradient-to-r from-[#A34CD5] via-[#2C5DEE] to-[#0BEFBA] before:w-full before:h-[4px]"> Product </span> <br className="lg:block hidden" /> Resources</>,
        desc: "Ebooks, infographics, event recordings and more: use our downloadable materials to gain valuable tech and business insights",
        isPrice: false,
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
            <ContactForm content={formContent} />
        </>
    )
}

export default ProductCRMInner
