import { useEffect, useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import Links from "../links/Link";
import ToggleButton from "../Toggle/ToggleButton";
import { useDimensions } from "./useDimension";

const variants = {
    open: (height = 1200) => ({
        clipPath: `circle(${height * 2 + 200}px at 50px 50px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2,
        },
    }),
    closed: {
        clipPath: "circle(30px at var(--clip-path-position))",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40,
        },
    },
};
const Sidebar = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <motion.div className={`flex flex-col items-center justify-center bg-black text-white h-full`}
            animate={isOpen ? "open" : "closed"}
            ref={containerRef} >
            <motion.div className={`bg z-[999] top-0 left-0 bottom-0 w-full bg-black  ${isScrolled ? "absolute" : "fixed"
                }`} variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton toggle={() => toggleOpen()} />
        </motion.div>
    );
};

export default Sidebar;