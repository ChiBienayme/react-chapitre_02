import React from "react";
import Users from "./components/users.json"


class App extends React.Component {
  

  render() {
    return (
      <div>
        {this.state.users.map((Users) => {
          return (
            <div> 
              <Users Name = {this.props.Users.name}/>
              <Users Email = {this.props.Users.email}/>
              <Users Website = {this.props.Users.website}/>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;