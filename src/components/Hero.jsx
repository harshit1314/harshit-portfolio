import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Hero({ darkMode }) {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="highlight">Harshit Agarwal</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="subtitle"
        >
          Full Stack Developer & UI Enthusiast
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="hero-links"
        >
          <a 
            href="https://linkedin.com/in/harshit1314" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaLinkedin className="icon" />
            <span>LinkedIn</span>
          </a>
          <a 
            href="https://github.com/harshit1314" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub className="icon" />
            <span>GitHub</span>
          </a>
          <a 
            href="mailto:harshitagarwal038@gmail.com" 
            className="social-link"
          >
            <FaEnvelope className="icon" />
            <span>Email</span>
          </a>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="scroll-indicator"
        >
          <span>Scroll Down</span>
          <div className="arrow-down"></div>
        </motion.div>
      </div>
    </section>
  );
}