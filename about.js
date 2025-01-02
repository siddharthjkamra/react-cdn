import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div>
      <h1>About Us</h1>
      <p>Learn more about us.</p>
      <nav>
        <Link to="/siddharth">Siddharth</Link>
      </nav>
    </div>
  );
};

export default About;