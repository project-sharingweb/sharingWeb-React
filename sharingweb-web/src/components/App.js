import React from 'react';
import '../css/App.css';
import {Route, Switch} from 'react-router-dom'
import Home from '../scenes/home/Home'
import ShopLanding from '../scenes/shoplanding/ShopLanding';
import AboutUs from '../scenes/shoplanding/components/AboutUs';
import { withShopContext } from '../contexts/ShopStore'
import Register from './Register'
import Login from './Login'
import AOS from 'aos';
import ListProducts from '../scenes/shoplanding/components/ListProducts';
import Orders from '../scenes/shoplanding/components/Orders';
import Checkout from '../scenes/shoplanding/components/Checkout';
import DetailProduct from '../scenes/shoplanding/components/DetailProduct';
import Cart from '../scenes/shoplanding/components/Cart'
import LandingPurchase from '../scenes/shoplanding/components/LandingPurchase';
import logoPay from '../images/successpay.svg'
import failPay from '../images/failedpay.svg'


class App extends React.Component {

  render() {
    AOS.init();
    return (
      <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/shops/:name"component={ShopLanding}></Route>
          <Route exact path="/shops/:name/about-us"component={AboutUs}></Route>
          <Route exact path="/shops/:name/products"component={ListProducts}></Route>
          <Route exact path="/shops/:name/orders"component={Orders}></Route>
          <Route exact path="/shops/:name/checkout"component={Checkout}></Route>
          <Route exact path="/shops/:name/products/:id"component={DetailProduct}></Route>
          <Route exact path="/shops/:name/cart"component={Cart}></Route>
          <Route exact path="/shops/:name/success/:id" component={() => <LandingPurchase logo={logoPay} message="Your payment was successful!" title="Thank You!"/>}></Route>
          <Route exact path="/shops/:name/failed" component={() => <LandingPurchase logo={failPay} message="Your payment failed. Please try again" title="We are sorry" red="red"/>}></Route>
      </Switch>
    );
  }
}

export default withShopContext(App);
