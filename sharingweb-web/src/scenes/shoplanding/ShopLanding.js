import React from 'react'
import './css/ShopLanding.css'
import LandingHeader from './components/LandingHeader';
import { withShopContext } from '../../contexts/ShopStore'
import ProductCard from'./components/ProductCard'


class ShopLanding extends React.Component {
  state = {}


  render() {
    const { shop, products } = this.props
    let list; 
    if(products){
      list = products.map((item, i) => {
        return <ProductCard key={i} product={item}></ProductCard>
      }).slice(0, 9)
    }

    return (
      <div>
        {shop && <div className=""> 
            <div style={shop.styles.nav}><LandingHeader></LandingHeader></div>
            <div className="container shop-main-image">
              <h1>{shop.name}</h1>
              <p>{shop.moto}</p>
            </div>
            <div className="container shop-product-section">
              <h2>Products</h2>
              <div className="products-wrapper">
                {list}
              </div>
            </div>
        </div>}
      </div>
    )
  }
}


export default withShopContext(ShopLanding)