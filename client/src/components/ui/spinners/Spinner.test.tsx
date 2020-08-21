import React from 'react';
import CustomSpinner from './Spinner.component';
import { render } from '@testing-library/react';

describe('Spinner test', () => {
  it('renders', () => {
    render(<CustomSpinner />);
  });
});
