import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "../util";

export default function SmallCalendar() {
  const [currentMonthIdx, setCurrentMonthIdx] = useState(
    dayjs().month()
  );
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const [dayObj, setDayObj] = useState(dayjs())

  const thisYear = dayObj.year()
  console.log(thisYear)
  const thisMonth = dayObj.month()
  console.log(thisMonth)

  const {
    monthIndex,
    setSmallCalendarMonth,
    setDaySelected,
    daySelected,
    setShowEventModal
  } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }

  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currentDay = day.format(format);
    const selectedDay = daySelected && daySelected.format(format);
    if (nowDay === currentDay) {
      return "bg-darkBlue rounded-full text-white";
    } else if (currentDay === selectedDay) {
      return "bg-orange-200 rounded-full text-white font-bold";
    } else {
      return "";
    }
  }
  return (
    <div className="mt-9">
      <header className="flex place-content-center">
          <button onClick={handlePrevMonth}>
            <span className="material-icons-outlined cursor-pointer text-darkBlue mx-2">
              chevron_left
            </span>
          </button>
          <p className="text-darkBlue font-bold">
            {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
              "MMMM YYYY"
            )}
          </p>
          <button onClick={handleNextMonth}>
            <span className="material-icons-outlined cursor-pointer text-darkBlue mx-2">
              chevron_right
            </span>
          </button>
      </header>
      <div className="mx-1 grid grid-cols-7 grid-rows-6">
        {currentMonth[0].map((day, i) => (
          <span key={i} className="text-sm py-1 text-center">
            {day.format("ddd")}
          </span>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                onDoubleClick={() => setShowEventModal(true)}
                className={`py-1 w-full ${getDayClass(day)}`}
              >
                <span className='text-sm'>{day.format("D")}</span>
              </button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
