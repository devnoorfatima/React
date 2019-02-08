import React, { Component } from 'react';
import Es6 from "./ES6-let-const"
import './App.css';

//Conditional Rendering
class App extends Component {
  render() {
 
const user = {
  name : "Noor",
  age : 27,
  location: "Lahore"
};

function getLocation(location) {
  if(location){
    return <p>location:{location}</p>;
  }
}
    return (      
      <div className="App">
          <h1>{user.name ? user.name : "Anonymous"}</h1>
          {user.age >= 18 && <p>Age : {user.age}</p>}
          {getLocation(user.location)}
      
      <Es6 />
      </div>
    );
  }
}

export default App;