import React from "react";
import PropTypes from "prop-types";

function Day({ day }) {
  return <div className="rci-day">{day}</div>;
}

Day.propTypes = {
  day: PropTypes.string,
};

export default Day;
