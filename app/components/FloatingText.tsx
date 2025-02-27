import * as motion from "motion/react-client";
import { ElementType, ReactNode } from "react";

interface FloatingTextProps {
    text?: string;
    as?: ElementType;
    children?: ReactNode;
    duration?: number; // Add duration prop
}

export default function FloatingText({ text, as: Component = "div", children, duration = 0.5 }: FloatingTextProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -100 }} // Initial position (invisible, shifted left)
            whileInView={{ opacity: 1, x: 0 }} // When the element is in view (fully visible, at its position)
            transition={{ duration }} // Use the duration prop
        >
            {text ? <Component>{text}</Component> : children}
        </motion.div>
    );
};