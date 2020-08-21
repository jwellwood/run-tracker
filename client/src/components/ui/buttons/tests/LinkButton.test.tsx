import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LinkButton from '../LinkButton';

describe('Link Button test', () => {
  it('renders', () => {
    const link = 'test';
    const children = 'children';
    render(
      <Router>
        <LinkButton link={link}>{children}</LinkButton>
      </Router>
    );
  });
});
