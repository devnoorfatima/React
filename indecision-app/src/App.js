import React, { Component } from 'react';
import Header from "./header"
import Action from "./action"
import Options from "./options"  
import Input from "./submit"

class App extends Component {
  constructor (props) {
    super(props);
   this.handleDeleteAll = this.handleDeleteAll.bind(this);
   this.handlePick = this.handlePick.bind(this);
   this.handleAddOption = this.handleAddOption.bind(this);
   this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options : []
    }
  }
  
  handleDeleteAll() {
 this.setState(() => ({options:[]}));
}
  componentDidMount() {
    const json = localStorage.getItem("options");
    const options = JSON.parse(json);
    if(options) {
      this.setState(() => ({options}));
    }
    
  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }   
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
 
  handleDeleteOption(optionToRemove) {
    this.setState((prevState)=> ({
      options:prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
   
  handlePick () {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
     const option = this.state.options[randomNum];
      alert(option);
  }

  handleAddOption (option) {
   if(!option){
     return "Enter a valid option."
   }else if (this.state.options.indexOf(option) > -1) {
     return "This option already exists."
   }
   
    this.setState((prevState) => ({options : prevState.options.concat(option)}))
  }
  
  render() {
    const subtitle = "Give your life in the hands of Computer";
    return (      
      <div className="App">
         <Header subtitle = {subtitle} />
         <Action 
         hasOptions= {this.state.options.length > 0}
         handlePick = {this.handlePick} 
         />
         <Options
          options={this.state.options}
          handleDeleteAll ={this.handleDeleteAll}
          handleDeleteOption ={this.handleDeleteOption}
          />
         <Input handleAddOption = {this.handleAddOption} />
      </div>
    );
  }
}

export default App;