import React from 'react';
import { render } from '@testing-library/react';
import App from '../app/App';

test('renders Welcome to uplift', () => {
  const { getByText } = render(<App />);
  expect(getByText('Welcome to uplift.')).toBeInTheDocument();
});
