import React from "react";

class Counter1 extends React.Component {
	render() {
		return (
			<div>
				<h2>Count: {this.props.count1}</h2>
				<button className="btn-green" onClick={this.props.substract1}>
					-
				</button>
				<button className="btn-red" onClick={this.props.increment1}>
					+
				</button>
			</div>
		);
	}
}

export default Counter1;