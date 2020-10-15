import React from "react"; // add import in every components !
import Nav from "react-bootstrap/Nav";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'


import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          <Nav className="bg-dark pt-3 pb-3" activeKey="/home" >

            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                E-commerce
              </Nav.Link>
            </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/sign-up">Sign-up</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/sign-in">Sign-in</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/products">Products</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/create-product">Create product</Nav.Link>
              </Nav.Item>

              <Nav.Item>
              
          
        <Col xs={2} md={1}>
            < Image src={ require('../image/pistol.jpeg') } alt="mamie" height={45} width={45} roundedCircle />         
          </Col>
        
        
          </Nav.Item>

              <Nav.Item>
                <Button variant="outline-danger">Sign out</Button>{' '}
              </Nav.Item>
            
          </Nav>

                                             {/* import */}
          <Switch>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </div>

    );
  }
}

export default Header;
