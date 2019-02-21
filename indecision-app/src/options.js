import React, { Component } from 'react';
import Option from "./option"
class Options extends Component {
    render() {
      return (      
        <div className="Options">
        <button onClick ={this.props.handleDeleteAll}>Remove All</button>
        {
        this.props.options.map((option) =>
        <Option key = {option} optionText = {option} />)
        }
        
        </div>
      );
    }
  }
  
  export default Options;