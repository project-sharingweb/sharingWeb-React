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


class ShopLanding extends React.Component {
  state = {
    edit: false,
    addProduct: false,
  }

  modifyEdit = () => {
    const {edit} = this.state
    edit ? this.setState({ ...this.state, edit: false}) : this.setState({...this.state, edit: true})
  }

  modifyAdd = () => {
    const {addProduct} = this.state
    addProduct ? this.setState({ ...this.state, addProduct: false}) : this.setState({...this.state, addProduct: true})
  }



  render() {
    const { shop, products, isAuthenticated } = this.props
    const {edit, addProduct} = this.state
    let list; 
    if(products){
      list = products.map((item, i) => {
        return <ProductCard key={i} product={item}></ProductCard>
      }).slice(0, 12)
    }
    if (shop) console.log(shop.styles.landingImage)
    return (
      <div>
        {shop &&
          <div style={shop.styles.background} className={(edit || addProduct) ? "landing-main-wrapper" : undefined}>
            {edit && <div className="editform-wrapper"><EditForm edit={this.modifyEdit}></EditForm></div>}
            {addProduct && <div className="editform-wrapper"><AddProductForm add={this.modifyAdd}></AddProductForm></div>}
            <div className={(edit || addProduct) ? "landing-wrapper" : undefined}> 
              <div style={shop.styles.nav}><LandingHeader></LandingHeader></div>
              {isAuthenticated() && !edit && !addProduct && <ButtonPage edit={this.modifyEdit} add={this.modifyAdd}/>}
              <div style={shop.styles.landingImage} className="shop-main-image">
                <div className="container">
                  <h1 style={shop.styles.titleFont}>{shop.name}</h1>
                  <p>{shop.moto}</p>
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
                  <h2>Products</h2>
                  <div className="products-wrapper">
                    {list}
                  </div>
                </div>
              </div>
              <LandingFooter></LandingFooter>          
            </div>
          </div>
        }
      </div>
    )
  }
}


export default WithAuthContext(withShopContext(ShopLanding))