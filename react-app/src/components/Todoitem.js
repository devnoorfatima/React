import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  render() {
    return (
      <div>
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
