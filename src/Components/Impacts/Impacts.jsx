import React from 'react';
import './Impacts.css';

const impactData = [
  { label: "Lives Changed", count: 32000 },
  { label: "Meals Served", count: 25000 },
  { label: "Interns Trained", count: 21000 },
  { label: "Supporters", count: 11000 }
];

const Impacts = () => {
  return (
    <div className="impacts-section">
      <h2 className="impacts-title">Our Impacts</h2>
      <div className="impact-cards">
        {impactData.map((impact, index) => (
          <div key={index} className="impact-card">
            <h3 className="impact-count">{impact.count.toLocaleString()}</h3>
            <p className="impact-label">{impact.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Impacts;
