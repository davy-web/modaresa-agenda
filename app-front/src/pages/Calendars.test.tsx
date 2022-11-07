import React from 'react';
import { render, screen } from '@testing-library/react';
import Calendars from './Calendars';

test('Renders Calendars', () => {
  render(<Calendars />);
  const linkElement = screen.getByText(/Calendars/i);
  expect(linkElement).toBeInTheDocument();
});
