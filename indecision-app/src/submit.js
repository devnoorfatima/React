import React, { Component } from 'react';


class Input extends Component {
    handleAddOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
 
        if(option){
       alert(option);
       }
    }
    render() {
      return (      
        <div className="Input">
        <form onSubmit = {this.handleAddOption}>
        <input type ="text" name="option" />
         <button >Submit</button>
        </form>
        </div>
      );
    }
  }
  
  export default Input;