import React from 'react';
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRef } from "react";

export default function Calendar() {
    return (
        <div>
 <FullCalendar
      plugins={[timeGridPlugin, interactionPlugin]}
      editable
      selectable
    />
        </div>
    );
}



