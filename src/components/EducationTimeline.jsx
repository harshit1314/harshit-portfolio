import { motion } from 'framer-motion';

const EducationTimeline = ({ darkMode }) => {
  const education = [
    {
      institution: "Hindustan College of Science and Technology",
      degree: "B.Tech in Information Technology",
      details: "CGPA: 8.0",
      year: "2019-2023"
    },
    {
      institution: "Ess Ess Convent Sr. Secondary School",
      degree: "Higher Secondary (CBSE)",
      details: "Percentage: 82%",
      year: "2017-2019"
    },
    {
      institution: "St. George's College Agra",
      degree: "Secondary Education (ICSE)",
      details: "Percentage: 90%",
      year: "2015-2017"
    }
  ];

  return (
    <div className="timeline">
      {education.map((item, index) => (
        <motion.div
          key={index}
          className="timeline-item"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <div className="timeline-content">
            <h3>{item.institution}</h3>
            <p className="degree">{item.degree}</p>
            <p className="details">{item.details}</p>
            <span className="year">{item.year}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default EducationTimeline;