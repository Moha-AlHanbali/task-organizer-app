import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';

export default function DailyView() {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView = 'dayGridDay'
        height={'auto'}
        slotMinWidth={50}
        editable
        selectable
        events={[
          { title: 'event 1', date: '2022-01-23' },
          { title: 'event 2', date: '2022-01-24' }
        ]}
      />
    </div>
  );
}
