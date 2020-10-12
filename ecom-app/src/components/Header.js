import React from "react"; // add import in every components !
import Nav from "react-bootstrap/Nav";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Router>
          <Nav className="bg-dark pt-3 pb-3" activeKey="/home">
            <Nav.Item>
              <Nav.Link eventKey="disabled" disabled>
                E-commerce
              </Nav.Link>
            </Nav.Item>
            <Link to="/sign-up">
            <Nav.Item>
                <Nav.Link>Sign-up</Nav.Link>
            </Nav.Item>
            </Link>
            <Link to="/sign-in">
            <Nav.Item>          
                <Nav.Link>Sign-in</Nav.Link>
            </Nav.Item>
            </Link>
          </Nav>
                                             {/* import */}
          <Switch>
            <Route path="/sign-in">
              <SignIn />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
          </Switch>
          </Router>
      </div>
      
    );
  }
}

export default Header;
