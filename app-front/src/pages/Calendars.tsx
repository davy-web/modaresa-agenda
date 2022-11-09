import React from 'react';
import '../styles/bootstrap-grid.min.css';
import CalendarsDay from "../components/CalendarsDay";
import CalendarsForm from "../components/CalendarsForm";

export default function Calendars() {
  return (
    <>
      <h1 className="text_center">Calendars</h1>
      <CalendarsDay date="Monday 20th, Janurary" />
      <CalendarsForm title="Ajouter" />
    </>
  );
}