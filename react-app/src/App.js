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
        completed:false
      },
      {
        id:3,
        title:'eat',
        completed:false
      }
    ]
  }
  render() {
    return (
      <div>
     <Todos todos={this.state.todos} />
      </div>
    );
  
  }
}

  

export default App;
