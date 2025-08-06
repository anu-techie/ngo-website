import React, { useEffect, useState } from "react";
import './ScrollIndicator.css';

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-indicator-container">
      <div className="scroll-indicator-bar" style={{ width: `${scrollTop}%` }} />
    </div>
  );
};

export default ScrollIndicator;
