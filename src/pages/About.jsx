import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='about'>
      <h1>About Us</h1>
      <p>We are passionate about travel and adventure!</p>

      <h2>Our Mission</h2>
      <p>Our goal is to help you discover the most beautiful places in the world with ease and comfort.</p>

      <h2>Our Services</h2>
      <ul>
        <li>Organized trips</li>
        <li>Flight booking</li>
        <li>Hotel reservations</li>
        <li>Guided tours</li>
      </ul>

      <h2>Meet Our Team</h2>
      <p>We are a team of travel lovers and expert guides ready to make your dreams come true!</p>

      <img 
        src="https://vacationeer.com/wp-content/uploads/2023/03/AGency-Photo-2023-Spring-FAM-Animal-Kingdom-900.jpg" 
        width="300"
      />

      <br /><br />

      <Link to="/contact">Contact Us</Link>
    </div>
  );
}

export default About;
