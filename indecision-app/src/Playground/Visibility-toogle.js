import React, { Component } from 'react';

class Toogle extends Component {
    constructor(props) {
        super(props);
        this.state = {
          show: true
        };
    }
    ToggleClick = () => {
        this.setState({ show: !this.state.show });
      }
    render() {  
        return (      
        <div className="toogle">
        <h1>Visibility Toogle</h1>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide details' : 'Show details' }
        </button>
        { this.state.show ? <h2>These are the details...</h2> : '' }
        </div>
      );
    }
  }
  
  export default Toogle ;