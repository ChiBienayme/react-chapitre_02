import React from 'react';

import './App.css';
import "./styles/Counter.css"

import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2";



class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter1 increment="+" substract="-" />
        <Counter2 increment="+" substract="-" />
        
      </div>
    );
  }
}

export default App;
