import React from 'react'

const CURRENT_SHOP_KEY = 'current-shop'
const AuthContext = React.createContext();

class AuthStore extends React.Component {
  state = { 
    shop: JSON.parse(localStorage.getItem(CURRENT_SHOP_KEY || {}))
  }

  handleShopChange = shop => {
    
    this.setState({shop})
    if (shop) {
      
      localStorage.setItem(CURRENT_SHOP_KEY, JSON.stringify(shop))}
    else {
      console.log("hola")
      localStorage.removeItem(CURRENT_SHOP_KEY)}
  }

  isAuthenticated = () => this.state.shop && this.state.shop.name

  render() {
    return (
      <AuthContext.Provider value={{
        shop: this.state.shop,
        onShopAuthChange: this.handleShopChange,
        isAuthenticated: this.isAuthenticated
      }}>
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

const WithAuthContext = WrappedComponent => {
  return (props) => {
    return (
      <AuthContext.Consumer>
        {(consumerProps) => (<WrappedComponent {...consumerProps} {...props} />)}
      </AuthContext.Consumer>
    )
  }
}

export {AuthContext, WithAuthContext, AuthStore}