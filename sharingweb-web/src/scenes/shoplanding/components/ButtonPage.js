import React from "react";
import "../css/ButtonPage.css"




class ButtonPage extends React.Component {
  state={
    seeMore: false,
    closeEdit: false
  }
  
  modifySeeMore = () => {
    const {seeMore} = this.state
    this.props.seeMore()

    if (seeMore === true){
      this.setState({
      ...this.state,
      seeMore: false
    })
    } else {
      this.setState({
        ...this.state,
        seeMore: true
      })
  }
  }

  render() {
    const { edit, add } = this.props
    return (
      <div className={this.state.seeMore ? "instructions-footer-wrapper instructions-footer-wrapper-mobile":"instructions-footer-wrapper"}>
        <div className="container instruct-footer">
          <div className="more-info">
            <div>{this.state.seeMore && (<React.Fragment>
            <h1>Welcome to your shop!!</h1>  
            <p>Here you will find the instructions to edit your shop</p>
            <h2>Edit Button</h2>
            <p>This button will open an editor that will allow you to modify some properties of your shop. You will also be able to upload your logo and your backgroun image.</p>
            <p>It is recommended to use an square picture of maximun 200px*200px as your logo pic, and a horizontal picture for your background image.</p>
            <h2>Add Product Button</h2>
            <p>This button will open an editor that will allow you to introuduce new product in your store. You will also be able to upload pictures of your products</p>
            <p>It is recommended to use an square picture of maximun 500px*500px as your product pic.</p>
            <h2>About us section</h2>
            <p>In the navigation bar, you will be able to navigate to your about us section. There you will be able to edit your about us and explain your customers anything you want about your shop. You can include your shipping and return policies</p>
            </React.Fragment>)}</div>
          </div>
          <div className="more" onClick={()=> this.modifySeeMore()}>{this.state.seeMore ? "See less>>>": "See more>>>" }</div>
          <div className="button-shop">
            <button className="btn btn-default button-shop" onClick={()=> edit()}>Edit Page</button>
            <button className="btn btn-default button-shop" onClick={()=> add()}>Add Products</button>
          </div>
          
        </div>
      </div>
      
    )
  }
}

export default ButtonPage;