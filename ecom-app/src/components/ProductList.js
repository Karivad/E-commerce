import React, { Component } from 'react';    // rcc (shortcut)
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { connect } from 'react-redux';
import {getProducts} from '../actions/productsActions'
import ProductPage from './ProductPage';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            id: null
        };
      }

    setId = (identif) => {
        this.setState({
            id: identif 
        })
    }

    getProducts = async () => {
        const products = await axios.get('http://localhost:8080/products', 
        { headers:
            {
              "Content-Type": "application/json",
              authorization: this.props.token
            }
        })

        this.props.getProducts(products)
        console.log(products)
    }
  
    render() {
        this.getProducts()
        return (
            <div>
                <h1>ProductList</h1> 
                <Router>
                {this.props.products.map((card) => (
                    <Link onClick={this.setId(card.id)} to={`/product/${this.state.id}`}>
                <Card style={{ width: '18rem' }} key={card.id} >
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title>{card.titre}</Card.Title>
                        <Card.Text>
                            {card.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                </Link>
                )
            )}
            <Switch>
            <Route path={`/products/${this.state.id}`} >
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
        token: state.isLogged.token,
        products: state.products

    };
  }
  
  const mapDispatchToProps = { //Permettre de modifier les données par l'appel des actions en les appelant par les props
  getProducts                 // A l'appel, de this.props.userLogin -> isUserLogged  = true
}


  export default connect( 
    mapStateToProps, mapDispatchToProps
  )(ProductList);