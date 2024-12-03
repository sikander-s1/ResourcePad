"use client"
import React from 'react'
import PricingBanner from '@/components/PricingBanner/PricingBanner'
import OurPlans from '@/components/OurPlans/OurPlans'
import Included from '@/components/Included/Included'
import Faqs from '@/components/Faqs/Faqs'

// Images
import Include1 from "media/assets/images/icons/include1.png"
import Include2 from "media/assets/images/icons/include2.png"
import Include3 from "media/assets/images/icons/include3.png"
import Include4 from "media/assets/images/icons/include4.png"
import Include5 from "media/assets/images/icons/include5.png"
import Include6 from "media/assets/images/icons/include6.png"
import Icons1 from "media/assets/images/icons/faqs-icon-1.png"
import Icons2 from "media/assets/images/icons/faqs-icon-2.png"
import Icons3 from "media/assets/images/icons/faqs-icon-3.png"
import Icons4 from "media/assets/images/icons/faqs-icon-4.png"
import Icons5 from "media/assets/images/icons/faqs-icon-5.png"
import ContactForm from '@/components/ContactForm/ContactForm'
import Industries from '@/components/Industry/Industries'
import TrendingBlog from '@/components/TrendingBlog/TrendingBlog'

const ProductCRMInner = () => {

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
    }

    // ========== Contact Form Start
    const formContent = {
        title: "Let's Work Together!",
        desc: "Partner with us for a digital journey that transforms your business ideas into successful, cutting-edge solutions.",
        inputs: false
    }

    return (
        <>
            <PricingBanner />
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
