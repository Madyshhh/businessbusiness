
"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function useParallax(value: MotionValue<number>, distance: number) {
    return useTransform(value, [0, 1], [-distance, distance]); // Map scroll progress to parallax distance
}

export default function ParallaxSection({ id, imageSrc, title, subtitle, content }: { id: number, imageSrc: string, title: string, subtitle: string, content: string }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const imageY = useParallax(scrollYProgress, 150); // Adjust as needed
    const textY = useParallax(scrollYProgress, 50); // Adjust as needed

    return (
        <section
            style={{
                height: "100vh",
                scrollSnapAlign: "start",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {imageSrc && (
                <motion.div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
                        y: imageY,
                    }}
                >
                    <img
                        src={imageSrc}
                        alt={title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </motion.div>
            )}

            <div
                ref={ref}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,
                    textAlign: "center",
                    color: "white", // Example color
                }}
            >
                <motion.h2
                    style={{
                        y: textY,
                        fontSize: "2.5rem",
                        fontWeight: "bold",
                        marginBottom: "0.5rem",
                    }}
                >
                    {title}
                </motion.h2>
                {subtitle && (
                    <motion.h3
                        style={{
                            y: textY,
                            fontSize: "1.5rem",
                            marginBottom: "1rem",
                        }}
                    >
                        {subtitle}
                    </motion.h3>
                )}
                <motion.p
                    style={{
                        y: textY,
                        fontSize: "1rem",
                        maxWidth: "600px",
                        margin: "0 auto",
                    }}
                >
                    {content}
                </motion.p>
            </div>
        </section>
    );
}

