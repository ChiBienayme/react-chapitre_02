import React from "react";
import UserInfo from "./components/UserInfo";
import Users from "./components/users.json";

class App extends React.Component {
  render () {
    return (
      <div className="App">

        <h1>Users list</h1>

        {/*  affichez la liste des utilisateurs (nom, email, website) */}
        {/* {Users.map(user => (
          <p key={user.id}> Name: {user.name} Email: {user.email} Website: {user.website}</p> 
        ))} */}
        
        {/* UserInfo */}
        {Users.map(user => ( 
          <UserInfo 
            user={user.id}
            name={user.name} 
            email={user.email} 
            website={user.website} 
          />
        ))}
        
        
      </div>
    );
  }  
  
}

export default App