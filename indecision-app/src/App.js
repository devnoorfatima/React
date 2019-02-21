import React, { Component } from 'react';
import Header from "./header"
import Action from "./action"
import Options from "./options"
import Add from "./add-option"
import Input from "./submit"

class App extends Component {
  constructor (props) {
    super(props);
   this.handleDeleteAll = this.handleDeleteAll.bind(this);
   this.handlePick = this.handlePick.bind(this);
    this.state = {
      options : ["one", "Two", "Three"]
    }
  }
  
  handleDeleteAll() {
 this.setState(() => {
   return {
    options:[]
   };
 })
  }
   
  handlePick () {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
     const option = this.state.options[randomNum];
      alert(option);
  }
  
  render() {
    const title = "Indecision";
    const subtitle = "Give your life in the hands of Computer";
    return (      
      <div className="App">
         <Header title = {title} subtitle = {subtitle} />
         <Action 
         hasOptions= {this.state.options.length > 0}
         handlePick = {this.handlePick} 
         />
         <Options
          options={this.state.options}
          handleDeleteAll ={this.handleDeleteAll}
          />
         <Add />
         <Input />
      </div>
    );
  }
}

export default App;