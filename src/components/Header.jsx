// src/components/Header.jsx
import { HashLink as Link } from 'react-router-hash-link';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className="header">
      <div className="header-content">
        <Link smooth to="/" className="logo">
          <h1>Harshit Agarwal</h1>
          <p>Full Stack Developer</p>
        </Link>

        <nav className="nav-links">
          <Link smooth to="/#education">Education</Link>
          <Link smooth to="/#experience">Experience</Link>
          <Link smooth to="/#projects">Projects</Link>
          <Link smooth to="/#skills">Skills</Link>
          <Link smooth to="/#achievements">Achievements</Link>
          <button onClick={toggleDarkMode} className="theme-toggle">
            {darkMode ? '☀️' : '🌙'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
