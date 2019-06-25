import React from 'react';
import '../css/App.css';
import {Route} from 'react-router-dom'
import Home from '../scenes/Home'


function App() {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
    </div>
  );
}

export default App;
