// components/FloatingElements.jsx
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingElements = () => {
  const elements = [
    { icon: '⚛️', size: 40 },
    { icon: '🚀', size: 50 },
    { icon: '💻', size: 45 },
    { icon: '🔗', size: 35 },
  ];

  return (
    <div className="floating-elements">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="floating-element"
          initial={{ y: 0, x: Math.random() * 100 - 50 }}
          animate={{
            y: [0, 50, 0],
            x: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
          style={{
            fontSize: `${el.size}px`,
            left: `${10 + Math.random() * 80}%`,
            top: `${10 + Math.random() * 80}%`,
          }}
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;