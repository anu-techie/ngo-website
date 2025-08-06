import React, { useRef } from 'react';
import './About.css';
import Impacts from '../../Components/Impacts/Impacts.jsx';
import { Link } from 'react-router-dom';

const sections = [
  {
    label: 'Mission',
    refKey: 'missionRef',
    content: (
      <>
        At Basti Ki Pathshala Foundation, our mission is clear: to break the barriers of education in underserved communities. We are dedicated to providing quality education to children living in slum areas, ensuring that every child has the opportunity to thrive and succeed. Our goal is to create a nurturing learning environment where every child can access the tools, resources, and support they need to unlock their full potential. Through innovative teaching methods, community engagement, and strategic partnerships, we empower children with the knowledge and skills necessary to build a brighter future for themselves and their communities. Our mission extends beyond the classroom as we work tirelessly to bridge the educational gap and foster long-term, sustainable change in the lives of marginalized families. Together, we strive to rewrite the narrative of education, one child at a time.
      </>
    ),
  },
  {
    label: 'Our Certificate',
    refKey: 'certRef',
    content: (
      <>
        We take immense pride in our registration under the Indian Societies Act of 1860, a symbol of our unwavering dedication to transparency and accountability. This registration underscores our steadfast commitment to catalyzing positive change and fostering gender equity in society. As a registered nonprofit entity, we adhere rigorously to principles of integrity and professionalism, recognizing the profound responsibility entrusted to us. Our certification from the government stands as a testament to our ethos, and we remain resolute in upholding the core values of the Basti Ki Pathshala Foundation. In our ongoing pursuit to empower women and advance a more inclusive world, we cherish this recognition and remain steadfast in our mission.
      </>
    ),
  },
  {
    label: 'Our Story',
    refKey: 'storyRef',
    content: (
      <>
        Basti Ki Pathshala Foundation began with a simple yet powerful vision: to transform the lives of children living in slum areas through education. Founded under the Indian Societies Act of 1860, our journey started with a deep-seated belief in the potential of every child, regardless of their circumstances.<br /><br />
        It all began when Sunita, inspired by their own experiences and driven by a passion for social justice, embarked on a mission to address the educational inequalities prevalent in underserved communities. Armed with determination and fueled by compassion, they rallied a team of like-minded individuals who shared their vision of a brighter, more equitable future.<br /><br />
        From humble beginnings, our organization has grown into a beacon of hope, touching the lives of countless children and families along the way. Each milestone achieved, each barrier overcome, has only strengthened our resolve to continue our mission of empowerment and transformation.<br /><br />
        Through the years, we’ve witnessed the transformative power of education firsthand. We’ve seen shy, uncertain children blossom into confident, capable individuals, equipped with the knowledge and skills to pursue their dreams. We’ve seen communities come together, united by a shared commitment to the betterment of their children’s future.<br /><br />
        As we reflect on our journey, we are filled with gratitude for the unwavering support of our volunteers, donors, partners, and the communities we serve. Together, we have achieved so much, yet we know that our work is far from over.<br /><br />
        Our story is still being written, with each chapter filled with hope, resilience, and determination. As we look towards the future, we remain steadfast in our mission to break down barriers, uplift communities, and create a world where every child has the opportunity to thrive.
      </>
    ),
  },
  {
    label: 'Work Together',
    refKey: 'togetherRef',
    content: (
      <>
        <div>
          At Basti Ki Pathshala Foundation, collaboration is at the heart of everything we do. Under the banner of ‘We Work Together,’ we embrace the power of unity, recognizing that real change comes from collective action. Our dedicated team, passionate volunteers, generous donors, and supportive community members all play integral roles in our mission to break the barriers of education in underserved communities. Together, we strive towards a common goal: to empower every child with the opportunity to thrive. Through shared vision, shared values, and shared effort, we pave the way for a brighter, more inclusive future for all.
        </div>
        <Link to="/join" className="join-btn">Join With Us</Link>
      </>
    ),
  }
];

const About = () => {
  const missionRef = useRef(null);
  const certRef = useRef(null);
  const storyRef = useRef(null);
  const togetherRef = useRef(null);
  const impactsRef = useRef(null);

  const refMap = {
    missionRef,
    certRef,
    storyRef,
    togetherRef,
    impactsRef,
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="about-container">
      <h2 className="about-title">
        About us
        <div className="title-underline" />
      </h2>
      <div className="section-links">
        {sections.map(section => (
          <span key={section.label} onClick={() => scrollToSection(refMap[section.refKey])}>
            {section.label}
          </span>
        ))}
        <span onClick={() => scrollToSection(impactsRef)}>Impacts</span>
      </div>

      {sections.map((section, idx) => (
        <div
          ref={refMap[section.refKey]}
          key={section.label}
          className={`about-zigzag ${idx % 2 === 0 ? 'left-head' : 'right-head'}`}
        >
          <div className="about-zigzag-heading">
            <h3>{section.label}</h3>
            <div className="heading-accent"></div>
          </div>
          <div className="about-zigzag-content">
            <p>{section.content}</p>
          </div>
        </div>
      ))}

      <div ref={impactsRef}>
        <Impacts />
      </div>
    </div>
  );
};

export default About;
