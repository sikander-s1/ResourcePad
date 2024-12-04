"use client"
import React from 'react'
import { usePathname } from 'next/navigation';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
// Global CSS =================
import "./globals.css";

const ConditionalLayout = ({ children }) => {
    const pathname = usePathname();
    return (
        <>
            {
                <Header />
            }
            {children}
            {
                <Footer />
            }
        </>
    )
}

export default ConditionalLayout
