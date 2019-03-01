import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import {BrowserRouter, Route} from 'react-router-dom';
// import './App.css';
const ExpenceDashboardPage = () => (
  <div>
    This is from my dashboard.
  </div>
)
const routes =  (
<BrowserRouter>
<Route path ='/' component={ExpenceDashboardPage} />
</BrowserRouter>
  );
class App extends Component {
  render() {
    return (
      <div className="App">
      This is from my dashboard.
      </div>
    );
  }
}

export default App;
