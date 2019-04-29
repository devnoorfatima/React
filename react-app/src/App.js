import React, {Component} from 'react';
import Todos from './components/todos';
import Header from './components/layout';
import AddTodo from './components/AddTodo';
import './App.css';

class App extends Component{
  state={
    todos:[
      {
        id:1,
        title:'get food',
        completed:false
      },
      {
        id:2,
        title:'unpack it',
        completed:false
      },
      {
        id:3,
        title:'eat',
        completed:false
      }
    ]
  }
  // Toggle Complete
  markComplete=(id)=> {
    this.setState({todos: this.state.todos.map(todo=>{
     if( todo.id=== id ){
       todo.completed =!todo.completed
     }
     return todo;
    })
  });
}

// Delete todos
delTodo=(id)=>{
 this.setState({todos: [...this.state.todos.filter(todo=> todo.id !== id) ] })
}

// add todo
addTodo = (title) => {
const newTodo ={
  id:'4',
  title,
  completed:false,
}
this.setState({todos:[...this.state.todos, newTodo]})
}
  render() {
    return (
      <div>
      <div className='container'>
      <Header />
      <AddTodo addTodo={this.addTodo} />
      <Todos todos={this.state.todos} 
      markComplete={this.markComplete}
      delTodo={this.delTodo}
      />
      </div>
      </div>
    );
  
  }
}

  

export default App;
