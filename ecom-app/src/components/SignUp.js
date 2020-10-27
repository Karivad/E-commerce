import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';



class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            last: '',
            email: '',
            password: '',
            confirm: '',
            image: '',
            msg: '',
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

            }  
            axios.post(`http://localhost:8080/sign-up`, user)
                .then(res => {
                    console.log(res);
                    console.log(res.data);
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
                <h1>Sign Up</h1>
<Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control className="w-25" type="text" placeholder="Name" name="name" onChange={this.handleChange} />
  </Form.Group>

  <Form.Group controlId="formBasicLast">
    <Form.Label>Last Name</Form.Label>
    <Form.Control className="w-25" type="text" placeholder="Lastname" name="last" onChange={this.handleChange} />
  </Form.Group>
                    
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control className="w-25" type="email" placeholder="Enter email" name="email" onChange={this.handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control className="w-25" type="password" placeholder="Password" name="password" onChange={this.handleChange} />
  </Form.Group>

  <Form.Group controlId="formBasicConfirm">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control className="w-25" type="password" placeholder="Confirm password" name="confirm" onChange={this.handleChange} />
    <Form.Text className="text-danger" >
      {this.state.msg}
    </Form.Text>
  </Form.Group>

<Form.Group controlId="formBasicPicture">
    <Form.Label>Profile picture URL</Form.Label>
    <Form.Control className="w-25" type="text" placeholder="Profile picture URL" name="image" onChange={this.handleChange} />
  </Form.Group>

  <Button variant="warning" type="submit">
    Sign Up
  </Button>
</Form>

            </div>
        );
    }
}

export default SignUp;