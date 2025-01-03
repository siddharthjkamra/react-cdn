import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    document.title = "My React App";
  }, []);

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the main page.</p>
    </div>
  );
};

export default Home;