import React, { useState, useEffect } from 'react';
import './BackToTop.css';

const BackToTop = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    showButton && (
      <button className="back-to-top" onClick={scrollToTop} title="Back to top">
        <span className="arrow">↑</span>
      </button>
    )
  );
};

export default BackToTop;
