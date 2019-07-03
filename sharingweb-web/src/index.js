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
import 'aos/dist/aos.css'
import 'aos/dist/aos'
import { BrowserRouter } from 'react-router-dom'
import { ShopStore } from './contexts/ShopStore';
import { AuthStore } from './contexts/AuthStore'



ReactDOM.render(
<BrowserRouter>
  <AuthStore>
    <ShopStore>
      <App />
    </ShopStore>
  </AuthStore>
</BrowserRouter>,
document.getElementById('root'));

