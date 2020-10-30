import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import {deleteProduct} from '../actions/cartActions'
import { connect } from 'react-redux';

class AddCart extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  deleteOnClick(id) {
    this.props.deleteProduct(id)
  }

    render() {
      console.log(this.props.cart);
        return (
            <div>
                <h1>Cart</h1>

                <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Short description </th>
      <th>Category </th>
      <th>Picture</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
  </thead>

  <tbody> 
        
  {this.props.cart.length ? this.props.cart.map( tab => (
      
      <tr key={tab.id}>
      <td>{tab.titre}</td>
      <td>{tab.description}</td>
      <td>{tab.categorie}</td>
      <td><img alt={tab.id} src={tab.image}/></td>
      <td>{tab.prix}</td>
      <td>
 
  <Button variant="danger" type="submit" onClick={() => this.deleteOnClick(tab.id)}>
    Remove
  </Button>
      </td>
    </tr>)
  
  ) : null} 
    <tr>
      <td>Total</td>
      <td></td>
      <td></td>
      <td></td>
      <td>{this.props.cart.length ? this.props.cart.reduce((accumulator, currentValue = null) => accumulator.prix + currentValue.prix) : 0}</td>
      <td></td>
    </tr>
  </tbody>
</Table>


</div>
            
        );
    }
}

const mapDispatchToProps = { 
    deleteProduct
    }
    
    function mapStateToProps(state) { 
      console.log("state: ", state.products.products)
       return {
           token: state.isLogged.token,
           id: state.isLogged.id,
           products: state.products.products,
           cart: state.cartReducer
    
       };
     }
    
    export default connect(mapStateToProps, mapDispatchToProps)(AddCart);