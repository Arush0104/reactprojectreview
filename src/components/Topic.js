import React from "react";
import Question from "./Question";
import PropTypes from "prop-types";
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
Topic.propTypes = {
  name: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired
};
export default Topic;
