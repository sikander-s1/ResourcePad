import { useRef, useState } from "react";
import { motion, useCycle } from "framer-motion";
import Links from "../links/Link";
import ToggleButton from "../Toggle/ToggleButton";
import { useDimensions } from "./useDimension";

const variants = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
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
    const { height } = useDimensions(containerRef);
    return (
        <motion.div className={`absolute top-0 right-0 bottom-0 h-screen w-full ${isOpen ? 'z-[999999]' : 'z-0'}`} initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef} >
            <motion.div className={`bg absolute top-0 right-0 bottom-0 bg-black w-full ${isOpen ? 'z-[9999]' : 'z-[-1]'}`} variants={variants}>
                <Links />
            </motion.div>
            <ToggleButton toggle={() => toggleOpen()} />
        </motion.div>
    );
};

export default Sidebar;