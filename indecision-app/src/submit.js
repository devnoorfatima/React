import React, { Component } from 'react';


class Input extends Component {
  constructor(props) {
   super(props);
   this.handleAddOption = this.handleAddOption.bind(this);
   this.state = {
     error : undefined
   };
  }  
  handleAddOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
      this.setState(() => ({error}))
    }
    render() {
      return (      
        <div className="Input">
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit = {this.handleAddOption}>
        <input type ="text" name="option" />
         <button >Submit</button>
        </form>
        </div>
      );
    }
  }
  
  export default Input;