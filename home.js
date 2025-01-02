import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page.</p>
    </div>
  );
};

export default Home;