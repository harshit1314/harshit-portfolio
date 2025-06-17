import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import './App.css';
import ParticleBackground from './components/ParticleBackground';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <Router>
      <div className={`app ${darkMode ? 'dark' : 'light'}`}>
        <ParticleBackground darkMode={darkMode} />
        <div 
          className="custom-cursor" 
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            backgroundColor: darkMode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)'
          }}
        />
        <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route path="/projects/:id" element={<ProjectDetails darkMode={darkMode} />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;