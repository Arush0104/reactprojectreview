import React from "react";
import PropTypes from "prop-types";
function Question({ title, done, toggle }) {
  return (
    <div className="question">
      <input type="checkbox" checked={done} onChange={toggle} />
      <span className={done ? "done" : ""}>{title}</span>
    </div>
  );
}
Question.propTypes = {
  title: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};
export default Question;
