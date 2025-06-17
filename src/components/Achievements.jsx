const achievements = [
  {
    title: 'freeCodeCamp: Responsive Web Design',
    year: '2023',
    description: 'Developed adaptive layouts using HTML5, CSS3 and Flexbox/Grid.'
  },
  {
    title: 'Infosys Springboard: Core Java Fundamentals',
    year: '2024',
    description: 'Hands-on training in OOP and Exception Handling.'
  },
  {
    title: 'Leetcode',
    description: 'Solved 250+ leetcode problems.'
  },
  {
    title: 'HackerRank',
    description: '4 star rating in Java at HackerRank.'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="section">
      <h2>Certifications & Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <h3>{achievement.title}</h3>
            {achievement.year && <p className="year">{achievement.year}</p>}
            <p>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;