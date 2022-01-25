import React from 'react';
import './App.css';
import "./styles/global.css"
import Counter from "./components/Counter"

// Counter V1
// class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       count: 0
//     }
//   }

//   render() {
//     return (
//       <div className="counter1">
//         <h1>Counter 1</h1>
        
//         <div>
//           <button className='substract' 
//                   style = {{backgroundColor: "green"}}
//                   onClick={() => 
//                   this.setState({
//                     count: this.state.count -1
//                   })}
//                 > - 
//           </button>

//           <h2>{this.state.count}</h2>

//           <button className='increment' 
//                   style = {{backgroundColor: "red"}}
//                   onClick={() => 
//                   this.setState({
//                     count: this.state.count +1
//                     })}
//                 > +
//           </button>
//         </div>

//       </div>


//     )
//   }
// }

// Counter V2
class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      count:0
    };
  }

  render() {
    return (
      <div>
        <Counter increment = {this.state.count} /> - 

        <h2>{this.state.count -1}</h2>

        <Counter substract = {this.state.count} /> + 
      </div>
    )
  }
}

export default App;
