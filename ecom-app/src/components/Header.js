import React from "react"; // add import in every components !
import Nav from "react-bootstrap/Nav";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import CreateProduct from "./CreateProduct";
import { connect } from 'react-redux';
import { userSignOut } from '../actions/userLogin'   // sign in et sign out dans le "userLogin.js"
import { removeProducts } from '../actions/productsActions'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  resetStore = () => {
    this.props.userSignOut()
    this.props.removeProducts()
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

            {!this.props.isLogged.token.length && (
              <div>
                <Nav.Item>
                  <Nav.Link as={Link} to={"/sign-up"}>Sign-up</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={Link} to={"/"}>Sign-in</Nav.Link>
                </Nav.Item>
              </div>
            )}
            {this.props.isLogged.token.length &&
              <div>
                <Nav.Item>
                  <Nav.Link as={Link} to={"/products"}>Products</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={Link} to={"/create-product"}>Create product</Nav.Link>
                </Nav.Item>

                <Nav.Item>


                  <Col xs={2} md={1}>
                    < Image src={require('../image/pistol.jpeg')} alt="mamie" height={45} width={45} roundedCircle />
                  </Col>


                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={Link} to={"/"}>
                    <Button
                      variant="outline-danger" onClick={this.resetStore}>Sign out</Button>{' '}
                  </Nav.Link>
                </Nav.Item>
                </div>
            }
          </Nav>

            <Switch>
              <Route exact path="/">
                <SignIn />
              </Route>
              <Route exact path="/sign-up">
                <SignUp />
              </Route>              
              <Route path="/products">
                < ProductList />
              </Route>
              <Route exact path="/create-product">
                <CreateProduct />
              </Route>
              <Route path={`/product/:id`} >
                <ProductPage />
              </Route>
            </Switch>

        </Router>
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
  userSignOut,
  removeProducts                // A l'appel, de this.props.userLogin -> isUserLogged  = true
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Header);