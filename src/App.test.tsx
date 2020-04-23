import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the image', () => {
  const { getByRole } = render(<App />);
  const banner = getByRole('img');
  expect(banner).toHaveAttribute('src', 'logo.jpg');
  expect(banner).toHaveAttribute('alt', 'logo');
});

test('renders the page by snapshot', () => {
  const {container} = render(<App />);
  expect(container).toMatchSnapshot();
});
