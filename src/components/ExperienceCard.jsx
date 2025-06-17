import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const ExperienceCard = ({ darkMode }) => {
  const experience = {
    company: "EduSkills",
    position: "Full Stack Developer Intern",
    period: "Oct - Dec 2024",
    achievements: [
      "Engineered full-stack apps with HTML/CSS, JavaScript, Node.js, MongoDB and React",
      "Optimized backend efficiency by 30% and UI responsiveness by 40%",
      "Reduced database latency by 25% through query optimization",
      
    ]
  };

  return (
    <GlassCard darkMode={darkMode}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="experience-header">
          <h3>{experience.company}</h3>
          <span className="period">{experience.period}</span>
        </div>
        <p className="position">{experience.position}</p>
        <ul className="achievements">
          {experience.achievements.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </GlassCard>
  );
};

export default ExperienceCard;
