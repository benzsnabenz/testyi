
import React from 'react'

class ProductDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      detail:[]
    }
  }
  componentDidMount(){
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let code = params.get('id');
console.log(code);
    var request = require('request');
    var options = {
      'method': 'POST',
      'url': 'http://localhost/LoginPHP/index.php?method=getProductByid&id='+code
      // formData: {
      //   'id': '1'
      // }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
   
      let data = JSON.parse(response.body);
      console.log(data);

      this.setState({
        detail:data
      });

    }.bind(this));

  }
  render() {
    return (
     <React.Fragment>
           {this.state.detail.map((item) =>
      <div className="" key={item.product_id}>
        
        <div className="product-image">
          <img src={require("../images/"+item.product_img)} className="w-100" />
        </div>
        <div className="pd">
          <div className="d-flex justify-content-between mt-3">
            <div className="text-s7 align-self-center">{item.product_name}</div>
            <button className="btn btn-link p-0">
              <img src={require("../images/h.png")} />
            </button>
          </div>

          <div className="d-flex justify-content-between mt-3 mb-3">
            <div className="text-s4 align-self-center">Cost :</div>
            <div>
              <div className="bt-2 text-s7">39,800</div>
            </div>
          </div>

          <div className="d-flex">
            <div className="text-s4 align-self-center mr-3">
              QTY :
          </div>
            <div>
              <div className="input-group">
                <span className="input-group-btn">
                  <button type="button" className="btn btn-number-2 btn-tran btn-number " data-type="minus" data-field="quant">
                    -
                  </button>
                </span>
                <input type="text" name="quant" className="form-control form-control-sm input-number  input-number-2 text-center" value="1" min="1" max="100"/>
                  <span className="input-group-btn">
                    <button type="button" className="btn btn-number-2  btn-tran mtc-1 btn-number " data-type="plus" data-field="quant">
                      +
                  </button>
                  </span>
            </div>
              </div>
            </div>

          </div>


          <div className="product-detail">
        <div className="mb-2 text-s1">Product Details</div>
        <div className="seeall text-s8">
        {item.product_des}
        </div>
        <div className="text-center mt-2">
          <button className="btn btn-link btn-seeall">
            See more
            <img src={require("../images/dropdown-g.png")}/>
          </button>
        </div>
      </div>
      <div className="py-3"></div>

      <div className="px-2 button-position">
        <div className="d-flex">
          <div>
            <button type="button" className="btn btn-green-outline size-l">
              <img src={require("../images/Vectormessage.png")}/>
            </button>
          </div>
          <div className="px-1">
            <button type="button" className="btn btn-green-outline size-l">
              <img src={require("../images/icon-cart-g.png")}/>
            </button>
          </div>
          <div className="flex-grow-1">
            <button type="button" className="btn btn-green cw size-l">Buy Now</button>
          </div>
        </div>
      </div>
        </div>
           )}

        </React.Fragment>
    )
  }
}
export default ProductDetail;