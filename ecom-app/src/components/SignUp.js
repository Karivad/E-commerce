import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            last: '',
            email: '',
            password: '',
            confirm: '',
            image: ''
        };


      }

    handleChange = event => {
        const targetName = event.target.name
        this.setState({[targetName]: event.target.value})  

        
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <h1>Sign Up</h1>
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
  </Form.Group>

<Form.Group controlId="formBasicPicture">
    <Form.Label>Profile picture URL</Form.Label>
    <Form.Control type="text" placeholder="Profile picture URL" name="image" onChange={this.handleChange} />
  </Form.Group>

  <Button variant="warning" type="submit">
    Sign In
  </Button>
</Form>

            </div>
        );
    }
}

export default SignUp;