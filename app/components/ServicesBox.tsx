import React from 'react';
import { motion } from 'framer-motion';

interface ServicesBoxProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServicesBox: React.FC<ServicesBoxProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <motion.div
      className="column is-4-desktop is-6-tablet is-12-mobile"
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="card has-text-centered" style={{height: '100%', minHeight: "300px", background: "linear-gradient(to bottom right, hsla(23, 92.10%, 50.20%, 0.10),  hsla(224, 100.00%, 49.60%, 0.10) )" }}>
        <div className="card-content">
          {icon}
          <h3 className="title is-5 is-centered has-text-centered">{title}</h3>
          <p className='has-text-centered'>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesBox;