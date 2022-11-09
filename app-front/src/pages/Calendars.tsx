import React from 'react';
import axios from 'axios';
import '../styles/bootstrap-grid.min.css';
import CalendarsDay from "../components/CalendarsDay";
import CalendarsForm from "../components/CalendarsForm";

export default function Calendars() {
  axios
    .get(`http://localhost/calendars/get`)
    .then(res => {
      console.log(res.data);
    });

  return (
    <>
      <h1 className="text_center">Calendars</h1>
      <CalendarsDay date="Monday 20th, Janurary" />
      <CalendarsForm title="Ajouter" />
    </>
  );
}