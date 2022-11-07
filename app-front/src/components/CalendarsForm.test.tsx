import React from 'react';
import { render, screen } from '@testing-library/react';
import CalendarsForm from './CalendarsForm';

test('Renders CalendarsForm', () => {
  render(<CalendarsForm />);
  const linkElement = screen.getByText(/CalendarsForm/i);
  expect(linkElement).toBeInTheDocument();
});
