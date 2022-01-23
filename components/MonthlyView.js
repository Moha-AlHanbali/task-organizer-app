import { React, useRef, useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function MonthlyView() {

  const calendarRef = useRef()
  const [events, setEvents] = useState([
    { title: 'event 1', date: '2022-01-23' },
    { title: 'event 2', date: '2022-01-24' }
  ])

  function handleUpdateState() {
    console.log('ADD');
    const calendarApi = calendarRef.current.getApi()
    // calendarApi.unselect()

    let newEvents = [...events, { title: 'event 3', date: '2022-01-25' }]

    setEvents(newEvents)

  }

  let dateClickHandler = (info) => {
    console.log('DATE CLICKED', info.date)
  }

  let eventClickHandler = (info) => {
    console.log('EVENT CLICKED', info.event.title)
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
        events={events}
      />
    </div>
  );
}
