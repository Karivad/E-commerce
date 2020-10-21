import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux';
import {getProducts} from '../actions/productsActions'

class EditProfile extends Component {
    render() {
        return (
            <div>

                <h2>Edit Profile</h2>
                <hr/>

                <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" name="name" onChange={this.handleChange} />
  </Form.Group>

  <Form.Group controlId="formBasicLast">
    <Form.Label>Last Name</Form.Label>
    <Form.Control type="text" placeholder="Lastname" name="last" onChange={this.handleChange} />
  </Form.Group>
                    
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleChange} />
  </Form.Group>

  <Form.Group controlId="formBasicConfirm">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm password" name="confirm" onChange={this.handleChange} />
    <Form.Text className="text-danger" >
    </Form.Text>
  </Form.Group>

<Form.Group controlId="formBasicPicture">
    <Form.Label>Profile picture URL</Form.Label>
    <Form.Control type="text" placeholder="Profile picture URL" name="nam" onChange={this.handleChange} />
  </Form.Group>

  <Button variant="warning" type="submit">
    Submit
  </Button>
</Form>

        <h2>Your products </h2>
        <hr/>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Short description </th>
      {/* <th>Category </th> */}
      <th>Picture</th>
      <th>Price</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
  {this.props.products.map((tab) => (
    <tr>
      <td>{tab.titre}</td>
      <td>{tab.description}</td>
      {/* <td>{tab.categorie}</td> */}
      <td>{tab.image}</td>
      <td>{tab.prix}</td>
      <td>
      <Button variant="info" type="submit">
    Edit
  </Button>
  <Button variant="danger" type="submit">
    Delete
  </Button>
      </td>
    </tr>
  )
  )}
  </tbody>
</Table>
            </div>
        );
    }
}
const mapDispatchToProps = { 
getProducts                
}

function mapStateToProps(state) { 
  console.log("state: ", state.products.products)
   return {
       token: state.isLogged.token,
       products: state.products.products

   };
 }

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);