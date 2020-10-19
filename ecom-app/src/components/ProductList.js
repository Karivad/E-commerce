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
    componentDidMount() {
        this.getProducts()
      }
    render() {
        return (
            <div>
                <h1>ProductList</h1> 
            

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/81yfpqyMXbL._AC_SL1500_.jpg" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                    </Card.Body>
                </Card>

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