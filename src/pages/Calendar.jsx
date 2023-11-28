import React, { useEffect, useState } from 'react';
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from '@syncfusion/ej2-react-schedule';

import { scheduleDataOuter } from '../data/calendarData';
import { Header } from '../components';

const Calendar = () => {
  const storedData = localStorage.getItem('calendarData');
  const [scheduleData, setScheduleData] = useState(storedData ? JSON.parse(storedData) : []);

  const handleActionComplete = args => {
    console.log(args);
    if (args.requestType === 'eventCreated' || args.requestType === 'eventChanged') {
      localStorage.setItem('calendarData', JSON.stringify([...scheduleData]));
    } else if (args.requestType === 'eventRemoved') {
      localStorage.setItem('calendarData', JSON.stringify([...scheduleData]));
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />
      <ScheduleComponent
        height="650px"
        eventSettings={{ dataSource: scheduleData }}
        selectedDate={new Date()}
        actionComplete={handleActionComplete}
      >
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
