
import React from 'react'
import Banner from '../components/Banner'
import ProductList from '../components/ProductList'
class Home extends React.Component {
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
        
      <div>
        <Banner/>
        <ProductList/>
        
        </div>
      )
  }
}
export default Home;