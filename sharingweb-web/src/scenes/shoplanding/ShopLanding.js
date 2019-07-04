import React from 'react'
import './css/ShopLanding.css'
import LandingHeader from './components/LandingHeader';
import { withShopContext } from '../../contexts/ShopStore'
import ProductCard from'./components/ProductCard'
import ButtonPage from './components/ButtonPage';
import LandingFooter from './components/LandingFooter';
import EditForm from './components/EditForm';


class ShopLanding extends React.Component {
  state = {
    edit: true
  }

  modifyEdit = () => {
    const {edit} = this.state
    edit ? this.setState({ ...this.state, edit: false}) : this.setState({...this.state, edit: true})
  }


  render() {
    const { shop, products } = this.props
    const {edit} = this.state
    let list; 
    if(products){
      list = products.map((item, i) => {
        return <ProductCard key={i} product={item}></ProductCard>
      }).slice(0, 11)
    }

    return (
      <div>
        {shop &&
          <div className={edit && "landing-main-wrapper"}>
            {edit && <div className="editform-wrapper"><EditForm edit={this.modifyEdit}></EditForm></div>}
            <div className={edit && "landing-wrapper"}> 
              <div style={shop.styles.nav}><LandingHeader></LandingHeader></div>
              {!edit &&<ButtonPage edit={this.modifyEdit}/>}
              <div className="shop-main-image">
                <div className="container">
                  <h1>{shop.name}</h1>
                  <p>{shop.moto}</p>
                </div>
              </div>
              <div className="container">
                <div className="shop-product-section">
                  <h2>Products</h2>
                  <div className="products-wrapper">
                    {list}
                  </div>
                </div>
              </div>
              <LandingFooter></LandingFooter>
          </div>
        </div>}
      </div>
    )
  }
}


export default withShopContext(ShopLanding)