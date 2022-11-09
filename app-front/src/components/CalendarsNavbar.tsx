import { Link } from "react-router-dom";
import './CalendarsNavbar.css';

export default function CalendarsNavbar() {
  return (
    <div className="mt-2 text_center">
      <Link role="linkNavSession" to="/" className="link_navbar mx-2">Session</Link>
      <Link role="linkNavCalendars" to="/calendars" className="link_navbar mx-2">Calendars</Link>
      <Link to="/" className="link_navbar mx-2">Clients</Link>
      <Link to="/" className="link_navbar mx-2">Staff</Link>
      <Link to="/" className="link_navbar mx-2">Settings</Link>
    </div>
  );
}