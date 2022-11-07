import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInputText from './FormInputText';

test('Renders FormInputText', () => {
  render(<FormInputText />);
  const linkElement = screen.getByText(/FormInputText/i);
  expect(linkElement).toBeInTheDocument();
});
