import React from 'react'
import fimg1 from '../images/Group.png'
import fimg2 from '../images//Vector-tel.png'
import fimg3 from '../images/Group12.png'
import fimg4 from '../images/Vector.png'
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
      return (
        <nav className="navbar  navbar-footer">
        <a href="#" className="text-s1" >
            <div className="icon"><img src={fimg1}/></div>
            <div>โทรฉุกเฉิน</div>
        </a>
        <div className="divide-line"></div>
        <a href="#" className="text-s1">
            <div className="icon"><img src={fimg2} width="20"/></div>
            <div>ติดต่อเรา</div>
        </a>
        <div className="divide-line"></div>
        <a href="#" className="text-s1">
            <div className="icon"><img src={fimg3}/></div>
            <div>ข่าวสาร</div>
        </a>
        <div className="divide-line"></div>
        <a href="#" className="text-s1">
            <div className="icon"><img src={fimg4}/></div>
            <div>แผนที่</div>
        </a>

      </nav>
      )
  }
}
export default Footer;