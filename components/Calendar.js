import React from 'react';
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Calendar() {
    return (
        <div className="flex w-1/2 h-1/2"> 
 <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      initialView='dayGridMonth'
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



