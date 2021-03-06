import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table'
import { connect } from 'react-redux';
import {getProducts, deleteProducts} from '../actions/productsActions'
import { updateUser } from '../actions/userLogin'
import axios from 'axios';
import { withRouter} from 'react-router-dom';

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


  editOnClick = (id) => {
    this.props.history.push(`/edit-product/${id}`)
  }

  deleteOnClick = (id) => {
    axios.delete(`http://localhost:8080/products/${id}`,
    
    { headers:
      {
        "Content-Type": "application/json",
        authorization: this.props.token
      }
    })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    this.props.deleteProducts(id)
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
    console.log('reducer', this.props)
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
    <tr key={tab.id}>
      <td>{tab.titre}</td>
      <td>{tab.description}</td>
      {/* <td>{tab.categorie}</td> */}
      <td><img alt={tab.id} src={tab.image}/></td>
      <td>{tab.prix}</td>
      <td>
      <Button variant="info" type="submit" onClick={() => this.editOnClick(tab.id)}>
    Edit
  </Button>
  <Button variant="danger" type="submit" onClick={() => this.deleteOnClick(tab.id)}>
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
updateUser,
deleteProducts                
}

function mapStateToProps(state) { 
  console.log("state: ", state.products.products)
   return {
       token: state.isLogged.token,
       id: state.isLogged.id,
       products: state.products.products

   };
 }

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProfile));