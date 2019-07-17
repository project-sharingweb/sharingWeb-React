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
    orders: null,
    cart: null
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
              .then(shopProducts => ShopService.listOrders(shopName)
                .then( shopOrders => this.setState({ ...this.state, shop: shop, products: shopProducts, orders: shopOrders, shopBack:shop }), error => console.error(error)))
          } else {
            history.push('/error/404')
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
        .then(shopProducts => ShopService.listOrders(response.urlName)
          .then( shopOrders => this.setState({ ...this.state, shop: response, products: shopProducts, orders: shopOrders, shopBack:response }), error => console.error(error)))
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
    if (!this.state.cart) {
      const newObj = [{...product, amount: 1}]
      this.setState({
        cart: newObj
      })
    } else {
      let counter = 0
      let theCart = [...this.state.cart]
        theCart = theCart.map(item => {
          if (item.id === product.id) {
            counter++
            item.amount = item.amount + 1
            return item
          } else {return item}
        })
        if(counter === 0){
          const newObj = {...product, amount: 1}
          theCart.push(newObj)
          this.setState({
            ...this.state,
            cart: theCart
          })
        }
        else {
          this.setState({
            ...this.state,
            cart: theCart
          })
        }
    }
  }

  removeFromCart = product => {
    const newCart = this.state.cart.filter(item => item.id !== product.id)
      this.setState({
        ...this.state,
        cart: newCart
      })
  }

  unAddToCart = product => {
    if(product.amount > 1){
      const newCart = this.state.cart.map(item => {
        if (item.id === product.id) {
          item.amount = item.amount - 1
          return item
        } else {return item}
      })
      this.setState({
        ...this.state,
        cart: newCart
      })
    } else {
      this.removeFromCart(product)
    }
  }

  deleteProduct = product => {
    ShopService.deleteProduct(product)
      .then(response => {
        ShopService.listProducts(product.name)
          .then(products => {
            this.setState({
              ...this.state,
              products: products
            }, error => console.error(error))
          }, error => console.error(error))
      })
  }



  render() {
    return (
      <ShopContext.Provider value={{
        shop: this.state.shop,
        products: this.state.products,
        orders: this.state.orders,
        shopBack: this.state.shopBack,
        updateShop: this.updateShop,
        onShopChange: this.handleShopChange,
        onReset: this.resetEdition,
        cart: this.state.cart,
        addToCart: this.addToCart,
        removeFromCart: this.removeFromCart,
        unAddToCart: this.unAddToCart,
        deleteProduct: this.deleteProduct
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

