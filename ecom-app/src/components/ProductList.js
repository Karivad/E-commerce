import React, { Component } from 'react';    // rcc (shortcut)
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { connect } from 'react-redux';
import {getProducts} from '../actions/productsActions'
// import ProductPage from './ProductPage';

import { Link} from "react-router-dom";

class ProductList extends Component {
    constructor() {
        super();
        this.state = {
        };
      }

   

    UNSAFE_componentWillMount = async () => {
        const products = await axios.get('http://localhost:8080/products', 
        { headers:
            {
              "Content-Type": "application/json",
              authorization: this.props.token
            }
        })

        this.props.getProducts(products)
       
    }
  
    render ()  {
        
        return (
            <div>
                
                <h1>ProductList</h1> 
                {this.props.products.map((card) => (
                    <Link to={`/product/${card.id}`} key={card.id} className="card-link">
                <Card style={{ width: '18rem' }}  >
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

            </div>
        );
    }
}


  
  const mapDispatchToProps = { //Permettre de modifier les données par l'appel des actions en les appelant par les props
  getProducts                 // A l'appel, de this.props.userLogin -> isUserLogged  = true
}

function mapStateToProps(state) { //Prmet d'ajouter des données de notre store a nos prpps
    console.log("state: ", state.products.products)
     return {
         token: state.isLogged.token,
         products: state.products.products
 
     };
   }

  export default connect(mapStateToProps, mapDispatchToProps)(ProductList);