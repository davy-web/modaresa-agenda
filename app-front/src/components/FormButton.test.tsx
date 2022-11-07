import React from 'react';
import { render, screen } from '@testing-library/react';
import FormButton from './FormButton';

test('Renders FormButton', () => {
  render(<FormButton />);
  const linkElement = screen.getByText(/FormButton/i);
  expect(linkElement).toBeInTheDocument();
});
