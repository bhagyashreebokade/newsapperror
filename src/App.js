import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";
import Login from "./components/Login";
import Abrupt from "./components/Abrupt";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Route path="/" component={Navigation}/>
          <Switch>
            <Route path="/" component={Dashboard} exact/>
            <Route path="/search" component={Search} exact/>
            <Route path="/login" component={Login} exact/>
            <Route path="/profile" component={Profile} exact/>
            <Route component={Abrupt} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
