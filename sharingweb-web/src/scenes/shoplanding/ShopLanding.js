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
import {Redirect} from 'react-router-dom'


class ShopLanding extends React.Component {
  state = {
    edit: false,
    addProduct: false,
    onDelete: false,
    seeMore: false
  }

  modifySeeMore = () => {
    const {seeMore} = this.state
    seeMore ? this.setState({ ...this.state, seeMore: false}) : this.setState({...this.state, seeMore: true})
  }

  modifyEdit = () => {
    const {edit} = this.state
    edit ? this.setState({ ...this.state, edit: false}) : this.setState({...this.state, edit: true})
  }

  modifyAdd = () => {
    const {addProduct} = this.state
    addProduct ? this.setState({ ...this.state, addProduct: false}) : this.setState({...this.state, addProduct: true})
  }

  modifyOnDelete = () => {
    const {onDelete} = this.state
    onDelete ? this.setState({ ...this.state, onDelete: false}) : this.setState({...this.state, onDelete: true})
  }


  render() {
    const { shop, products, isAuthenticated, shopUser } = this.props
    if (shop) document.title = shop.name
    if (shop) document.getElementById("ico").setAttribute("href", shop.logo)
    const {edit, addProduct, onDelete, seeMore} = this.state
    let list; 
    if(products){
      list = products.map((item, i) => {
        return <ProductCard key={i} product={item} onDelete={this.modifyOnDelete}></ProductCard>
      }).slice(0, 12)
    }

    return (
      <div className="main-background">
        { onDelete && <Redirect to={`/shops/${shop.urlName}`}/>}
        {shop &&
          <React.Fragment>
          {(isAuthenticated() && shopUser.name === shop.name) && !edit && !addProduct && <ButtonPage edit={this.modifyEdit} add={this.modifyAdd} seeMore={this.modifySeeMore}/>}
          <div style={shop.styles.background} className={((edit || addProduct) ? "landing-main-wrapper" : seeMore ? "hide-me" : undefined)}>
            {edit && <div className="editform-wrapper"><EditForm edit={this.modifyEdit}></EditForm></div>}
            {addProduct && <div className="editform-wrapper"><AddProductForm add={this.modifyAdd}></AddProductForm></div>}
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
              </div>
              <LandingFooter></LandingFooter>          
            </div>
          </div>
          </React.Fragment>
        }
      </div>
    )
  }
}


export default WithAuthContext(withShopContext(ShopLanding))