import { useEffect, useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FiSun, FiMoon } from 'react-icons/fi';

const Header = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <Link smooth to="/#" className="logo">
          <h1>HA</h1>
          <p>Portfolio</p>
        </Link>

        <nav className="nav-links">
          <Link smooth to="/#about" className="nav-link">About</Link>
          <Link smooth to="/#skills" className="nav-link">Skills</Link>
          <Link smooth to="/#projects" className="nav-link">Projects</Link>
          <Link smooth to="/#experience" className="nav-link">Work</Link>
          <Link smooth to="/#contact" className="nav-link">Contact</Link>
          <button onClick={toggleDarkMode} className="theme-toggle" aria-label="Toggle Theme">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
