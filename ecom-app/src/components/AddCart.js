import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'

import { connect } from 'react-redux';

class AddCart extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }
  }

  displayCart() {
    let productArray = []
    this.props.cart.forEach(element => {
      productArray.push(this.props.products.find(elem => elem.id === element))
      console.log(productArray)
      
    });
  }
    render() {
        return (
            <div>
                <h1>Cart</h1>

                {/* <Table striped bordered hover>
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

  <tbody> */
        
  /* {this.props.products.filter(element => element.id === this.props.id).map((tab) => (
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
    </tr>
  )
  )} 
  </tbody>
</Table>*/}

{this.displayCart()}
</div>
            
        );
    }
}

const mapDispatchToProps = { 
    
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