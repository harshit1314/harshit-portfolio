import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', darkMode }) {
  return (
    <motion.div 
      className={`glass-card ${className} ${darkMode ? 'dark' : 'light'}`}
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}
