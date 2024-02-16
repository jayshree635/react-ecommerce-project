import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";
import "./marquee.css";
// 2. Defining Variants
const marqueeVariants = {
    animate: {
        x: [0, -1000],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
            },
        },
    },
};

const Marquee = () => {
    return (
        <div>
            <div className="marquee">
                {/* 3. Using framer motion */}
                <motion.div
                    className="track"
                    variants={marqueeVariants}
                    animate="animate"
                >
                    <h1>
                        E-commerce
                    </h1>
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;