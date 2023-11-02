import React, { useState } from "react";
import Cell from "./Cell";
import Day from "./Day";
import chevron from "./assets/icons/chevron.svg";
import PropTypes from "prop-types";

function Calendar({
  setIsCalendarVisible,
  selectedDate,
  handleDateSelect,
  today,
}) {
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  // 42 cells to have enough room for all months

  const cells = Array.from({ length: 42 });

  const days = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

  const months = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Julliet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ];

  // Retrieve the name of the first day of the month

  const firstDayOfWeek = new Date(currentYear, currentMonth, 1).getDay();

  // Set the index for the beggining of the week, if the first day of the month is a Sunday, we want to display it at the end of the week

  const firstDayIndex = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

  // Retrieve the number of days in the month by creating a new date object for the first day of the next month and substracting 1 day

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  const handleCellClick = (day) => {
    const newSelectedDate = new Date(currentYear, currentMonth, day);
    handleDateSelect(newSelectedDate);
    setIsCalendarVisible(false);
  };

  const goToNextMonth = () => {
    let nextMonth = currentMonth + 1;
    let year = currentYear;

    if (nextMonth > 11) {
      year += 1;
      nextMonth = 0;
    }
    setCurrentMonth(nextMonth);
    setCurrentYear(year);
  };

  const goToPreviousMonth = () => {
    let previousMonth = currentMonth - 1;
    let year = currentYear;

    if (previousMonth < 0) {
      year -= 1;
      previousMonth = 11;
    }

    setCurrentMonth(previousMonth);
    setCurrentYear(year);
  };

  return (
    <div className="rci_container">
      <div className="rci_month_selector">
        <img
          className="chevron_icon"
          src={chevron}
          alt=""
          onClick={goToPreviousMonth}
        />
        <p>{`${months[currentMonth]} ${currentYear}`}</p>
        <img
          className="chevron_icon_right"
          src={chevron}
          alt=""
          onClick={goToNextMonth}
        />
      </div>
      <div className="rci_days">
        {days.map((day, index) => (
          <Day day={day} key={index} />
        ))}
      </div>
      <div className="rci_grid">
        {cells.map((cell, index) => {
          const cellDay = index - firstDayIndex + 1;
          return (
            <Cell
              key={index}
              date={cellDay > 0 && cellDay <= daysInMonth ? cellDay : null}
              isSelected={
                selectedDate &&
                cellDay === selectedDate.getDate() &&
                currentMonth === selectedDate.getMonth() &&
                currentYear === selectedDate.getFullYear()
              }
              handleCellClick={handleCellClick}
              isToday={
                cellDay === today.getDate() &&
                currentMonth === today.getMonth() &&
                currentYear === today.getFullYear()
              }
            />
          );
        })}
      </div>
    </div>
  );
}

Calendar.propTypes = {
  setIsCalendarVisible: PropTypes.func,
  selectedDate: PropTypes.instanceOf(Date),
  handleDateSelect: PropTypes.func,
  today: PropTypes.instanceOf(Date),
};

export default Calendar;
