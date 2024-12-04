"use client"
import React from 'react'
import ContactForm from '@/components/ContactForm/ContactForm'
import ContactBanner from '@/components/ContactBanner/ContactBanner'
import ReachUs from '@/components/ReachUs/ReachUs'
import Faqs from '@/components/Faqs/Faqs'
// Images
import Icons1 from "media/icons/faqs-icon-1.png"
import Icons2 from "media/icons/faqs-icon-2.png"
import Icons3 from "media/icons/faqs-icon-3.png"
import Icons4 from "media/icons/faqs-icon-4.png"
import Icons5 from "media/icons/faqs-icon-5.png"

const ProductCRMInner = () => {
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
        isprice: true,
    }

    // ========== Contact Form Start
    const formContent = {
        title: "Stay Connected",
        desc: "Sign up for our newsletter to stay updated on the latest product releases, updates, and offers.",
        inputs: true
    }
    return (
        <>
            <ContactBanner />
            <ReachUs />
            <Faqs content={faqs} />
            <ContactForm content={formContent} />
        </>
    )
}

export default ProductCRMInner
