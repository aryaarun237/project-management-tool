import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mt-3">
      <h4>Task Schedule</h4>
      <Calendar onChange={setDate} value={date} />
    </div>
  );
};

export default CalendarComponent;
