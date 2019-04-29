import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  getStyle=() => {
     return{
       background:'#f4f4f4',
       padding:'10px',
       borderBottom:'1px #fff dotted',
       textDecoration: this.props.todo.completed ? 'line-through' : 'none'
     }
  }
    render() {
      const {id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <h3>
        <input type='checkbox' onChange={this.props.markComplete.bind (
          this, id )} />
        {title}
        </h3>
      </div>
    )
  }
}

//PropTypes
Todoitem.propTypes ={
todo:PropTypes.object.isRequired
}


export default Todoitem
