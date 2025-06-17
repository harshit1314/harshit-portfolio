import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project, index, darkMode }) => {
  return (
    <motion.div
      className={`project-card ${darkMode ? 'dark' : 'light'}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="project-tag">{tag}</span>
        ))}
      </div>
      <Link to={project.link} className="project-link">
        View Details →
      </Link>
    </motion.div>
  );
};

export default ProjectCard;