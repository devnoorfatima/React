import React, { Component } from 'react';
import 'normalize.css/normalize.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
// import './App.css';
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
class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
<Switch>
<Route path ='/' component={ExpenceDashboardPage} exact={true} />
<Route path ='/create' component={AddExpencePage} />
<Route path ='/edit' component={EditPage} />
<Route path ='/help' component={HelpPage} />
</Switch>
</BrowserRouter>
      </div>
    );
  }
}

export default App;
