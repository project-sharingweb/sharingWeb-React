import React from 'react';
import '../css/App.css';
import {Route} from 'react-router-dom'
import Home from '../scenes/home/Home'
import ShopService from './services/ShopService'
import ShopLanding from '../scenes/shoplanding/ShopLanding';
import AboutUs from '../scenes/shoplanding/components/AboutUs'




class App extends React.Component {
  state = {
    shops: false
  }
  
  componentDidMount() {
    ShopService.listShops()
      .then(shops => {this.setState({
        shops: shops.data
      })},
      error => console.error(error))
  }


  render() {
    const {shops} = this.state
    console.log(shops)
    let list;
    if (shops){
    list = shops.map( (item, i) => {
      return (
        <div key={i}>
          <Route exact path={`/shops/${item.name}`} render={() => <ShopLanding data={item}></ShopLanding>}></Route>
          <Route exact path={`/shops/${item.name}/about-us`} render={() => <AboutUs data={item}></AboutUs>}></Route>
        </div>
      )})
    }
    

    return (
      <div>
        <Route exact path="/" component={Home}></Route>
        { shops && list}
      </div>
    );
  }
}

export default App;
