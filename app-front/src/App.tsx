import React from 'react';
import { Routes, Route } from "react-router-dom";
import Calendars from "./pages/Calendars";
import CalendarsNavbar from "./components/CalendarsNavbar";
import './App.css';
import './styles/bootstrap-grid.min.css';

export default function App() {
  return (
    <div className="container">
      <CalendarsNavbar />
      <Routes>
        <Route path="/" element={<Calendars />} />
        <Route path="/calendars" element={<Calendars />} />
      </Routes>
    </div>
  );
}