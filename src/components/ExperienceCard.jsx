import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';

const ExperienceCard = ({ darkMode }) => {
  const experiences = [
    {
      company: "Koloq.ai",
      position: "AI and Full Stack Developer Intern",
      period: "July 2025 - Present",
      location: "Remote / India",
      achievements: [
        "Developed and integrated AI-driven features within web applications using MERN stack and Generative AI tools.",
        "Researched and applied agentic AI, LangChain, and cloud platforms (AWS, Docker) for scalable intelligence.",
        "Collaborated with cross-functional teams to design and test innovative AI-powered solutions.",
      ]
    }
  ];

  return (
    <div className="experience-container">
      {experiences.map((exp, idx) => (
        <motion.div
          key={idx}
          className="experience-card glass"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: idx * 0.2 }}
        >
          <div className="experience-badge">Work Experience</div>

          <div className="experience-content-wrapper">
            <div className="company-logo-area">
              <div className="company-icon-circle">
                <FiBriefcase />
              </div>
              <div className="timeline-connector"></div>
            </div>

            <div className="experience-details">
              <div className="experience-main-info">
                <div className="title-group">
                  <h3 className="company-name">{exp.company}</h3>
                  <p className="position-title">{exp.position}</p>
                </div>
                <div className="meta-info">
                  <span className="info-item">
                    <FiCalendar className="icon" /> {exp.period}
                  </span>
                  <span className="info-item">
                    <FiMapPin className="icon" /> {exp.location}
                  </span>
                </div>
              </div>

              <div className="experience-achievements">
                {exp.achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    className="achievement-row"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (index * 0.1) }}
                  >
                    <FiCheckCircle className="check-icon" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceCard;