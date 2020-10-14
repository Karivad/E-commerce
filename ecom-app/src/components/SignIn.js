import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



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
                if (res) {
                    console.log("vous êtes bien connecté",res);
                    console.log(res.data);
                } else {
                    console.log("password ou email erroné");
                }
             
            })
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


            </div>
        );
    }
}

export default SignIn;