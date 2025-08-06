import React, { useState } from 'react';
import './What.css';

const slides = [
  {
    title: "Breaking the Cycle of Poverty",
    description: "Education offers underprivileged slum children a pathway out of poverty by providing them with the knowledge and skills necessary to secure better opportunities in the future. By empowering them with education, these children can break the intergenerational cycle of poverty and create a brighter future for themselves and their families.."
  },
  {
    title: "Empowerment and Self-Improvement",
    description: "Education empowers slum children to envision a life beyond their current circumstances. It instills in them a sense of self-worth and confidence, enabling them to dream big and pursue their aspirations. Through education, these children gain the tools to advocate for themselves, make informed decisions, and strive for a better quality of life."
  },
  {
    title: "Building Resilience and Hope",
    description: "Education offers slum children a sense of hope and resilience in the face of adversity. It equips them with the skills to overcome challenges and navigate the complexities of their environment. By investing in their education, we provide these children with a beacon of hope, showing them that a brighter future is possible, no matter where they come from."
  }
];

const What = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
<div className="what">
  <div className="background-overlay"></div>

  <div className="carousel-container">
    <h2>What we do</h2>
    <div className="slides-wrapper">
      {slides.map((slide, index) => (
        <div
          className="slide"
          key={index}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          <div className="heading-box">{slide.title}</div>
          <div className="description-box">{slide.description}</div>
        </div>
      ))}
    </div>
  </div>

  <div className="carousel-buttons">
    <button className="left-arrow" onClick={prevSlide}>❮</button>
    <button className="right-arrow" onClick={nextSlide}>❯</button>
  </div>
</div>

  );
};

export default What;
