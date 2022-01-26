import { React, useRef } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function MonthlyView({ userEvents, customButtons, dateClickHandler, eventClickHandler }) {


  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        height={'auto'}
        slotMinWidth={50}
        editable
        selectable
        dateClick={(info) => dateClickHandler(info)}
        eventClick={(info) => eventClickHandler(info)}
        events={userEvents}
        customButtons={customButtons}
        headerToolbar={{
          right: 'today ,prev,next',
          center: '',
          left: 'addButton'
        }}

      />
    </div>
  );
}
