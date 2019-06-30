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
    shop: {name: "h"}
  }

  componentDidMount() {
    const { history } = this.props;
    ShopService.listShops()
      .then(
        shops => {
          if (shops) {
            shops = shops.filter(item => item.name === getShopName(history.location.pathname))
            this.setState({ shop: shops[0] })
          } else {
            history.navigate('/error/404')
          }
        },
        error => console.error(error)
      )
  }

  render() {
    return (
      <ShopContext.Provider value={{
        shop: this.state.shop
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

