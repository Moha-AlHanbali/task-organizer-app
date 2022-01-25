import { React, useRef, useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function MonthlyView({ userEvents }) {

  const calendarRef = useRef()

  let dateClickHandler = (info) => {
    console.log('DATE CLICKED', info.date)
  }

  let eventClickHandler = (info) => {
    console.log('EVENT CLICKED', info.event.title)
  }


  const customButtons = {
    myCustomButton: {
      text: "add",
        click: function () {
            ('clicked the custom button!');
        }
    }
}

  return (
    <div>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        height={'auto'}
        slotMinWidth={50}
        editable
        selectable
        dateClick={(info) => (dateClickHandler(info), handleUpdateState())}
        eventClick={(info) => eventClickHandler(info)}
        events={userEvents}
        customButtons = {customButtons}
        headerToolbar={{
          right: '',
          center: '',
          left: 'today prev,next, myCustomButton'
        }}

      />
    </div>
  );
}
