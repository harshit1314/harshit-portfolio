// components/Typewriter.jsx
import { useState, useEffect } from 'react';

const Typewriter = ({ phrases, speed = 100 }) => {
  const [text, setText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
      }

      let typeSpeed = speed;

      if (isDeleting) {
        typeSpeed /= 2;
      }

      if (!isDeleting && text === currentPhrase) {
        typeSpeed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length);
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    const timer = setTimeout(type, speed);
    return () => clearTimeout(timer);
  }, [text, currentPhraseIndex, isDeleting, phrases, speed]);

  return (
    <span className="typewriter">
      {text}
      <span className="cursor">|</span>
    </span>
  );
};

export default Typewriter;