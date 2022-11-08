import { Link } from "react-router-dom";
import '../styles/bootstrap-grid.min.css';

export default function CalendarsNavbar() {
    return (
      <div className="mt-2">
        <Link role="linkNavSession" to="/" className="link_navbar me-2">Session</Link>
        <Link role="linkNavCalendars" to="/calendars" className="link_navbar me-2">Calendars</Link>
      </div>
    );
}