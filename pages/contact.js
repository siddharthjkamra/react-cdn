import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  useEffect(() => {
    document.title = "Contact";
  }, []);

  return (
    <div>
      <h1>Contact Us</h1>
      <p>Learn more to contact us.</p>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Contact;