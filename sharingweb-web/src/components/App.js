import React from 'react';
import '../css/App.css';
import {Route, Switch} from 'react-router-dom'
import Home from '../scenes/home/Home'
import ShopLanding from '../scenes/shoplanding/ShopLanding';
import AboutUs from '../scenes/shoplanding/components/AboutUs';
import { withShopContext } from '../contexts/ShopStore'
import Register from './Register'
import Login from './Login'



class App extends React.Component {

  render() {
    return (
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/shops/:name"component={ShopLanding}></Route>
          <Route exact path="/shops/:name/about-us"component={AboutUs}></Route>
      </Switch>
    );
  }
}

export default withShopContext(App);
