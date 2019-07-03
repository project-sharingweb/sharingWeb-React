import React from "react";
import "../css/ButtonPage.css"



class ButtonPage extends React.Component {
  state={
    seeMore: false,
    home: false
  }
  
  modifySeeMore = () => {
    const {seeMore} = this.state

    if (seeMore === true){
      this.setState({
      ...this.state,
      seeMore: false
    })
    }else {
      this.setState({
        ...this.state,
        seeMore: true
      })
  }
  }






  render() {
    const { edit } = this.props
    console.log(this.state.seeMore)
    return (
      <div className="container instructions-footer">
        <div className="more-info">
          <div>{this.state.seeMore && <p color="white">In this section you have information to add produts and edit page</p>}</div>
        </div>
        <div className="button-rows">
          <div className="more" onClick={()=> this.modifySeeMore()}> See more </div>
          <div className="button-shop">
            <button className="btn btn-default button-shop">Edit Page</button>
            <button className="btn btn-default button-shop">Add Products</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ButtonPage;