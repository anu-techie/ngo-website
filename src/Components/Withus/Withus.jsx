import React from 'react';
import { Link } from 'react-router-dom';
import './Withus.css';

const Withus = () => {
  return (
    <div className="work-section">
      <h2 className="work-title">The Way We Work</h2>
      
      <p className="work-paragraph">
        At Basti Ki Pathshala Foundation, we’re not just building a team; we’re assembling a force for change. As we continue our mission to break barriers and empower communities through education, we invite passionate individuals to join us in making a tangible difference in the lives of underserved children.
      </p>
      
      <p className="work-paragraph">
        Whether you’re a seasoned educator, a community organizer, or simply someone with a heart for social impact, there’s a place for you in our team. Together, we’ll collaborate, innovate, and inspire, working towards a future where every child has the opportunity to thrive.
      </p>
      
      <p className="work-paragraph">
        Join us in this rewarding journey of transformation. Together, let’s pave the way for brighter tomorrows and empower futures, one child at a time.
      </p>
      
      <Link to="/join" className="join-button">Join Our Team</Link>
    </div>
  );
};

export default Withus;
