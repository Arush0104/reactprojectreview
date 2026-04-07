import React from "react";
import Topic from "../components/Topic";
import PropTypes from "prop-types";
function DSA({ questions, toggleDone }) {
  const topics = [
  "Arrays",
  "Two Pointers",
  "Sliding Window",
  "Stack",
  "Binary Search",
  "Linked List",
  "Trees",
  "BST",
  "Heap",
  "Backtracking",
  "Graphs"
];

  return (
    <div className="page">
      <h1>DSA Topics</h1>

      {topics.map((topicName) => {
        const filteredQuestions = questions.filter(
          (q) => q.topic === topicName
        );

        return (
          <Topic
            key={topicName}
            name={topicName}
            questions={filteredQuestions}
            toggleDone={toggleDone}
          />
        );
      })}
    </div>
  );
}
DSA.propTypes = {
  questions: PropTypes.array.isRequired,
  toggleDone: PropTypes.func.isRequired
};
export default DSA;
