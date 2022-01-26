import { React, useRef } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function MonthlyView({ userEvents, customButtons, setDate, setActiveTask, openModifyModal }) {

  const calendarRef = useRef()

  let dateClickHandler = (info) => {
    const date = `${info.date.getFullYear()}-${["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"][info.date.getMonth()]}-${info.date.getDay()}`;
    setDate(date)
  }

  let eventClickHandler = (info) => {
    setActiveTask(info.event.id)
    openModifyModal()
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
        dateClick={(info) => (dateClickHandler(info))}
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
