import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import {BrowserRouter, Switch, Route, NavLink, Link} from 'react-router-dom';
 import './App.css';
const ExpenceDashboardPage = () => (
  <div>
    This is from my dashboard.
  </div>
);

const AddExpencePage = () => (
  <div>
    This is from my AddExpencePage.
  </div>
);

const EditPage = () => (
  <div>
    This is from my EditPage.
  </div>
);

const HelpPage = () => (
  <div>
    This is from my HelpPage.
  </div>
);

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <ul> 
      <li><NavLink activeClassName="is-active" to='/' exact={true}>Home</NavLink></li>
      <li><NavLink to='/create' activeClassName="is-active">Add Expense</NavLink></li>
      <li><NavLink to='/edit' activeClassName="is-active">Edit</NavLink></li>
      <li><NavLink to='/help' activeClassName="is-active">Help</NavLink></li>
    </ul>
  </div>
);


class App extends Component {
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

export default App;
