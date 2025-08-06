import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../../assets/img01.jpg';
import img2 from '../../assets/img02.jpg';
import img3 from '../../assets/img04.jpg';
import img4 from '../../assets/img05.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src={img1} className="d-block w-100 carousel-img" alt='first slide'/>
        <Carousel.Caption>
          <p>Breaking barriers to education in slum communities</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img2} className="d-block w-100 carousel-img" alt='second slide'/>
        <Carousel.Caption>
          <p>Empowering every child to dream, learn, and succeed</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img3} className="d-block w-100 carousel-img" alt='third slide'/>
        <Carousel.Caption>
          <p>Creating nurturing spaces where potential thrives</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={img4} className="d-block w-100 carousel-img" alt='fourth slide'/>
        <Carousel.Caption>
          <p>Building brighter futures through education and hope</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Hero
