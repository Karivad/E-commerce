import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux';
import {getProducts} from '../actions/productsActions'
import { updateUser } from '../actions/userLogin'
import axios from 'axios';

class EditProfile extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      last: '',
      email: '',
      password: '',
      confirm: '',
      image: '',
    };
  }

  handleChange = event => {
    const targetName = event.target.name
    this.setState({[targetName]: event.target.value})  
}

handleSubmit = event => {
  event.preventDefault();
  if(this.state.password === this.state.confirm) {
      const user = {                                      // objet user envoyé à Axios
          name: this.state.name,
          last: this.state.last,
          email: this.state.email,
          password: this.state.password,
          image: this.state.image,
          id: this.props.id

      }  
      axios.put(`http://localhost:8080/edit-profile`, user)
          .then(res => {
              console.log(res);
              console.log(res.data);

              this.props.updateUser({
                image:  user.image,
                email: user.email
              })
          })

      console.log(this.state)
  } else {
      console.log("Wrong password");
      this.setState({msg: "wrong password"})  

  }
 
}

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
    <Form.Control type="text" placeholder="Profile picture URL" name="image" onChange={this.handleChange} />
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
  {this.props.products.filter(element => element.user_affiliate_id === this.props.id).map((tab) => (
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
getProducts,
updateUser                
}

function mapStateToProps(state) { 
  console.log("state: ", state.products.products)
   return {
       token: state.isLogged.token,
       id: state.isLogged.id,
       products: state.products.products

   };
 }

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);