import React from 'react';
import './CalendarsDay.css';

type CalendarsDayProps = {
  date: string
}

export default function CalendarsDay({ date }: CalendarsDayProps) {
  const calendarTable = [];
  for (let i: number = 9; i <= 18; i++) {
    for (let j: number = 0; j < 4; j++) {
      calendarTable.push(
        <tr>
          <td className="calendar_time">{i}:{j === 0 ? "00" : j * 15}</td>
          <td className="calendar_info" contentEditable></td>
        </tr>
      );
    }
  }
  return (
    <>
      <table className="container calendar_container">
        <thead>
          <th className="calendar_title col" colSpan={2}>
            {date}
          </th>
        </thead>
        <tbody>
          {calendarTable}
        </tbody>
      </table>
    </>
  );
}