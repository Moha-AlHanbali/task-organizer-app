import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';

export default function WeeklyView({ userEvents }) {
  

  return (
    <FullCalendar
    plugins={[dayGridPlugin]}
    initialView = 'dayGridWeek'
    height={'auto'}
    slotMinWidth={50}
    editable
    selectable
    events={userEvents}
  />
  );
}
