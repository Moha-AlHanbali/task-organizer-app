import React from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';

export default function DailyView({ userEvents, customButtons, eventClickHandler }) {


  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView='dayGridDay'
        height={'auto'}
        slotMinWidth={50}
        editable
        selectable
        eventClick={(info) => eventClickHandler(info)}
        events={userEvents}
        customButtons={customButtons}
        headerToolbar={{
          right: 'today,prev,next',
          center: 'title',
          left: 'addButton'
        }}
      />
    </div>
  );
}
