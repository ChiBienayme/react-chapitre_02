import React from "react";

class Counter extends React.Component {
    render() {
      return (
        <div className="counter2"> 
            <h1>Count 2</h1>
          <h2>{this.props.count}</h2>
          <button>{this.props.increment}
          </button>
          <button>{this.props.substract}</button>
        </div>
      );
    }
  }
  
  export default Counter;
  