import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SideBar from './components/sidebar/SideBar';
import TopBar from './components/topbar/TopBar';

import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import Home from './pages/home/Home';
import NewUser from './pages/newUser/NewUser';
import ProductList from './pages/productList/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newProduct/NewProduct';

import './app.css';

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
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>

          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newProduct">
            <NewProduct />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
