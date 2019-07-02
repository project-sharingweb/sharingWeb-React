import React from 'react'
import './css/ShopLanding.css'
import ShopService from '../../services/ShopService'
import LandingHeader from './components/LandingHeader';
import ProductCard from './components/ProductSection';
import { withShopContext } from '../../contexts/ShopStore'
import ProductMd from'./components/ProductMd'
import ButtonPage from './components/ButtonPage';


const modifyName = (name) => {
  name = name.split("")
  name = name.map(item => {
      if(item === "-") return " "
      else return item
  })
  name[0] = name[0].toUpperCase()
  name = name.join("")
  return name;
}


class ShopLanding extends React.Component {
  state = {
    products: []
  }

  componentDidUpdate(prevProps) {
    const { shop } = this.props
      if (shop !== prevProps.shop) {
        ShopService.listProducts(shop.name)
        .then(products => {
          if (products.length !== this.state.products.length){
          this.setState({products: products})}
        },
        error => console.error(error))
      }
  }


  render() {
    const { shop} = this.props 
    const {products} = this.state
    let list; 
    if(products){
      list = products.map((item, i) => {
        return <ProductCard key={i} data={item}></ProductCard>
      })
    }

    ///Personalized properties
    let shopName;
    let navbarColor
    if(shop){
      shopName = modifyName(shop.name)
      navbarColor = {"backgroundColor": "white"}
    }
    /////

    return (
      <div>
        {shop && <div className=""> 
            <div style={navbarColor}><LandingHeader></LandingHeader></div>
            <ButtonPage />
            <div className="container shop-main-image">
              <h1>{shopName}</h1>
              <p>{shop && shop.moto}</p>
            </div>
            <div className="container shop-product-section">
              <h2>Products</h2>
              <ProductMd products={products} />
              {products && list}
              
            </div>
        </div>}
      </div>
    )
  }
}


export default withShopContext(ShopLanding)