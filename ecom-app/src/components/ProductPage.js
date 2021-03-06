import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { addingCartStore, setQuantity } from '../actions/cartActions';

// import {getProducts} from '../actions/productsActions'



class ProductPage extends Component {
    constructor() {
        super()
        this.state = {
           
        }
    }


    addToCart = (product) => {
        if (this.props.cart.length > 0 && this.props.cart.filter(e => e.id === product.id)) {
        let currentProduct = this.props.cart.filter(e => e.id === product.id)
        console.log("current", currentProduct);
         this.props.setQuantity(product.id, currentProduct[0].qty + 1)

        }   else {
            product.qty = 1
            this.props.addingCartStore(product)
        }
    }


    render() {
        console.log('blabla', this.props.products)
        console.log(typeof this.props.match.params.id)
    
        return (
            <div>
{this.props.products.filter(element => element.id === parseInt(this.props.match.params.id)).map((product) => (
            <div>
            <h1>{product.titre}</h1>
            <img alt={`product-${product.titre}`} src={product.image}/>
            <p>{product.description}</p>
            <p>{product.prix}</p>
            <p>{product.stock}</p>

            <Button variant="warning" type="submit" onClick={() => this.addToCart(product)}>
                Add to cart
            </Button>

            </div>
        ))}
            </div>
        );
    }
}

function mapStateToProps(state) { //Accéder aux données de notre store dans les props
    return {
        token: state.isLogged.token,
        products: state.products.products,
        cart: state.cartReducer
        

    };
  }
  
  const mapDispatchToProps = { //Permettre de modifier les données par l'appel des actions en les appelant par les props
//   getProducts 
    addingCartStore,
    setQuantity                // A l'appel, de this.props.userLogin -> isUserLogged  = true
}


export default connect( 
    mapStateToProps, mapDispatchToProps
  )(withRouter(ProductPage));