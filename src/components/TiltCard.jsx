// components/TiltCard.jsx
import { motion } from 'framer-motion';

const TiltCard = ({ children }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        rotateX: 5,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
      }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="tilt-card"
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;