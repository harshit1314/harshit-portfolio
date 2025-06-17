import { motion } from 'framer-motion';

const SkillBar = ({ name, level, delay = 0, darkMode }) => {
  return (
    <div className="skill-item">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-percent">{level}%</span>
      </div>
      <div className="skill-bar-container">
        <motion.div
          className={`skill-level ${darkMode ? 'dark' : 'light'}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;