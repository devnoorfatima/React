import React, { Component } from 'react';

class Action extends Component {
    render() {
      return (      
        <div className="Action">
           <button
           disabled = {!this.props.hasOptions}
           onClick = {this.props.handlePick}
           >
           What should I do?
           </button>
        
        </div>
      );
    }
  }
  
  export default Action;