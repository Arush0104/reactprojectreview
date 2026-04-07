import React from "react";

function Question({ title, done, toggle }) {
  return (
    <div className="question">
      <input type="checkbox" checked={done} onChange={toggle} />
      <span className={done ? "done" : ""}>{title}</span>
    </div>
  );
}

export default Question;
