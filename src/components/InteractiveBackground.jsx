// components/InteractiveBackground.jsx
import { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
  const ref = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      ref.current.style.background = `radial-gradient(at ${x * 100}% ${y * 100}%, 
        var(--primary-color) 0%, 
        var(--secondary-color) 70%)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={ref} className="interactive-background" />;
};

export default InteractiveBackground;