import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Siddharth = () => {
  useEffect(() => {
    document.title = "Siddharth";
  }, []);

  return (
    <div>
      <h1>Siddharth</h1>
      <p>This page is of Siddharth</p>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default Siddharth;