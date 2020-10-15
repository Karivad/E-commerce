import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import {userLogin} from '../actions/userLogin'



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
           
                    console.log("vous êtes bien connecté",res);
                    console.log(res.data);
            
            })
            .catch((err) => {
                console.log("password ou email erroné");
            })
    }
    changeIsLogged = () => {
      this.props.userLogin()
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
<button onClick={this.changeIsLogged}>Display True</button>
{this.props.isLogged && <h2>True</h2>}


            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      isLogged: state.isLogged.isUserLogged
  };
}

const mapDispatchToProps = {
  userLogin
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(SignIn);