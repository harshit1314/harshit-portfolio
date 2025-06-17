import { useParams } from 'react-router-dom';

const projects = [
  {
    id: 'spotify',
    title: 'Spotify Album Finder',
    description: 'Built a real-time music search app using Node.js, Express.js, and Spotify Web API, enabling users to find albums in less than 1 sec response time.',
    details: [
      'Implemented OAuth 2.0 authentication flow for secure user authorization',
      'Integrated with Spotify Web API to fetch album data in real-time',
      'Optimized API calls with caching and request batching',
      'Built responsive UI with modern CSS techniques for cross-device compatibility'
    ],
    technologies: ['Node.js', 'Express.js', 'Spotify API', 'OAuth 2.0', 'HTML5', 'CSS3', 'JavaScript'],
    impact: '35% improvement in API request efficiency and sub-second response times'
  },
  {
    id: 'crypto',
    title: 'Crypto Tracker',
    description: 'Developed a real-time cryptocurrency tracker using React.js & Firebase, integrating public APIs for live market data updates.',
    details: [
      'Implemented WebSocket connections for real-time price updates',
      'Created interactive data visualizations using Chart.js and D3.js',
      'Optimized performance with React memoization and lazy loading',
      'Implemented user preferences storage with Firebase'
    ],
    technologies: ['React.js', 'Firebase', 'Chart.js', 'D3.js', 'WebSocket', 'REST API'],
    impact: '20% increase in user engagement and 45% improvement in page load speed'
  },
  {
    id: 'unnati',
    title: 'Unnati Renewables – Solar Energy Solutions',
    description: 'Designed and developed a responsive website for a solar energy company using React.js and Tailwind CSS.',
    details: [
      'Built modular React components with Tailwind CSS for clean UI/UX',
      'Integrated contact form, embedded map, and chatbot for customer engagement',
      'Created pages for services, pricing, CRM, and more with mobile-first design',
      'Optimized performance and accessibility for fast load times and SEO'
    ],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Responsive Design'],
    impact: 'Improved lead capture by integrating interactive UI elements and enhanced user engagement through modern visual design'
  }
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <p className="description">{project.description}</p>
      
      <h2>Key Features</h2>
      <ul className="details-list">
        {project.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
      
      <h2>Technologies Used</h2>
      <div className="tech-tags">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      
      <h2>Impact</h2>
      <p>{project.impact}</p>
      
      <a href="/" className="back-button">Back to Portfolio</a>
    </div>
  );
};

export default ProjectDetails;
