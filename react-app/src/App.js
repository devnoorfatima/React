import React, {Component} from 'react';
import Todos from './components/todos';
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
        completed:true
      },
      {
        id:3,
        title:'eat',
        completed:false
      }
    ]
  }
  markComplete=()=> {
    console.log('from js')
  }
  render() {
    return (
      <div>
     <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  
  }
}

  

export default App;
