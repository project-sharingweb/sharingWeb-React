import React from 'react'
import '../css/AddSection.css'
import {withShopContext} from '../../../contexts/ShopStore'
import ShopService from '../../../services/ShopService'
import categoriesPic from '../../../images/cat1.png'
import textPic from '../../../images/text1.png'
import imagePic from '../../../images/imagecap1.png'


class AddSection extends React.Component {
  state = {
    selection: true,
    categorySec: false,
    imageSec: false,
    textSec: false,
    category: "all",
    secType: "",
    image: "",
    text: "",
    title: ""
  }

  onChosenSection = num => {
    if (num === 1) {
      this.setState({...this.state, selection: false, categorySec: true})
    }
    else if (num === 2) {
      this.setState({...this.state, selection: false, imageSec: true, secType: "image"})
    }
    else {
      this.setState({...this.state, selection: false, textSec: true, secType: "text"})
    }
  }

  closeSection = () => {
    this.setState({
      ...this.state,
      selection: true,
      categorySec: false,
      imageSec: false,
      textSec: false,
      category: "all",
      secType: "",
      image: "",
      text: "",
      title: ""
    })
  }

  handleChange = e => {
    const {value, name, files} = e.target
    this.setState({
      ...this.state,
      [name]: files && files[0] ? files[0] : value
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

  onSectionImageAdded = () => {
    const {shop} = this.props
      let newSec = {
        secType: "image",
        title: this.state.title,
        image: this.state.image,
        text: this.state.text
      }
    ShopService.editShop(shop, "a", newSec)
      .then(shop => this.props.updateShop(shop.urlName), error => console.error(error))

    this.props.modify("addSection")
    }

  onSectionTextAdded = () => {
    const {shop} = this.props
    let newSec = {
      secType: "text",
      title: this.state.title,
      text: this.state.text
    }
    shop.sections.push(newSec)
    ShopService.editShop(shop, "")
      .then(shop => this.props.updateShop(shop.urlName), error => console.error(error))

    this.props.modify("addSection")
  }

  render() {
    const {selection, categorySec, imageSec, textSec, category, image, text, title} = this.state
    const {products} = this.props
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
                <img className="choose-section-image" src={categoriesPic} alt="add category section"></img>
                <p className="choose-section-text">Add category section</p>
              </div>
              <div className="choose-section-element" onClick={() => this.onChosenSection(2)}>
                <img className="choose-section-image" src={imagePic} alt="add pic and text section"></img>        
                <p className="choose-section-text">Add image and text section</p>
              </div>
              <div className="choose-section-element" onClick={() => this.onChosenSection(3)}>
                <img className="choose-section-image" src={textPic} alt="add text section"></img>          
                <p className="choose-section-text">Add text section</p>
              </div>
            </div>  
            <p className="add-section-go-back-link" onClick={() => this.props.modify("addSection")}>Go back>>></p>    
          </div>:
          <div className="container">
            {categorySec && (
              <div className="mt-4">
                <p className="on-section-go-back-link" onClick={() => this.closeSection()}>Go back>>></p>
                <label className="section-label" htmlFor="inlineFormCustomSelect">Select what category you want to add</label>
                <select name="category" className="custom-select mb-2" id="inlineFormCustomSelect" onChange={this.handleChange}>
                <option  value="all">Show all products...</option>
                {options}
                </select>
                <div className="section-button"><button className={category === "all" ? "btn btn-success disabled": "btn btn-success"} onClick={() => this.onCategorySecAdded()}>Add Category</button></div>
            </div>
            )}
            {imageSec && (
              <div className="container">
              <p className="on-section-go-back-link" onClick={() => this.closeSection()}>Go back>>></p>
              <form onSubmit={this.handleSubmit} className="register-form form-wrapper">
                <div className="form-group">
                  <label className="section-label" htmlFor="Titletext">Type your title</label>
                  <input name='title'
                    rows="10"
                    type="text"
                    value={title}
                    className={`form-control`}
                    id="Titletext"
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label className="section-label" htmlFor="Image">Upload your image</label>
                  <input name='image'
                    type="file"
                    className={`form-control`}
                    id="Image"
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                  <label className="section-label" htmlFor="Text">Type your text</label>
                  <textarea name='text'
                    rows="8"
                    type="text"
                    value={text}
                    className={`form-control`}
                    id="Text"
                    onChange={this.handleChange}/>
                </div>
                <div className="section-button"><button className={(title === "" || text === "" || image === "") ? "btn btn-success disabled": "btn btn-success"} onClick={() => this.onSectionImageAdded()}>Add Section</button></div>
              </form>
            </div>
            )}
            {textSec && (
              <div className="container">
                <p className="on-section-go-back-link" onClick={() => this.closeSection()}>Go back>>></p>
                <form onSubmit={this.handleSubmit} className="register-form form-wrapper">
                  <div className="form-group">
                    <label className="section-label" htmlFor="Titletext">Type your title</label>
                    <input name='title'
                      rows="10"
                      type="text"
                      value={title}
                      className={`form-control`}
                      id="Titletext"
                      onChange={this.handleChange}/>
                  </div>
                  <div className="form-group">
                    <label className="section-label" htmlFor="Text">Type your text</label>
                    <textarea name='text'
                      rows="10"
                      type="text"
                      value={text}
                      className={`form-control`}
                      id="Text"
                      onChange={this.handleChange}/>
                  </div>
                  <div className="section-button"><button className={(title === "" || text === "") ? "btn btn-success disabled": "btn btn-success"} onClick={() => this.onSectionTextAdded()}>Add Section</button></div>
                </form>
              </div>
            )}
          </div>
        }
      </React.Fragment>
      )
  }
}

export default withShopContext(AddSection)