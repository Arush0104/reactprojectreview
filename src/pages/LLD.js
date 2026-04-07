import React from "react";
import Topic from "../components/Topic";
import PropTypes from "prop-types";
function LLD({ questions, toggleDone }) {
  const lldQuestions = questions.slice(42);

  return (
    <div className="page">
      <h1>LLD & System Design</h1>

      <Topic
        name="Design Questions"
        questions={lldQuestions}
        toggleDone={toggleDone}
      />
    </div>
  );
}
LLD.propTypes = {
  questions: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired
};
export default LLD;
