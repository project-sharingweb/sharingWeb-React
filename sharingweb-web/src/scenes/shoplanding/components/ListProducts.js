import React from 'react'
import LandingHeader from '../components/LandingHeader'
import {withShopContext} from '../../../contexts/ShopStore';
import ProductCard from './ProductCard';
import LandingFooter from './LandingFooter';
import '../css/ListProducts.css'



class ListProducts extends React.Component {
  state = {
    category: "all"
  }

  handleChange = e => {
    const {value} = e.target
    this.setState({
      category: value
    })
  }

  render() {
    const {shop, products} = this.props
    const {category} = this.state
    let list;
    let options;
    if(products){
        const categories = [...new Set(products.map(item => item.category))]
          options = categories.map((item, i) => {
            return <option key={i} value={item}>{item}</option>
          })
        if (category === "all"){
          list = products.map((item, i) => {
            return <ProductCard key={i} product={item}></ProductCard>
          })
        } else {
          let filtered = products.filter(item => item.category === category)
          list = filtered.map((item, i) => {
            return <ProductCard key={i} product={item}></ProductCard>
          })
        }
    }

    return (
      <div>
      {shop &&
        <div style={shop.styles.background}>
          <LandingHeader></LandingHeader>
          <div className="container">
            <div className="mt-4">
              <label className="mr-sm-2" htmlFor="inlineFormCustomSelect">Choose your category</label>
              <select className="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={this.handleChange}>
              <option  value="all">Show all products...</option>
              {options}
              </select>
            </div>
            <h1 className="category-title">{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
            <div className="products-wrapper mb-5">
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