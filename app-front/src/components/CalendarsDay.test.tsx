import React from 'react';
import { render, screen } from '@testing-library/react';
import CalendarsDay from './CalendarsDay';

test('Renders CalendarsDay', () => {
  render(<CalendarsDay />);
  const linkElement = screen.getByText(/CalendarsDay/i);
  expect(linkElement).toBeInTheDocument();
});
