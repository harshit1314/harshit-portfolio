import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown, FaStar } from 'react-icons/fa';
import GlassCard from '../components/GlassCard';
import ProjectCard from '../components/ProjectCard';
import EducationTimeline from '../components/EducationTimeline';
import ExperienceCard from '../components/ExperienceCard';
import AchievementGrid from '../components/AchievementGrid';
import SkillsSection from '../components/SkillsSection';
const Home = ({ darkMode }) => {
  const projects = [
    {
      title: "Real-Time Chat Application",
      description: "Full-featured chat app with real-time messaging, user authentication, file sharing, and group conversations. Built with modern web technologies for optimal performance.",
      tags: ["React", "Node.js", "Socket.io", "JWT", "MongoDB", "Express"],
      link: "/projects/chatapp",
      github: "https://github.com/harshit1314/chatapp",
      demo: "#"
    },
    {
      title: "Cryptocurrency Tracker",
      description: "Interactive dashboard for tracking live cryptocurrency prices with advanced charts, portfolio management, and market analysis. Features real-time data updates and price alerts.",
      tags: ["React", "Firebase", "Chart.js", "CoinGecko API", "Material-UI"],
      link: "/projects/crypto",
      github: "https://github.com/harshit1314/crypto-tracker",
      demo: "#"
    },
    {
      title: "Unnati Renewables - Solar Solutions",
      description: "Modern, responsive website for solar energy company featuring interactive contact forms, AI-powered chatbot, CRM integration, and dynamic content management system.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Node.js", "CRM Integration"],
      link: "/projects/unnati",
      github: "https://github.com/harshit1314/unnati-renewables",
      demo: "#"
    }
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
        <div className="hero-overlay"></div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="hero-content"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="hero-badge"
          >
            Available for new opportunities 🚀
          </motion.div>

          <h1 className="hero-title">
            Hi, I'm <span className="name-highlight">Harshit Agarwal</span>
          </h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Full Stack Developer & AI Enthusiast
          </motion.p>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Crafting high-performance digital experiences with modern technologies.
            Specializing in building scalable web applications and AI-driven solutions.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <div className="hero-cta-group">
              <motion.a
                href="#projects"
                className="btn btn-primary"
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Portfolio
              </motion.a>
              <motion.a
                href="#contact"
                className="btn btn-secondary"
                whileHover={{ y: -5, background: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Talk
              </motion.a>
            </div>

            <div className="social-links">
              <motion.a
                href="https://github.com/harshit1314"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                title="GitHub"
              >
                <FaGithub className="social-icon" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/harshit1314"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                title="LinkedIn"
              >
                <FaLinkedin className="social-icon" />
              </motion.a>
              <motion.a
                href="mailto:harshitagarwal038@gmail.com"
                whileHover={{ y: -5 }}
                title="Email"
              >
                <FaEnvelope className="social-icon" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 1 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
          }}
        >
          <FaArrowDown />
          <span>Explore</span>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              About Me
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Passionate developer crafting digital experiences
            </motion.p>
          </div>

          <div className="about-content">
            <motion.div
              className="about-card glass"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="about-text">
                <h3>Hello World! 👋</h3>
                <p>
                  I'm Harshit Agarwal, a passionate <strong>Full Stack Developer</strong> and <strong>UI Specialist</strong>
                  with expertise in modern web technologies. I love creating efficient, scalable applications with
                  intuitive user interfaces that solve real-world problems.
                </p>
                <p>
                  With a strong foundation in <strong>Java</strong>, <strong>JavaScript</strong>, and the <strong>MERN stack</strong>,
                  I bring ideas to life through clean code and thoughtful design. Currently expanding my knowledge
                  in AI and machine learning to build smarter applications.
                </p>
                <div className="about-highlights">
                  <div className="highlight-item">
                    <span className="highlight-number">600+</span>
                    <span className="highlight-text">LeetCode Problems</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">10+</span>
                    <span className="highlight-text">Live Projects</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-number">Cert.</span>
                    <span className="highlight-text">Full Stack AI</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <SkillsSection darkMode={darkMode} />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <div className="section-header">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Professional Experience
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Building innovative solutions with cutting-edge technology
            </motion.p>
          </div>
          <ExperienceCard darkMode={darkMode} />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <div className="section-header">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Educational Background
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My academic journey and continuous learning path
            </motion.p>
          </div>
          <EducationTimeline darkMode={darkMode} />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Showcasing my latest work and technical expertise
            </motion.p>
          </div>
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
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section">
        <div className="container">
          <div className="section-header">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Achievements & Certifications
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Recognition for technical excellence and continuous learning
            </motion.p>
          </div>
          <AchievementGrid darkMode={darkMode} />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              className="section-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ready to collaborate? Let's build something amazing together!
            </motion.p>
          </div>

          <div className="contact-grid">
            <motion.div
              className="contact-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <h3>Email Me</h3>
              <p>Drop me a line and I'll get back to you soon!</p>
              <motion.a
                href="mailto:harshitagarwal038@gmail.com"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                harshitagarwal038@gmail.com
              </motion.a>
            </motion.div>

            <motion.div
              className="contact-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="contact-icon">
                <FaLinkedin />
              </div>
              <h3>LinkedIn</h3>
              <p>Let's connect professionally and expand our network!</p>
              <motion.a
                href="https://linkedin.com/in/harshit1314"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Connect on LinkedIn
              </motion.a>
            </motion.div>

            <motion.div
              className="contact-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="contact-icon">
                <FaGithub />
              </div>
              <h3>GitHub</h3>
              <p>Check out my code and contribute to open source!</p>
              <motion.a
                href="https://github.com/harshit1314"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on GitHub
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="contact-cta"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p className="contact-message">
              📞 <strong>Phone:</strong> +91 8384835981 | 🏠 <strong>Location:</strong> India
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;