import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';

export default function DailyView({ userEvents }) {


  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView = 'dayGridDay'
        height={'auto'}
        slotMinWidth={50}
        editable
        selectable
        events={userEvents}
      />
    </div>
  );
}
