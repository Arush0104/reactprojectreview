import React from "react";
import Question from "./Question";

function Topic({ name, questions, toggleDone }) {
  return (
    <div className="topic">
      <h2>{name}</h2>
      {questions.map((q) => (
        <Question
          key={q.id}
          title={q.title}
          done={q.done}
          toggle={() => toggleDone(q.id)}
        />
      ))}
    </div>
  );
}

export default Topic;