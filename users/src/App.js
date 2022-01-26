import React from "react";

import "./App.css";

import users from "./users.json";

import UserInfo from "./components/UserInfo";

const data = users.map((user) => {
  return (
    <UserInfo name={user.name} email={user.email} website={user.website} />
  );
});

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ul>{data}</ul>
        </div>
      </div>
    );
  }
}

export default App;