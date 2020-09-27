import React, { Component } from 'react'

import Home from './components/Home'
import Menu from './components/Menu';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail'
import './App.css'
import './styles/main.css'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userID: '',
      name: '',
      currentUser: null,
      picture: ''
    }

  }
  componentDidMount(){
    console.log(sessionStorage.getItem("lastname"));
 
    let search = window.location.search;
    let params = new URLSearchParams(search);
    let code = params.get('code');
    
       console.log(code);
       if(code != undefined  && code != null && sessionStorage.getItem("userID") == null){
        var request = require('request');
        var options = {
          'method': 'POST',
          'url': 'https://api.line.me/oauth2/v2.1/token',
          'headers': {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          form: {
            'grant_type': 'authorization_code',
            'code':code,
            'redirect_uri': 'http://localhost:3000/lineAPI',
            'client_id': '1654986755',
            'client_secret': 'bdc92e6f36cc32f1f48f91c0d1ca2f45'
          }
        };
        request(options, function (error, response) {
          if (error) throw new Error(error);
    
          let data = JSON.parse(response.body);
          console.log(data.id_token);
        var options2 = {
            'method': 'POST',
            'url': 'https://api.line.me/oauth2/v2.1/verify',
            'headers': {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
              'id_token': data.id_token,
              'client_id': '1654986755'
            }
          };
          request(options2, function (error, response2) {
            if (error) throw new Error(error);
     
            let data2 = JSON.parse(response2.body);
            console.log(data2);
            if(data2.error == 'invalid_request'){
              console.log(this.state.currentUser);
              if(sessionStorage.getItem("userID") == null){
                // location.href = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1654986755&redirect_uri=http://localhost:3000/lineAPI&state=12345abcde&scope=profile%20openid&nonce=09876xyz";
                 window.location.href = "https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1654986755&redirect_uri=http://localhost:3000/lineAPI&state=12345abcde&scope=profile%20openid&nonce=09876xyz";
             
              }
          
            }else{
              this.setState({
                currentUser: true
              })
              sessionStorage.setItem("userID", data2.aud);
              sessionStorage.setItem("username",data2.name);
              sessionStorage.setItem("picture", data2.picture);
                 var options3 = {
                    'method': 'POST',
                    'url': 'http://localhost/LoginPHP/index.php?method=save',
                    'headers': {
                      'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    form:  { 'user_id': data2.aud,
                    'username': data2.name,
                    'picture':data2.picture
                  }
                  };
              
                  console.log(options3);
                  request(options3, function (error, response3) {
                    if (error) throw new Error(error);
             
                    // let data3 = JSON.parse(response3);
                    console.log(response3.body);
                
                  });
            }
          }.bind(this));
        }.bind(this));
        
     
       }
  }

  render() {
  
    // console.log(this.state.currentUser);
    if(sessionStorage.getItem("userID") == null){
      return(
        <Router>
        {/* Router component can have only 1 child. We'll use a simple
          div element for this example. */}
        <div>

          Loin Line
        </div>
      </Router>
      )
    }else{
      return(
        <Router>
        {/* Router component can have only 1 child. We'll use a simple
          div element for this example. */}
    <div className="content">
          <Menu/>
          <Route exact path="/" component={Home} />
          <Route exact path="/lineAPI" component={Home} />
          <Route path="/ProductDetail" component={ProductDetail} />
          <Footer/>
        </div>
      </Router>
      )
    }
  
  }

}

export default App
