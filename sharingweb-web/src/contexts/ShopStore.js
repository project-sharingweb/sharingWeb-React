import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ShopService from '../services/ShopService'

const ShopContext = React.createContext();

function getShopName(str) {
  str = str.split("/")

  return str[2]
}

class ShopStoreImpl extends Component {
  state = {
    shop: null,
    products: null
  }

  componentDidMount() {
    const { history } = this.props;
    ShopService.listShops()
      .then(
        shops => {
          if (shops) {
            shops = shops.filter(item => item.urlName === getShopName(history.location.pathname))
            ShopService.listProducts(getShopName(history.location.pathname))
              .then(res => this.setState({ shop: shops[0], products: res }), error => console.error(error))
          } else {
            history.navigate('/error/404')
          }
        },
        error => console.error(error)
      )
  }

  updateShop = name => {
    ShopService.shopDetail(name)
    .then( response => { 
      ShopService.listProducts(response.urlName)
      .then(res => this.setState({ shop: response, products: res }), error => console.error(error))
    })
  }

  render() {
    return (
      <ShopContext.Provider value={{
        shop: this.state.shop,
        products: this.state.products,
        updateShop: this.updateShop
      }}>
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const withShopContext = (WrappedComponent) => {
  return (props) => (
    <ShopContext.Consumer>
      { (contextProps) => <WrappedComponent {...props} {...contextProps} />}
    </ShopContext.Consumer>
  )
}

const ShopStore = withRouter(ShopStoreImpl);

export {
  ShopStore,
  withShopContext
}

