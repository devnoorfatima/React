import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Todoitem extends Component {
  getStyle=() => {
     return{
       background:'#7AFFCE',
       padding:'10px',
       borderBottom:'1px #fff dotted',
       borderRadius:'5px',
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
         <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
        </h3>
      </div>
    )
  }
}

//PropTypes
Todoitem.propTypes ={
todo:PropTypes.object.isRequired
}

const btnStyle={
  background:'red',
  color:'white',
  border:'none',
  borderRadius:'50%',
  padding:'5px 10px',
  cursor:'pointer',
  float:'right'
}
export default Todoitem
