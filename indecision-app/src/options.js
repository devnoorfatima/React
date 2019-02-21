import React, { Component } from 'react';
import Option from "./option"
class Options extends Component {
    constructor (props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll () {
        alert("remove all")
    }
    render() {
      return (      
        <div className="Options">
        <button onClick ={this.handleRemoveAll}>Remove All</button>
        {
        this.props.options.map((option) =>
        <Option key = {option} optionText = {option} />)
        }
        
        </div>
      );
    }
  }
  
  export default Options;