import "./styles.css";
import React, { useState } from "react";
import Calendar from "./Calendar";
import PropTypes from "prop-types";

function DatePicker({ onChange }) {
  const today = new Date();
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const formatDate = (date) => {
    if (!date) {
      return "";
    } else {
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();
      return `${day} / ${month} / ${year}`;
    }
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    const event = {
      target: { value: date },
    };
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className="date_picker">
      {isCalendarVisible ? (
        <Calendar
          selectedDate={selectedDate}
          handleDateSelect={handleDateSelect}
          today={today}
          setIsCalendarVisible={setIsCalendarVisible}
        />
      ) : (
        <input
          placeholder="dd/mm/yyyy"
          type="text"
          readOnly
          value={formatDate(selectedDate)}
          onClick={() => setIsCalendarVisible(true)}
        />
      )}
    </div>
  );
}

DatePicker.propTypes = {
  onChange: PropTypes.func,
};

export default DatePicker;
