import React from 'react'

class ProductList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        productlist:[]
    }
    this.showProduct = this.showProduct.bind(this);
  }
  showProduct = (id) => {
    window.location.href = "ProductDetail?&id="+id;
    // console.log(id);
  }
  componentDidMount(){
    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'http://localhost/LoginPHP/index.php?method=getProduct',
      'headers': {
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      let data = JSON.parse(response.body);
    //   console.log(data);
      this.setState({
        productlist:data
      });

    }.bind(this));
    
  }
  render() {
      console.log(this.state.productlist);
      return (
        <div className="">
        <ul className="nav nav-pills " id="pills-tab" role="tablist ">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="pills-tab-1" data-toggle="pill" href="#pills-1" role="tab">
              Feature product
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-tab-2" data-toggle="pill" href="#pills-2" role="tab">แพ็กเกจศูนย์หัวใจ</a>
          </li>
          <li className="nav-item" role="presentation">
            <a className="nav-link" id="pills-tab-3" data-toggle="pill" href="#pills-3" role="tab">แพ็กเกจตรวจสุขภาพ</a>
          </li>
        </ul>
        <div className="tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-1" role="tabpanel">
            <div className="row">
             {this.state.productlist.map((item) =>

                             <div className="col-6" key={item.product_id} >
                        
                             <div className="card custom-card">
                               <img src={require('../images/'+item.product_img)} className="card-img-top" alt=""/>
                               <div className="card-body">
                                 <h5 className="card-title"  onClick={() => this.showProduct(item.product_id)}>Hormone Healthy Plus</h5>
                                 <p className="card-text">An appropriate program for diagnosing adrenal fatigue...</p>
                     
                                 <div className="d-flex">
                                   <div className="align-self-start flex-grow-1 pr-1 ">
                                     <button type="button" className="btn btn-green ">Buy Now</button>
                                   </div>
                                   <div className="align-self-start">
                                     <button type="button" className="btn btn-green-outline">
                                       <img src={require("../images/icon-cart-g.png")}/>
                                     </button>
                                   </div>
                                 </div>
                     
                               </div>
                             </div>
                           </div>
                )}
    
   
  
        
        
          
          </div>
          <div className="tab-pane fade" id="pills-2" role="tabpanel">
            <div className="row">
 
            </div>
          </div>
          <div className="tab-pane fade" id="pills-3" role="tabpanel">
            <div className="row">

            </div>
          </div>
        </div>
        </div>
        </div>
      )
  }
}
export default ProductList;
