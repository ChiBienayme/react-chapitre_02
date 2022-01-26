import React from "react";
import Counter from "./components/Counter";

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			count: 0,
		};

		// Bind functions
		this.increment = this.increment.bind(this);
		this.substract = this.substract.bind(this);
	}

	// Fonction pour incrémenter le compteur
	increment() {
		this.setState((prevState) => {
			return {
				count: prevState.count + 1,
			};
		});
	}

	// Fonction pour décrémenter le compteur
	substract() {
		this.setState((prevState) => {
			return { count: prevState.count - 1 };
		});
	}

	render() {
		return (
			<div>
				<h1>Counter 2</h1>
				<Counter
					count={this.state.count}
					increment={this.increment}
					substract={this.substract}
				/>
			</div>
		);
	}
}

export default App