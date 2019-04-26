import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  getStyle=() => {
      if(this.props.todo.completed)
      return {
          textDecoration:'line-through'
      }
  }
  
    render() {
    return (
      <div style={this.getStyle()}>
        <h3>{this.props.todo.title}</h3>
      </div>
    )
  }
}

//PropTypes
Todoitem.propTypes ={
todo:PropTypes.object.isRequired
}


export default Todoitem
