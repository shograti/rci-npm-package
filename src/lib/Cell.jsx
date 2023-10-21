import React from "react";

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

export default Cell;
