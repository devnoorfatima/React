import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Header from './Components/header';
import Home from './Components/home';
import Contact from './Components/contact';
import Portfolio from './Components/portfolio';
import Project1 from './Components/project1';
import NotFoundPage from './Components/notFoundPage';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <BrowserRouter>
  <div>
  <Header />
  <Switch>
  <Route path ='/' component={Home} exact={true} />
  <Route path ='/portfolio' component={Portfolio} exact={true}/>
  <Route path ='/portfolio/:id' component={Project1} />
  <Route path ='/contact' component={Contact} />
  <Route component={NotFoundPage}/>
  </Switch>
  </div>
  </BrowserRouter>
      </div>
    );
  }
}

export default App;
