import React from 'react'
import img from "../images/Vector-tel2.png"
import img2 from "../images/Group1.png"
import img3 from "../images/cart.png"
class Menu extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            currentUser: null,
            message: ''
        }
    }
    render() {
        return (

            <nav className="navbar navbar-header">
                <div className="flex-grow-1">
                    <div className="d-flex">
                        <div className="img-profile align-self-center">
                            <img src={sessionStorage.getItem("picture")} />
                        </div>
                        <div className="align-self-start ml-2">
                            <div className="text-s2">ยินดีต้อนรับ</div>
        <div className="text-s3 text-inline">{sessionStorage.getItem("username")} </div>
                        </div>
                    </div>
                </div>
                <div className=" align-self-center">
                    <div className="d-flex justify-content-between">
                        <a href="">
                            <div><img src={img} width="18" /></div>
                        </a>
                        <a href="" className="mx-4">
                            <div><img src={img2} width="18" /></div>
                        </a>
                        <a href="">
                            <div className="position-relative">
                                <img src={img3} />
                                <span className="badge badge-custom">2</span>
                            </div>
                        </a>
                    </div>
                 </div>
        </nav>

        )
  }
}
export default Menu;