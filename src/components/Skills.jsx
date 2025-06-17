const skills = {
  languages: ['Java', 'C', 'JavaScript', 'Python'],
  web: ['HTML', 'CSS', 'React.js', 'Next.js', 'Node.js', 'Express.js'],
  databases: ['MySQL', 'MongoDB'],
  frameworks: ['Spring Boot', 'Hibernate'],
  tools: ['Git', 'Github', 'Jira', 'CI/CD']
};

const Skills = () => {
  return (
    <section id="skills" className="section">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Programming Languages</h3>
          <div className="skills-list">
            {skills.languages.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skills-category">
          <h3>Web Technologies</h3>
          <div className="skills-list">
            {skills.web.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skills-category">
          <h3>Database Systems</h3>
          <div className="skills-list">
            {skills.databases.map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
        
        <div className="skills-category">
          <h3>Frameworks & Tools</h3>
          <div className="skills-list">
            {skills.frameworks.concat(skills.tools).map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;