import React, {Component} from 'react';
import { BrowserRouter as Router,Route } from 'react-router-dom'
import Todos from './components/todos';
import Header from './components/layout';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import uuid from 'uuid';
import './App.css';

class App extends Component{
  state={
    todos:[
      {
        id:uuid.v4(),
        title:'get food',
        completed:false
      },
      {
        id:uuid.v4(),
        title:'unpack it',
        completed:false
      },
      {
        id:uuid.v4(),
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
  id:uuid.v4(),
  title,
  completed:false,
}
this.setState({todos:[...this.state.todos, newTodo]})
}
  render() {
    return (
      <Router>
        <div>
          <div className='container'>
            <Header />
             <Route exact path='/' render={props=>(
               <React.Fragment>
                 <AddTodo addTodo={this.addTodo} />
                 <Todos todos={this.state.todos} 
                 markComplete={this.markComplete}
                 delTodo={this.delTodo}
                  />
               </React.Fragment>
               )} />
             <Route
             path='/About' component={About}
             />  
          </div>
        </div>
      </Router>
  );
  }
}

  

export default App;
