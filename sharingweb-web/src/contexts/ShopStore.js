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
    shopBack: null,
    products: null,
    cart: []
  }

  componentDidMount() {
    const { history } = this.props;
    const shopName = getShopName(history.location.pathname)
    if (shopName) {
      ShopService.shopDetail(shopName)
      .then(
        shop => {
          if (shop) {
            ShopService.listProducts(shopName)
              .then(res => this.setState({ ...this.state, shop: shop, products: res, shopBack:shop }), error => console.error(error))
          } else {
            history.navigate('/error/404')
          }
        },
        error => console.error(error)
      )
    }
  }

  updateShop = name => {
    ShopService.shopDetail(name)
    .then( response => { 
      ShopService.listProducts(response.urlName)
      .then(res => this.setState({...this.state, shop: response, products: res, shopBack: response }), error => console.error(error))
    })
  }

  resetEdition = () => {
    this.setState({
      ...this.state,
      shop: this.state.shopBack
    })
  }

  handleShopChange = shop => {
    this.setState({
      ...this.state,
      shop: shop
    })
  }

  addToCart = product => {
    if (this.state.cart === []) {
      product.amount = 1  
      this.setState({
        ...this.state,
        cart: this.state.cart.push(product)
      })
    } else {
      let counter = 0 
      const newCart = this.state.cart.map(item => {
        if (item.id === product.id) {
          item.amount += 1
          counter++
          return item
        } else {
          return item
        }
      })
      if (counter === 0){
        product.amount = 1  
        this.setState({
          ...this.state,
          cart: this.state.cart.push(product)
        })
      } else {
      this.setState({
        ...this.state,
        cart: newCart
      })
      }
    }
  }



  render() {
    return (
      <ShopContext.Provider value={{
        shop: this.state.shop,
        products: this.state.products,
        shopBack: this.state.shopBack,
        updateShop: this.updateShop,
        onShopChange: this.handleShopChange,
        onReset: this.resetEdition,
        cart: this.state.cart,
        addToCart: this.state.addToCart
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

