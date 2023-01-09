import React from "react";
import Day from "./Day";
import CalendarHeader from "./CalendarHeader";
export default function Month({ month }) {
  return (
    <div className="bg-white border rounded-lg flex-1 mr-12 mt-2 ml-5 mb-12">
      <CalendarHeader />
      <div className="grid grid-cols-7 grid-rows-6">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
    </div>
    
  );
}
