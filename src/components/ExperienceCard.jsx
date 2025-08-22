import { motion } from 'framer-motion';
import GlassCard from './GlassCard';

const ExperienceCard = ({ darkMode }) => {
  const experience = {
    company: "Koloq.ai",
    position: "AI and Full Stack Developer Intern",
    period: "July 2025 - Present", // Fixed typo here
    achievements: [
      "Developed and integrated AI-driven features within web applications, combining MERN stack expertise with Generative AI tools.",
      "Researched and applied agentic AI, LangChain, and cloud platforms (AWS, Docker) to enhance application scalability and intelligence.",
      "Collaborated with cross-functional teams to design and test innovative AI-powered solutions, improving efficiency and user engagement.",
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