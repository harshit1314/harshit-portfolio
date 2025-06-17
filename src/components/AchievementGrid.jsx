import { motion } from 'framer-motion';
import { FaCertificate, FaTrophy, FaStar } from 'react-icons/fa';

const AchievementGrid = ({ darkMode }) => {
  const achievements = [
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
    },
    {
      title: "Leetcode Solver",
      issuer: "250+ problems",
      icon: <FaTrophy />,
      description: "Data structures and algorithms"
    },
    {
      title: "4 Star in Java",
      issuer: "HackerRank",
      icon: <FaStar />,
      description: "Java programming excellence"
    }
  ];

  return (
    <div className="achievement-grid">
      {achievements.map((item, index) => (
        <motion.div
          key={index}
          className="achievement-card"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="achievement-icon">
            {item.icon}
          </div>
          <div className="achievement-content">
            <h3>{item.title}</h3>
            <p className="issuer">{item.issuer} • {item.year}</p>
            <p className="description">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default AchievementGrid;