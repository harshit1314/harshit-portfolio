// ProjectDetails.jsx
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 'chatapp',
    title: 'Chat App',
    description: 'Built a real-time chat application with authentication and AI-powered responses for engaging user interactions.',
    details: [
      'Implemented JWT authentication for secure user login and authorization',
      'Engineered real-time chat functionality leveraging WebSockets',
      'Integrated conversational AI for dynamic and context-aware responses',
      'Developed a responsive UI with React and Tailwind CSS for seamless UX',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'WebSocket', 'JWT', 'Tailwind CSS', 'MongoDB'],
    impact: 'Enabled instant messaging with AI assistance, improving engagement and usability for end-users',
  },
  {
    id: 'primeai',
    title: 'PRIME AI - Fitness Platform',
    description: 'Developed a full-stack web application to provide personalized workout and diet plans.',
    details: [
      'Built responsive UI using React and created REST APIs using Node.js and Express.js',
      'Integrated Gemini API to generate dynamic recommendations based on user inputs',
      'Managed user data using MongoDB with clean schema design and efficient queries',
      'Improved response efficiency by 30% through optimization of backend and API flow',
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'MERN Stack'],
    impact: 'Delivered personalized fitness recommendations with a 30% improvement in response efficiency.',
  },
  {
    id: 'unnati',
    title: 'Unnati Renewables – Solar Energy Solutions',
    description: 'Designed and developed a responsive website for a solar energy company using React.js and Tailwind CSS.',
    details: [
      'Built modular React components with Tailwind CSS for clean UI/UX',
      'Integrated contact form, embedded map, and chatbot for customer engagement',
      'Created pages for services, pricing, CRM, and more with mobile-first design',
      'Optimized performance and accessibility for fast load times and SEO',
    ],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Responsive Design'],
    impact: 'Improved lead capture by integrating interactive UI elements and enhanced user engagement through modern visual design',
  },
];

const ProjectDetails = ({ darkMode }) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="project-details-page"
      >
        <div className="project-details not-found">Project not found</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="project-details-page"
    >
      <div className="project-details">
        <div className="project-banner">
          <span className="project-banner-label">Case Study</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>

        <section className="project-section">
          <h2>Key Features</h2>
          <ul className="details-list">
            {project.details.map((detail, index) => (
              <motion.li
                key={index}
                initial={{ x: -12, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.12 + index * 0.07, duration: 0.3 }}
              >
                {detail}
              </motion.li>
            ))}
          </ul>
        </section>

        <section className="project-section">
          <h2>Technologies Used</h2>
          <div className="tech-tags">
            {project.technologies.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.04, duration: 0.2 }}
                className="tech-tag"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>

        <section className="project-section">
          <h2>Impact</h2>
          <p className="project-impact">{project.impact}</p>
        </section>

        <div className="project-actions">
          <Link to="/" className="back-button">
            Back to Portfolio
          </Link>
          <a
            href="/#projects"
            className="btn btn-ghost"
          >
            View More Projects
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetails;
