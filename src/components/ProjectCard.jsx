import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project, index, darkMode }) => {
  return (
    <motion.div
      className="project-card glass"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      {project.image && (
        <div className="project-image">
          <img src={project.image} alt={project.title} />
          <div className="project-overlay">
            <div className="project-links">
              {project.github && (
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="icon-link"
                >
                  <FaGithub />
                </motion.a>
              )}
              {project.demo && (
                <motion.a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="icon-link"
                >
                  <FaExternalLinkAlt />
                </motion.a>
              )}
            </div>
          </div>
        </div>
      )}
      
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
          {!project.image && (
            <div className="project-icons">
              {project.github && (
                <motion.a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="project-icon"
                >
                  <FaGithub />
                </motion.a>
              )}
              {project.demo && (
                <motion.a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="project-icon"
                >
                  <FaExternalLinkAlt />
                </motion.a>
              )}
            </div>
          )}
        </div>
        
        <p className="project-description">{project.description}</p>
        
        <div className="project-tags">
          {project.tags?.map((tag, i) => (
            <motion.span 
              key={i} 
              className="tech-tag"
              whileHover={{ scale: 1.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        <motion.div
          className="project-link-wrapper"
          whileHover={{ x: 5 }}
        >
          <Link to={project.link} className="btn-primary">
            View Details <FaExternalLinkAlt size={14} />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;