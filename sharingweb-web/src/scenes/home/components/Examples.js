import React from 'react'
import "../css/example.css"
import BoxExample from './BoxExample';
import ExampleLogo from '../../../images/example.png'



const Example = () => {

  return(
    <div className="example-section">
      <div className="container">
        <h2>This is a example de landing page create to SharingWeb</h2>
        <p></p>
        <div className="example-content">
          <BoxExample image={ExampleLogo} title="Landing page" text="This is a example create in Sharing web"></BoxExample>
        </div>
      </div>
    </div>
    
  )
}

export default Example