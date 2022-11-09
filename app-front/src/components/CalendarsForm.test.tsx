import React from 'react';
import { render, screen } from '@testing-library/react';
import CalendarsForm from './CalendarsForm';

test('Renders CalendarsForm', () => {
  render(<CalendarsForm title="Ajouter" />);
  const linkElement = screen.getByText(/Ajouter/i);
  expect(linkElement).toBeInTheDocument();
});
