const educationData = [
  {
    institution: "Hindustan College of Science and Technology",
    degree: "B. Tech in Information Technology",
    result: "CGPA: 8.0"
  },
  {
    institution: "Ess Ess Convent Sr. Secondary School Agra (CBSE)",
    degree: "Higher Secondary",
    result: "Percentage: 82%"
  },
  {
    institution: "St. George's College Agra (ICSE)",
    degree: "Secondary Education",
    result: "Percentage: 90%"
  }
];

const Education = () => {
  return (
    <section id="education" className="section" aria-labelledby="education-heading">
      <h2 id="education-heading">Education</h2>
      {educationData.map((edu, index) => (
        <article key={index} className="education-item">
          <h3>{edu.institution}</h3>
          <p className="degree">{edu.degree}</p>
          <p className="details">{edu.result}</p>
        </article>
      ))}
    </section>
  );
};

export default Education;
