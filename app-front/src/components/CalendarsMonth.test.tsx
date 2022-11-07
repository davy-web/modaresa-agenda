import React from 'react';
import { render, screen } from '@testing-library/react';
import CalendarsMonth from './CalendarsMonth';

test('Renders CalendarsMonth', () => {
  render(<CalendarsMonth />);
  const linkElement = screen.getByText(/CalendarsMonth/i);
  expect(linkElement).toBeInTheDocument();
});
