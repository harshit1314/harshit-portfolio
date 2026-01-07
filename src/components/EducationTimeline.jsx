import { motion } from 'framer-motion';

const EducationTimeline = ({ darkMode }) => {
  const education = [
    {
      institution: "Hindustan College of Science and Technology",
      degree: "B.Tech in Information Technology",
      details: "CGPA: 8.0",
      year: "2022-2026"
    },
    {
      institution: "Ess Ess Convent Sr. Secondary School",
      degree: "Higher Secondary (CBSE)",
      details: "Percentage: 82%",
      year: "2020-2022"
    },
    {
      institution: "St. George's College Agra",
      degree: "Secondary Education (ICSE)",
      details: "Percentage: 90%",
      year: "2008-2020"
    }
  ];

  return (
    <div className="education-container">
      {education.map((item, index) => (
        <motion.div
          key={index}
          className="education-item"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <div className="education-card">
            <div className="education-header">
              <h3>{item.institution}</h3>
              <div className="education-year">{item.year}</div>
            </div>
            <p className="degree">{item.degree}</p>
            <p className="details">{item.details}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationTimeline;