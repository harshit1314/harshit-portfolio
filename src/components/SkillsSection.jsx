import { motion } from 'framer-motion';
import SkillBar from './SkillBar';

const SkillsSection = ({ darkMode }) => {
  const technicalSkills = [
    { name: "Java", level: 90 },
    { name: "Express.js", level: 85 },
    { name: "C", level: 80 },
    { name: "React.js", level: 88 },
    { name: "Node.js", level: 82 },
    { name: "JavaScript", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Python", level: 50 }
  ];

  const tools = [
    { name: "Git/GitHub", level: 90 },
    // { name: "Docker", level: 70 },
    // { name: "JIRA", level: 80 },
    // { name: "CI/CD", level: 75 },
    // { name: "Postman", level: 85 }
  ];

  return (
    <section id="skills" className="skills-section">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title" 
      >
        Technical Skills
      </motion.h2>

      <div className="skills-categories">
        <motion.div 
          className="skills-category"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Programming & Frameworks</h3>
          <div className="skills-list">
            {technicalSkills.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
                darkMode={darkMode}
              />
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="skills-category"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3>Tools & Platforms</h3>
          <div className="skills-list">
            {tools.map((skill, index) => (
              <SkillBar 
                key={index}
                name={skill.name}
                level={skill.level}
                delay={index * 0.1}
                darkMode={darkMode}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;