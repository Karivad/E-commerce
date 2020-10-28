import React from "react"; // add import in every components !
import Nav from "react-bootstrap/Nav";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import ProductList from "./ProductList";
import ProductPage from "./ProductPage";
import CreateProduct from "./CreateProduct";
import EditProfile from "./EditProfile";
import EditProduct from "./EditProduct";

import { connect } from 'react-redux';
import { userSignOut } from '../actions/userLogin'   // sign in et sign out dans le "userLogin.js"
import { removeProducts } from '../actions/productsActions'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'


import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddCart from "./AddCart";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  resetStore = () => {
    this.props.userSignOut()
    this.props.removeProducts()
    // this.props.history.push("/")
    localStorage.removeItem("persist:root"); // Thomas m'a dit pour vider le store 

  }

  render() {

    return (
        <Router >
         

          <Nav className=" d-flex flex-row justify-content-between bg-dark pt-3 pb-3" activeKey="/home" >
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                E-commerce
              </Nav.Link>
            </Nav.Item>
            
            {!this.props.isLogged.token.length && (
              <div  className="d-flex flex-row">
                <Nav.Item>
                  <Nav.Link as={Link} to={"/sign-up"}>Sign-up</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={Link} to={"/"}>Sign-in</Nav.Link>
                </Nav.Item>
              </div>
            )}
            {this.props.isLogged.token.length &&
             
              <div  className="d-flex flex-row">
                <Nav.Item>
                  <Nav.Link as={Link} to={"/"}>Products</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={Link} to={"/create-product"}>Create product</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                <Nav.Link as={Link} to={"/edit-profile"}>
                  <Col xs={2} md={1}>
                    < Image src={this.props.isLogged.image} alt={`profile-${this.props.isLogged.id}`} height={45} width={45} roundedCircle />
                  </Col>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={Link} to={"/cart"}>CART [{this.props.cart.length}]</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={Link} to={"/"}>
                    <Button
                      variant="outline-danger" onClick={this.resetStore}>Sign out
                      </Button>{' '}
                      
                  </Nav.Link>
                </Nav.Item>
                </div>
              
            }
          </Nav>

            <Switch>
              <Route exact path="/">
                {this.props.isLogged.token.length > 0 ? 
                < ProductList /> : <SignIn />
                }  
              </Route>
              <Route path="/sign-up">
                <SignUp />
              </Route>              
              {/* <Route path="/products">
                < ProductList />
              </Route> */}
              <Route path="/create-product">
                <CreateProduct />
              </Route>
              <Route path={`/product/:id`} >
                <ProductPage />
              </Route>
              <Route path="/edit-profile">
                <EditProfile />
              </Route>
              <Route path="/edit-product/:id">
                <EditProduct />
              </Route>
              <Route path="/cart">
                <AddCart />
              </Route>

            </Switch>
            
        </Router>
      

    );
  }
}

function mapStateToProps(state) { //Accéder aux données de notre store dans les props
  return {
    isLogged: state.isLogged,
    cart: state.cartReducer
    
  };
}

const mapDispatchToProps = { //Permettre de modifier les données par l'appel des actions en les appelant par les props
  userSignOut,
  removeProducts             // A l'appel, de this.props.userLogin -> isUserLogged  = true
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Header);