import React from 'react'
import LandingHeader from '../components/LandingHeader'
import {withShopContext} from '../../../contexts/ShopStore';
import ProductCard from './ProductCard';
import LandingFooter from './LandingFooter';



class ListProducts extends React.Component {
  state = {
    category: "all"
  }

  render() {
    const {shop, products} = this.props
    const {category} = this.state
    let list;
    if(products){
        if (category === "all")
        list = products.map((item, i) => {
          return <ProductCard key={i} product={item}></ProductCard>
        })
    }

    return (
      <div>
      {shop &&
        <div style={shop.styles.background}>
          <LandingHeader></LandingHeader>
          <div className="container">
            <div>
              <label class="mr-sm-2" for="inlineFormCustomSelect">Category</label>
              <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
              <option selected>All products</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              </select>
            </div>
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

export default withShopContext(ListProducts)