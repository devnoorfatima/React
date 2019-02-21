import React, { Component } from 'react';

class Action extends Component {
    handlePick () {
        alert("handlePick");
    }
    
    render() {
      return (      
        <div className="Action">
           <button onClick = {this.handlePick}>What should I do?</button>
        
        </div>
      );
    }
  }
  
  export default Action;