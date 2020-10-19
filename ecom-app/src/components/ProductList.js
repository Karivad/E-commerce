import React, { Component } from 'react';    // rcc (shortcut)
import Card from 'react-bootstrap/Card'
import axios from 'axios';
import { connect } from 'react-redux';
import {getProducts} from '../actions/productsActions'


class ProductList extends Component {
    constructor() {
        super();
        this.state = {
         
        };
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
            
                {this.props.products.map((card) => (
                <Card style={{ width: '18rem' }} key={card.id} >
                    
                    <Card.Img variant="top" src={card.image} />
                    <Card.Body>
                        <Card.Title>{card.titre}</Card.Title>
                        <Card.Text>
                            {card.description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                )
            )}
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