import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ExpenceDashboardPage from './Components/ExpenseDashboard';
import AddExpencePage from './Components/AddExpencePage'; 
import EditPage from './Components/EditPage';  
import HelpPage from './Components/HelpPage';
import NotFoundPage from './Components/NotFound';  
import Header from './Components/Header';  

class AppRouter extends Component {
  render() {
    return (
      <div className="App">
  <BrowserRouter>
  <div>
  <Header />
  <Switch>
  <Route path ='/' component={ExpenceDashboardPage} exact={true} />
  <Route path ='/create' component={AddExpencePage} />
  <Route path ='/edit' component={EditPage} />
  <Route path ='/help' component={HelpPage} />
  <Route component={NotFoundPage}/>
  </Switch>
  </div>
  </BrowserRouter>
        </div>
      );
    }
  }
  export default AppRouter;