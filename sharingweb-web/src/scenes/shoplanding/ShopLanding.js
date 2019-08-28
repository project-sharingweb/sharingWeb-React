import React from 'react'
import './css/ShopLanding.css'
import LandingHeader from './components/LandingHeader';
import { withShopContext } from '../../contexts/ShopStore'
import ProductCard from'./components/ProductCard'
import ButtonPage from './components/ButtonPage';
import LandingFooter from './components/LandingFooter';
import EditForm from './components/EditForm';
import { WithAuthContext } from '../../contexts/AuthStore'
import AddProductForm from './components/AddProductForm';
import AddSection from './components/AddSection';


class ShopLanding extends React.Component {
  state = {
    edit: false,
    addProduct: false,
    addSection: false,
    seeMore: false
  }
  modify = stateProp => {
    this.state[stateProp] ? this.setState({ ...this.state, [stateProp]: false}) : this.setState({...this.state, [stateProp]: true})
  }


  render() {
    const { shop, products, isAuthenticated, shopUser } = this.props
    if (shop) document.title = shop.name
    if (shop) document.getElementById("ico").setAttribute("href", shop.logo)
    const {edit, addProduct, seeMore, addSection} = this.state
    let list; 
    if (products){
      list = products.map((item, i) => {
        return <ProductCard key={i} product={item}></ProductCard>
      }).slice(0, 8)
    }
    let shownCategories
    if (shop && shop.productSections.length > 0) {
      shownCategories = shop.productSections.map(item => {
        let productsFiltered = products.filter(product => product.category === item)
        let listingProducts = productsFiltered.map((product, i) => {
          return <ProductCard key={i} product={product}></ProductCard>
        }).slice(0, 4)
        return (<div className="shop-product-section" data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="20"
        data-aos-duration="500"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top">
          <h2 style={shop.styles.text}>{item}</h2>
          <div className="products-wrapper pb-5">
            {listingProducts}
          </div>
        </div>)
    })}

    return (
      <div className="main-background">
        {(isAuthenticated() && addSection) ? <AddSection modify={this.modify}/>:<React.Fragment>
        { shop &&
          <React.Fragment>
          {(isAuthenticated() && shopUser.name === shop.name) && !edit && !addProduct && <ButtonPage modify={this.modify}/>}
          <div style={shop.styles.background} className={((edit || addProduct) ? "landing-main-wrapper" : seeMore ? "hide-me" : undefined)}>
            {edit && <div className="editform-wrapper"><EditForm modify={this.modify}></EditForm></div>}
            {addProduct && <div className="editform-wrapper"><AddProductForm modify={this.modify}></AddProductForm></div>}
            <div className={(edit || addProduct) ? "landing-wrapper hide-me" : undefined}> 
              <div style={shop.styles.nav}><LandingHeader></LandingHeader></div>
              <div style={shop.styles.landingImage} className="shop-main-image">
                <div className="container landing-shop-image-section">
                  <h1 style={shop.styles.titleFont}>{shop.name}</h1>
                  <p style={shop.styles.motoColor} >{shop.moto}</p>
                </div>
              </div>
              <div className="container">
                <div className="shop-product-section" data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="20"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top">
                  <h2 style={shop.styles.text}>Products</h2>
                  <div className="products-wrapper pb-5">
                    {list}
                  </div>
                </div>
                {shownCategories}
              </div>
              <LandingFooter></LandingFooter>          
            </div>
          </div>
          </React.Fragment>
        }</React.Fragment>}
      </div>
    )
  }
}


export default WithAuthContext(withShopContext(ShopLanding))