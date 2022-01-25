import React from "react";
import "../styles/Counter.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
    };
  }
  
  render() {
    return (
      <div className="container">
        <button
          onClick={() => {
            if (this.state.count1 > 0) {
              this.setState({ count: this.state.count1 - 1 });
            }
          }}
        >
          {this.props.substract}
        </button>

        <h2>{this.state.count1}</h2>
        <button
          onClick={() => {
            if (this.state.count1 < 100) {
              this.setState({ count1: this.state.count1 + 1 });
            }
          }}
        >
          {this.props.increment}
        </button>

      </div>
    );
  }
}

export default Counter;