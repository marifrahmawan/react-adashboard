import React from 'react';

import SideBar from './components/sidebar/SideBar';
import TopBar from './components/topbar/TopBar';
import UserList from './pages/userList/UserList';

import './app.css';

import Home from './pages/home/Home';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <TopBar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
