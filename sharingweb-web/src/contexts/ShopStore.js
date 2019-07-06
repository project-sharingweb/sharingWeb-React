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
              .then(res => this.setState({ shop: shop, products: res, shopBack:shop }), error => console.error(error))
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
      .then(res => this.setState({ shop: response, products: res }), error => console.error(error))
    })
  }

  resetEdition = () => {
    this.setState({
      ...this.state,
      shop: this.state.shopBack
    })
  }

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      ...this.state,
      shop: {
        ...this.state.shop,
        [name]: value
      }
    })
  }

  handleStyleChange = e => {
    const { name, value } = e.target


    switch (name) {
      case "nav":
          this.setState({
            ...this.state,
            shop: {
              ...this.state.shop,
              styles:{
                ...this.state.shop.styles,
                nav: { backgroundColor: value}
              }
            }
          })
        break;
        case "titleFont":
          this.setState({
            ...this.state,
            shop: {
              ...this.state.shop,
              styles:{
                ...this.state.shop.styles,
                titleFont: {color: value}
              }
            }
          })
        break;
      case "background":
          this.setState({
            ...this.state,
            shop: {
              ...this.state.shop,
              styles:{
                ...this.state.shop.styles,
                background: { backgroundColor: value}
              }
            }
          })
        break;
        case "footerBackground":
          this.setState({
            ...this.state,
            shop: {
              ...this.state.shop,
              styles:{
                ...this.state.shop.styles,
                footerBackground: { backgroundColor: value}
              }
            }
          })
        break;
        case "purchaseButton":
          this.setState({
            ...this.state,
            shop: {
              ...this.state.shop,
              styles:{
                ...this.state.shop.styles,
                purchaseButton: { backgroundColor: value}
              }
            }
          })
        break;
        case "footerFont":
          this.setState({
            ...this.state,
            shop: {
              ...this.state.shop,
              styles:{
                ...this.state.shop.styles,
                footerFont: {color: value}
              }
            }
          })
        break;
      default:
          this.setState({...this.state}) 
    }
  }

  render() {
    return (
      <ShopContext.Provider value={{
        shop: this.state.shop,
        products: this.state.products,
        shopBack: this.state.shopBack,
        updateShop: this.updateShop,
        onStyleChange: this.handleStyleChange,
        onChange: this.handleChange,
        onReset: this.resetEdition
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

