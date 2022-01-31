import { React } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export default function MonthlyView({ userEvents, customButtons, dateClickHandler, eventClickHandler }) {

  const monthly = userEvents.map(task => ({ ...task, 'date': task.date.slice(0, 10) }))

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        height={'auto'}
        editable
        selectable
        dateClick={(info) => dateClickHandler(info)}
        eventClick={(info) => eventClickHandler(info)}
        events={monthly}
        customButtons={customButtons}
        headerToolbar={{
          right: 'today,prevYear,prev,next,nextYear',
          center: 'title',
          left: 'addButton'
        }}
      />
    </div>
  );
}
