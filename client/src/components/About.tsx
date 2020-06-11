import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../routes';

const About = () => {
  return (
    <div>
      About Page!
      <Link to={HOME}>Home</Link>
    </div>
  );
};

export default About;
