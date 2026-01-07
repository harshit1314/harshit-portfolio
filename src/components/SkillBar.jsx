import { motion } from 'framer-motion';

const SkillBar = ({ name, level, delay = 0, darkMode }) => {
  return (
    <motion.div 
      className="skill-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-bar-container">
        <motion.div
          className="skill-bar-background"
        >
          <motion.div
            className="skill-bar-fill"
            initial={{ width: 0 }}
            whileInView={{ width: `${level}%` }}
            viewport={{ once: true }}
            transition={{ 
              duration: 1.2, 
              delay: delay + 0.2, 
              ease: "easeOut" 
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillBar;