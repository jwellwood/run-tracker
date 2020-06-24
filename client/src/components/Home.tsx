import React from 'react';
import { Link } from 'react-router-dom';
import { ABOUT } from '../routes';
import { Button } from './Layout/Button';

const Home = () => {
  return (
    <div>
      Home Page!
      <Link to={ABOUT}>About</Link>
      <Button>Test Button</Button>
    </div>
  );
};

export default Home;
