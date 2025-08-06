import React from 'react';
import { Link } from 'react-router-dom';
import './Who.css';

const Who = () => {
  return (
    <div className='who-section'>
      <div className='who-content'>
        <h2>Who we are</h2>
        <p>
          Basti Ki Pathshala Foundation is a Government-registered organization established under the Indian Societies Act of 1860.
          We are a grassroots organization dedicated to breaking the barriers of education in underserved communities.
          Founded with a mission to provide quality education to children living in slum areas, we strive to create a nurturing learning environment where every child has the opportunity to thrive.
          Through innovative teaching methods, community engagement, and partnerships, we empower children with the knowledge and skills they need to build a brighter future.
          Our commitment extends beyond the classroom as we work towards bridging the educational gap and fostering long-term sustainable change in the lives of marginalized families.
        </p>

        <Link to="/about" className="read-more-button">Read More</Link>
      </div>
    </div>
  );
}

export default Who;
