import React from "react";
import "./App.css"

// JS
// JS Counter
import Counter1 from "./components/Counter1"
import Counter2 from "./components/Counter2"
// JS Users
import UserInfo from "./components/UserInfo";
import Users from "./components/users.json"

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      count1: 0,
      count2: 0,
    };
    
    this.substract1 = this.substract1.bind(this);
    this.substract2 = this.substract2.bind(this);
    this.increment1 = this.increment1.bind(this);
    this.increment2 = this.increment2.bind(this);
    
  }

    //  Substract Counter1
    substract1() {
      if (this.state.count1 > 0) {
        this.setState((prevState) => {
          return { count1: prevState.count1 - 1 };
        });
      }
    }

    substract2() {
      // Counter = Counter2 --> Substract2 :
      if (this.state.count1 === this.state.count2 && this.state.count1 > 0) {
        this.setState((prevState) => {
          return {
            count: prevState.count1 - 1,
          };
        });
      }

      // Substract if Counter1 > 0
      if (this.state.count2 > 0) {
        this.setState((prevState) => {
          return { count2: prevState.count2 - 1 };
        });
      }
    }

    // INCREMENT COUNTER1 
    increment1() {
      // limit from 1 to 100
      if (this.state.count1 === 100) {
        return;
      }
      
      // If they are equal, add 2 counters//
      if (this.state.count1 === this.state.count2) {
        this.setState((prevState) => {
          return {
            count1: prevState.count1 + 1,
            count2: prevState.count2 + 1,
          };
        });
      }

      
      /* Limitation Counter1 to Counter2 */
      if (this.state.count1 < this.state.count2) {
        this.setState((prevState) => {
          return { count: prevState.count1 + 1 };
        });
      }
    }

    // INCREMENT COUNTER2 //
    increment2() {
      if (this.state.count2 < 100) {
        this.setState((prevState) => {
          return { count2: prevState.count2 + 1 };
        });
      }
    }

    // USERSINFO
    usersInfo(users, Counter1, Counter2) {
      this.setState((prevState) => {
        return (
          <UserInfo>Hello</UserInfo>
        )
      })
    }

  render () {
    return (
      <div>
        <h1>Counter and Users</h1>

        
        <Counter1
          count1={this.state.count1}
          increment1={this.increment1}
          substract1={this.substract1}
        />

        
        <Counter2
          count2={this.state.count2}
          increment2={this.increment2}
          substract2={this.substract2}
        />

        {Users.map (user => ( 
          <UserInfo 
            user={user.id}
            name={user.name} 
            email={user.email} 
            website={user.website} 
          />
        ))}

        
      </div>
    )
  }

}

export default App