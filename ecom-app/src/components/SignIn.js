import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import {userLogin} from '../actions/userLogin'
const jwt = require('jsonwebtoken')



class SignIn extends Component {
    constructor() {
        super();
        this.state = {
            // name: '',
            email: '',
            password: '',
          
      }
    }

    handleChange = event => {
        const targetName = event.target.name

        this.setState({[targetName]: event.target.value})  
        
    }

    handleSubmit = event => {
        event.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        } 
      
        axios.post(`http://localhost:8080/sign-in`, user)
            .then(res => {
              const token = res.data.token
             try {
              let decoded = jwt.decode(token)
              decoded.token = token
              console.log(decoded)
              this.changeIsLogged(decoded)
            } 
            catch (err) {
              console.log(err)
            }
            
            })
            .catch((err) => {
                console.log("password ou email erroné");
            })
    }
    changeIsLogged = (data) => {
      this.props.userLogin(data).bind(this)
    }

    render() {
        return (
            <div>
                <h1>Sign In</h1>

<Form onSubmit={this.handleSubmit}>
    {/* <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Name" name="name" onChange={this.handleChange} />
  </Form.Group> */}
                    
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

  <Button variant="warning" type="submit">
    Sign In
  </Button>
</Form>
{this.props.isLogged.isUserLogged && <h2>You are logged</h2>}


            </div>
        );
    }
}

function mapStateToProps(state) { //Accéder aux données de notre store dans les props
  return {
      isLogged: state.isLogged
  };
}

const mapDispatchToProps = { //Permettre de modifier les données par l'appel des actions en les appelant par les props
  userLogin                 // A l'appel, de this.props.userLogin -> isUserLogged  = true
}

export default connect( 
  mapStateToProps, mapDispatchToProps
)(SignIn);