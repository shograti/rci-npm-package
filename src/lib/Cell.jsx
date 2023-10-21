import React from "react";
import PropTypes from "prop-types";

function Cell({ date, isSelected, handleCellClick, isToday }) {
  let cellStyle = "rci_cell";

  if (isSelected && isToday) {
    cellStyle = "rci_selected_cell";
  } else if (isSelected) {
    cellStyle = "rci_selected_cell";
  } else if (isToday) {
    cellStyle = "rci_today_cell";
  }

  return (
    <div className={cellStyle} onClick={() => date && handleCellClick(date)}>
      {date}
    </div>
  );
}

Cell.propTypes = {
  date: PropTypes.number,
  isSelected: PropTypes.bool,
  handleCellClick: PropTypes.func,
  isToday: PropTypes.bool,
};

export default Cell;
