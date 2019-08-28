import React from 'react'
import '../css/AddSection.css'
import {withShopContext} from '../../../contexts/ShopStore'
import ShopService from '../../../services/ShopService'


class AddSection extends React.Component {
  state = {
    selection: true,
    categorySec: false,
    imageSec: false,
    textSec: false,
    category: "all",
    image: "",
    text: "",
    title: ""
  }

  onChosenSection = secType => {
    if (secType === 1) {
      this.setState({...this.state, selection: false, categorySec: true})
    }
    else if (secType === 2) {
      this.setState({...this.state, selection: false, imageSec: true})
    }
    else {
      this.setState({...this.state, selection: false, textSec: true})
    }
  }

  handleCategoryChange = e => {
    const {value} = e.target
    this.setState({
      category: value
    })
  }

  onCategorySecAdded = () => {
    const {shop} = this.props
    shop.productSections.push(this.state.category)
    shop.productSections = [...new Set(shop.productSections)]
    ShopService.editShop(shop, "")
      .then(shop => this.props.updateShop(shop.urlName), error => console.error(error))

    this.props.modify("addSection")
  }

  render() {
    const {selection, categorySec, imageSec, textSec, category} = this.state
    const {shop, products} = this.props
    let options;
    if(products){
      const categories = [...new Set(products.map(item => item.category))]
      options = categories.map((item, i) => {
          return <option key={i} value={item}>{item}</option>
      })
    }
    return (
      <React.Fragment>
        {selection ? 
          <div className="container">
            <h1 className="add-section-title">Add new section to your store</h1>
            <div className="choose-section-wrapper">
              <div className="choose-section-element" onClick={() => this.onChosenSection(1)}>
                <img className="choose-section-image" src="https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/note.png" alt="add category section"></img>
                <p className="choose-section-text">Add category section</p>
              </div>
              <div className="choose-section-element" onClick={() => this.onChosenSection(2)}>
                <img className="choose-section-image" src="https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/note.png" alt="add pic and text section"></img>        
                <p className="choose-section-text">Add image and text section</p>
              </div>
              <div className="choose-section-element" onClick={() => this.onChosenSection(3)}>
                <img className="choose-section-image" src="https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/note.png" alt="add text section"></img>          
                <p className="choose-section-text">Add text section</p>
              </div>
            </div>      
          </div>:
          <div className="container">
            {categorySec && (
              <div className="mt-4">
                <label className="category-label" htmlFor="inlineFormCustomSelect">Select what category you want to add</label>
                <select className="custom-select mb-2" id="inlineFormCustomSelect" onChange={this.handleCategoryChange}>
                <option  value="all">Show all products...</option>
                {options}
                </select>
                <div className="category-button"><button className={category === "all" ? "btn btn-success disabled": "btn btn-success"} onClick={() => this.onCategorySecAdded()}>Add Category</button></div>
            </div>
            )}
            {imageSec && (
              <div>Hola</div>
            )}
            {textSec && (
              <div>Wola</div>
            )}
          </div>
        }
      </React.Fragment>
      )
  }
}

export default withShopContext(AddSection)