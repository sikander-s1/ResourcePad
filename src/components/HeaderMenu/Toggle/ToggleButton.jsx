import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ToggleButton = ({ toggle }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <button onClick={toggle} className="outline-none border-0 cursor-pointer absolute top-[-30px] lg:top-[3px] right-[20px] lg:right-[-20px] w-[50px] h-[50px] rounded-full bg-transparent flex items-center justify-center z-[9999] !bg-black ">
            <svg width="23" height="23" viewBox="0 0 23 23">
                <motion.path
                    strokeWidth="3"
                    stroke="white"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 2.5 L 20 2.5" },
                        open: { d: "M 3 16.5 L 17 2.5" },
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="white"
                    strokeLinecap="round"
                    d="M 2 9.423 L 12 9.423"
                    variants={{
                        closed: { opacity: 1 },
                        open: { opacity: 0 },
                    }}
                />
                <motion.path
                    strokeWidth="3"
                    stroke="white"
                    strokeLinecap="round"
                    variants={{
                        closed: { d: "M 2 16.346 L 20 16.346" },
                        open: { d: "M 3 2.5 L 17 16.346" },
                    }}
                />
            </svg>
        </button>
    );
};

export default ToggleButton;