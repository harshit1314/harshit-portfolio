import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaStar } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';
import SkillBar from '../components/SkillBar';
import ProjectCard from '../components/ProjectCard';
import EducationTimeline from '../components/EducationTimeline';
import ExperienceCard from '../components/ExperienceCard';
import AchievementGrid from '../components/AchievementGrid';
import SkillsSection from '../components/SkillsSection';
const Home = ({ darkMode }) => {
  const projects = [
    {
      title: "Chatapp",
      description: "Real-time chat application",
      tags: ["React", "Node.js", "WebSocket", "JWT", "MongoDB"],
      link: "/projects/chatapp"
    },
    {
      title: "Crypto Tracker",
      description: "Live cryptocurrency dashboard",
      tags: ["React", "Firebase", "Chart.js"],
      link: "/projects/crypto"
    },
      {
    title: "Unnati Renewables – Solar Energy Solutions",
    description: "Responsive solar panel website with contact form, chatbot, and CRM pages",
    tags: ["React", "Tailwind CSS", "Framer Motion"],
    link: "/projects/unnati"
  }
  ];

  const skills = [
    { name: "Java", level: 90 },
    { name: "React", level: 85 },
    { name: "Spring Boot", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "MySQL", level: 70 }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-container"
    >
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Harshit Agarwal</span>
          </h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Full Stack Developer | UI Specialist
          </motion.p>
          
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a 
              href="#projects" 
              className="primary-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </a>
            <div className="social-links">
              <a href="https://github.com/harshit1314" target="_blank" rel="noopener noreferrer">
                <FaGithub className="social-icon" />
              </a>
              <a href="https://linkedin.com/in/harshit1314" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="social-icon" />
              </a>
              <a href="mailto:harshitagarwal038@gmail.com">
                <FaEnvelope className="social-icon" />
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <FaArrowDown />
          <span>Scroll to explore</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <GlassCard darkMode={darkMode}>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Passionate full-stack developer with expertise in Java, Javascript, HTML/CSS, Node.js, Express.js and React. 
            I create efficient, scalable applications with intuitive user interfaces.
          </motion.p>
        </GlassCard>
      </section>

      {/* Skills Section */}
      { <section id="skills" className="section">
      <SkillsSection darkMode={darkMode} />
      </section> }

      {/* Experience Section */}
      <section id="experience" className="section">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <ExperienceCard darkMode={darkMode} />
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>
        <EducationTimeline darkMode={darkMode} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
              darkMode={darkMode}
            />
          ))}
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.h2>
        <AchievementGrid darkMode={darkMode} />
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <GlassCard darkMode={darkMode} className="contact-card">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let's Connect
          </motion.h2>
          <motion.div
            className="contact-content"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a href="mailto:harshitagarwal038@gmail.com" className="contact-link">
              <FaEnvelope /> harshitagarwal038@gmail.com
            </a> <br />
            <a href="tel:+918384835981" className="contact-link">
  <FaStar className="star-icon" /> 
  <span>+91 8384835981</span>
</a>
          </motion.div>
        </GlassCard>
      </section>
    </motion.div>
  );
};

export default Home;