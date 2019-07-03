import React from "react";
import "../css/ButtonPage.css"



class ButtonPage extends React.Component {
  state={
    seeMore: false,
    home: false
  }
  
  modifyseeMore = () => {
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
        <div className="instructions-footer">
          <div className="more" onClick={()=> this.modifyseeMore()}> See more </div>
          {this.state.seeMore && <p className="white">asncljaehuvkbehjvbe</p>}
          <button className="btn btn-default button-shop" onClick={() => edit()}>Edit Page</button>
          <button className="btn btn-default button-shop">Add Products</button>
        </div>
    )
  }
}

export default ButtonPage;