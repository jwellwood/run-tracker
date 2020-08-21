import React from 'react';
import { render } from '@testing-library/react';
import Alert from './Alert.component';

describe('Alert test', () => {
  it('renders', () => {
    render(<Alert />);
  });
});
