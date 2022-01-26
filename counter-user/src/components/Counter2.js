import React from "react";

class Counter2 extends React.Component {
	render() {
		return (
			<div>
				<h2>Count: {this.props.count2}</h2>
				<button className="btn-green" onClick={this.props.substract2}>
					-
				</button>
				<button className="btn-red" onClick={this.props.increment2}>
					+
				</button>
			</div>
		);
	}
}

export default Counter2;