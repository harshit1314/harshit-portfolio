import { Link } from 'react-router-dom';

const projects = [
  {
    id: 'spotify',
    title: 'Spotify Album Finder',
    description: 'Built a real-time music search app using Node.js, Express.js, and Spotify Web API.',
    highlights: [
      'Enabled users to find albums in less than 1 sec response time',
      'Executed OAuth 2.0 authentication, securing user logins',
      'Improved API request efficiency by 35%',
      'Designed responsive UI with HTML, CSS, and JavaScript'
    ],
    technologies: ['Node.js', 'Express.js', 'Spotify API', 'OAuth 2.0', 'HTML/CSS']
  },
  {
    id: 'crypto',
    title: 'Crypto Tracker',
    description: 'Developed a real-time cryptocurrency tracker using React.js & Firebase.',
    highlights: [
      'Integrated public APIs for live market data updates',
      'Implemented interactive charts (Chart.js/D3.js) for visual trend analysis',
      'Improved user engagement by 20%',
      'Optimized React components to improve page load speed by 45%'
    ],
    technologies: ['React.js', 'Firebase', 'Chart.js', 'D3.js', 'Public APIs']
  },
  {
    id: 'unnati',
    title: 'Unnati Renewables – Solar Energy Solutions',
    description: 'Designed and developed a responsive website for a solar energy company using React.js and Tailwind CSS.',
    highlights: [
      'Built modular React components with Tailwind CSS for clean UI/UX',
      'Integrated contact form, embedded map, and chatbot for customer engagement',
      'Created pages for services, pricing, CRM, and more with mobile-first design',
      'Optimized performance and accessibility for fast load times and SEO'
    ],
    technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'Framer Motion', 'Responsive Design']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <Link to={`/projects/${project.id}`} className="view-details">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
