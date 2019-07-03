import React from 'react'
import './css/ShopLanding.css'
import LandingHeader from './components/LandingHeader';
import { withShopContext } from '../../contexts/ShopStore'
import ProductCard from'./components/ProductCard'
import ButtonPage from './components/ButtonPage';
import LandingFooter from './components/LandingFooter';


class ShopLanding extends React.Component {
  state = {}


  render() {
    const { shop, products } = this.props
    let list; 
    if(products){
      list = products.map((item, i) => {
        return <ProductCard key={i} product={item}></ProductCard>
      }).slice(0, 11)
    }

    return (
      <div>
        {shop && <div className=""> 
            <div style={shop.styles.nav}><LandingHeader></LandingHeader></div>
            <ButtonPage />
            <div className="shop-main-image">
              <div className="container">
                <h1>{shop.name}</h1>
                <p>{shop.moto}</p>
              </div>
            </div>
            <div className="container shop-product-section">
              <h2>Products</h2>
              <div className="products-wrapper">
                {list}
              </div>
            </div>
            <LandingFooter></LandingFooter>
        </div>}
      </div>
    )
  }
}


export default withShopContext(ShopLanding)