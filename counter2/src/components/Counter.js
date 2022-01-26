import React from "react";

class Counter extends React.Component {
	render() {
		return (
			<div>
				<h2>Count: {this.props.count}</h2>
				<button className="btn-green" onClick={this.props.substract}>
					-
				</button>
				<button className="btn-red" onClick={this.props.increment}>
					+
				</button>
			</div>
		);
	}
}

export default Counter;