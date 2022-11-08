import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import CalendarsNavbar from './CalendarsNavbar';

test('Renders CalendarsNavbar', () => {
  render(<BrowserRouter><CalendarsNavbar /></BrowserRouter>);
  const linkNavSession = screen.getByRole("linkNavSession");
  expect(linkNavSession).toHaveTextContent("Session");
  const linkNavCalendars = screen.getByRole("linkNavCalendars");
  expect(linkNavCalendars).toHaveTextContent("Calendars");
});
