import { motion } from 'framer-motion';
import { FaCode, FaTools, FaDatabase, FaCloud } from 'react-icons/fa';

const SkillsSection = ({ darkMode }) => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      skills: [
        "React.js",
        "JavaScript (ES6+)", 
        "HTML5 & CSS3",
        "Tailwind CSS",
        "Framer Motion"
      ]
    },
    {
      title: "Backend Development",
      icon: <FaTools />,
      skills: [
        "Node.js",
        "Express.js",
        "Java", 
        "Python",
        "C/C++"
      ]
    },
    {
      title: "Database & Storage",
      icon: <FaDatabase />,
      skills: [
        "MongoDB",
        "MySQL",
        "Firebase",
        "Redis"
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <FaCloud />,
      skills: [
        "Git & GitHub",
        "Docker", 
        "AWS",
        "Postman",
        "VS Code"
      ]
    }
  ];

  return (
    <section className="skills-section">
      <div className="container">
        <div className="section-header">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Technologies and tools I work with to bring ideas to life
          </motion.p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="skill-category-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="category-header">
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
              </div>
              
              <div className="skills-badges">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-badge"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: (categoryIndex * 0.1) + (skillIndex * 0.05)
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      rotate: [0, -1, 1, 0],
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className="skills-summary glass"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="summary-text">
            🚀 <strong>Always learning</strong> and staying updated with the latest technologies.
            Currently exploring <strong>AI/ML integration</strong> and <strong>cloud-native development</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;