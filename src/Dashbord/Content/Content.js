import React, { Component } from 'react'
import './Content.css';
import Images1 from '../../Assets/Images/Gambar1.jpeg'

export default class Content extends Component {
  render() {
    return (
      <div>
           <div className="content"><h4>Product1</h4>
            <img src={Images1} alt="image" className="ImageContent" />
                <p> this is my product is very good </p>
              <button> see more</button>
          </div>
          <div className="content"> Content </div>
          <div className="content"> Content </div>
          <div className="content"> Content </div>
        
      </div>
    )
  }
}
