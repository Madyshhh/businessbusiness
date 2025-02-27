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
      className="column is-3"
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div className="card has-text-centered" style={{ height: '100%' }}>
        <div className="card-content">
          {icon}
          <h3 className="title is-4 is-centered has-text-centered">{title}</h3>
          <p className='has-text-centered'>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesBox;