import React from "react";

function Progress({ questions }) {
  const total = questions.length;
  const completed = questions.filter((q) => q.done).length;

  const percentage = Math.round((completed / total) * 100);

  return (
    <div className="page">
      <h1>Progress</h1>

      <p>Total Questions: {total}</p>
      <p>Completed: {completed}</p>
      <p>Progress: {percentage}%</p>

      <div style={{ background: "#ddd", height: "20px", width: "300px" }}>
        <div
          style={{
            background: "green",
            width: `${percentage}%`,
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Progress;
