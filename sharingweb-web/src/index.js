import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import "jquery/dist/jquery.min.js"
import "popper.js/dist/esm/popper.min.js"
import "mdbreact/dist/mdbreact.esm.js"
import { BrowserRouter } from 'react-router-dom'
import { ShopStore } from './contexts/ShopStore';



ReactDOM.render(
<BrowserRouter>
  <ShopStore>
    <App />
  </ShopStore>
</BrowserRouter>,
document.getElementById('root'));

