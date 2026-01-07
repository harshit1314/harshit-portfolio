import { motion } from 'framer-motion';
import { FaCertificate, FaTrophy, FaStar } from 'react-icons/fa';

const AchievementGrid = ({ darkMode }) => {
  const achievements = [
    {
      title: "Full Stack Development in AI",
      issuer: "Aimerz",
      year: "2025",
      icon: <FaCertificate />,
      description: "Advanced AI-integrated full stack application development"
    },
    {
      title: "Leetcode Solver",
      issuer: "600+ problems",
      year: "2025",
      icon: <FaTrophy />,
      description: "Solved advanced data structures and algorithms problems"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      year: "2023",
      icon: <FaCertificate />,
      description: "Developed adaptive layouts using HTML5, CSS3"
    },
    {
      title: "Core Java Fundamentals",
      issuer: "Infosys Springboard",
      year: "2024",
      icon: <FaCertificate />,
      description: "OOP and Exception Handling"
    }
  ];

  return (
    <div className="achievement-grid">
      {achievements.map((item, index) => (
        <motion.div
          key={index}
          className="achievement-card glass"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          whileHover={{ y: -8, scale: 1.03 }}
        >
          <div className="achievement-icon">
            {item.icon}
          </div>
          <div className="achievement-content">
            <h3 className="achievement-title">{item.title}</h3>
            <p className="achievement-issuer">
              {item.issuer} {item.year && `• ${item.year}`}
            </p>
            <p className="achievement-description">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementGrid;