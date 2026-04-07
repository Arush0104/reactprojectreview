import React, { Component } from "react";
import PropTypes from "prop-types";

class Progress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastUpdated: new Date()
    };
  }

  render() {
    const { questions } = this.props;

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

        <p>Last Updated: {this.state.lastUpdated.toLocaleTimeString()}</p>
      </div>
    );
  }
}

Progress.propTypes = {
  questions: PropTypes.array.isRequired
};

export default Progress;
