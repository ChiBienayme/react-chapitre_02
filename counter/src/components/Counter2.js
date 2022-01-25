import React from "react";
import "../styles/Counter.css";

class Counter2 extends React.Component {
  constructor() {
    super();
    this.state = {
      count2: 0,
    };
  }
  render() {
    return (
      <div className="container">
        <button
          onClick={() => {
            if (this.state.count2 > 0) {
              this.setState({ count2: this.state.count2 - 1 });
            }
          }}
        >
          {this.props.substract}
        </button>

        <h2>{this.state.count2}</h2>

        <button
            onClick={() => {
              if (this.state.count2 < 100) {
                this.setState({ count2: this.state.count2 + 1 });
              }
            }}
          >
          {this.props.increment}
        </button>
      </div>
    );
  }
}

export default Counter2;