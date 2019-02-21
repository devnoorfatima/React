import React, { Component } from 'react';
import Header from "./header"
import Action from "./action"
import Options from "./options"
import Add from "./add-option"
import Input from "./submit"

class App extends Component {
  render() {
    const title = "Indecision";
    const subtitle = "Give your life in the hands of Computer";
    const options = ["one", "Two", "Three"];
    return (      
      <div className="App">
         <Header title = {title} subtitle = {subtitle} />
         <Action />
         <Options options={options}/>
         <Add />
         <Input />
    
      </div>
    );
  }
}

export default App;