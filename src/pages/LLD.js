import React from "react";
import Topic from "../components/Topic";

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

export default LLD;