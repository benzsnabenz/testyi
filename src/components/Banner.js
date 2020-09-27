
import React from 'react'
import img_banner from '../images/banner.png'
class Banner extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
      return (
 
        <div className="banner">
        <img src={img_banner} className="w-100"/>
      </div>
      )
  }
}
export default Banner;