// ProjectDetails.jsx
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import { useRef } from 'react';

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
    id: 'crypto',
    title: 'Crypto Tracker',
    description: 'Developed a real-time cryptocurrency tracker using React.js & Firebase, integrating public APIs for live market data updates.',
    details: [
      'Implemented WebSocket connections for real-time price updates',
      'Created interactive data visualizations using Chart.js and D3.js',
      'Optimized performance with React memoization and lazy loading',
      'Implemented user preferences storage with Firebase',
    ],
    technologies: ['React.js', 'Firebase', 'Chart.js', 'D3.js', 'WebSocket', 'REST API'],
    impact: '20% increase in user engagement and 45% improvement in page load speed',
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
  const meshRef = useRef();

  if (!project) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`min-h-screen py-16 px-4 md:px-8 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-900'}`}
      >
        <div>Project not found</div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={`project-details min-h-screen py-16 px-4 md:px-8 ${darkMode ? 'bg-gray-900 text-gray-200' : 'bg-gray-100 text-gray-900'}`}
    >
      {/* 3D Project Visualization */}
      <div className="w-full h-64 mb-8">
        <Canvas>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <mesh
            ref={meshRef}
            onPointerOver={() => (meshRef.current.material.color.set(darkMode ? '#eab308' : '#f59e0b'))}
            onPointerOut={() => (meshRef.current.material.color.set('#ffffff'))}
            rotation={[0, Math.PI / 4, 0]}
          >
            <boxGeometry args={[5, 3, 0.1]} />
            <meshStandardMaterial color="#ffffff" />
          </mesh>
          <Text
            position={[0, 0, 0.1]}
            fontSize={0.5}
            color={darkMode ? '#eab308' : '#f59e0b'}
            anchorX="center"
            anchorY="middle"
          >
            {project.title}
          </Text>
          <OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />
        </Canvas>
      </div>

      {/* Project Title and Description */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-bold mb-4"
      >
        {project.title}
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="description text-lg mb-6"
      >
        {project.description}
      </motion.p>

      {/* Key Features */}
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-2xl font-semibold mb-4"
      >
        Key Features
      </motion.h2>
      <ul className="details-list mb-6 space-y-2">
        {project.details.map((detail, index) => (
          <motion.li
            key={index}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
            className="ml-6 list-disc"
          >
            {detail}
          </motion.li>
        ))}
      </ul>

      {/* Technologies Used */}
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-2xl font-semibold mb-4"
      >
        Technologies Used
      </motion.h2>
      <div className="tech-tags mb-6 flex flex-wrap gap-2">
        {project.technologies.map((tech, index) => (
          <motion.span
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
            className={`tech-tag px-3 py-1 rounded-full text-sm cursor-pointer ${darkMode ? 'bg-gray-700 text-yellow-400 hover:bg-yellow-600' : 'bg-gray-200 text-gray-800 hover:bg-yellow-300'}`}
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Impact */}
      <motion.h2
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="text-2xl font-semibold mb-4"
      >
        Impact
      </motion.h2>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        className="mb-6"
      >
        {project.impact}
      </motion.p>

      {/* Back Button */}
      <motion.a
        href="/"
        className={`back-button px-6 py-3 rounded-lg font-semibold ${darkMode ? 'bg-yellow-500 text-gray-900 hover:bg-yellow-400' : 'bg-gray-900 text-yellow-400 hover:bg-gray-800'}`}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.05, y: -5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ delay: 1, duration: 0.3 }}
      >
        Back to Portfolio
      </motion.a>
    </motion.div>
  );
};

export default (props) => <ProjectDetails {...props} />;
