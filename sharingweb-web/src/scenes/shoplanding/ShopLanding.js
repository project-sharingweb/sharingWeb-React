import React from 'react'
import './css/ShopLanding.css'
import ShopService from '../../components/services/ShopService'
import LandingHeader from './components/LandingHeader';

class ShopLanding extends React.Component {
  state = {
    products: false
  }

  componentDidMount(){
    const {data} = this.props
    ShopService.listProducts(data.name)
      .then(products => {
        const productlist = products.data.filter(item => item.shopName === data.name)
        this.setState({
        products: productlist
      })},
      error => console.error(error))
  }


  render() {
    const {data} = this.props 
    const {products} = this.state
    console.log(products)
    const navbarColor = {"backgroundColor": data.navbarColor}
    return (
      <div className="">
        <div style={navbarColor}><LandingHeader data={data}></LandingHeader></div>
        <div>fghfdhfidsjgolis</div>
      </div>
    )
  }
}

export default ShopLanding