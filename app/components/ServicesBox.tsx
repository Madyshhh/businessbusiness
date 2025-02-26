import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ServicesBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  speed?: number; // Optional speed prop for parallax effect
  initialX?: number; // Initial X position for animation
  initialOpacity?: number; // Initial opacity for animation
  transitionDuration?: number; // Duration of the transition
}

const ServicesBox: React.FC<ServicesBoxProps> = ({
  icon,
  title,
  description,
  speed = 1,
  initialX = -100,
  initialOpacity = 0,
  transitionDuration = 0.8,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Starts when entering, ends when leaving
  });

  // Parallax effect: moves at different speeds based on scroll position
  const translateX = useTransform(scrollYProgress, [0, 1], [speed * 50, -speed * 50]);

  return (
    <motion.div
      ref={ref}
      style={{
        x: translateX, // Apply parallax effect
      }}
      initial={{ opacity: initialOpacity, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: transitionDuration }}
      viewport={{ once: true, amount: 0.2 }}
      className="column is-4"
    >
      <motion.div
        initial={{ opacity: initialOpacity, x: initialX }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: transitionDuration * 1.5 }} // Slower transition for contents
        viewport={{ once: true, amount: 0.2 }}
        className="box is-flex is-flex-direction-column is-align-items-center"
        style={{ gap: '10px' }}
      >
        {icon}
        <h3 className="title is-4 is-centered has-text-centered">{title}</h3>
        <p className='has-text-centered'>{description}</p>
      </motion.div>
    </motion.div>
  );
};

export default ServicesBox;