import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT } from '../routes';

const Home = () => {
  return (
    <div>
      Home Page!
      <Link to={ABOUT}>About</Link>
    </div>
  );
};

export default Home;
