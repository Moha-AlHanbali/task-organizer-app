import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';

export default function WeeklyView({ userEvents }) {
  
  const weekly = []
  
  for (let item in userEvents){
    weekly.push(userEvents[item])
  }

  return (
    <FullCalendar
    plugins={[dayGridPlugin]}
    initialView = 'dayGridWeek'
    height={'auto'}
    slotMinWidth={50}
    editable
    selectable
    events={weekly}
  />
  );
}
