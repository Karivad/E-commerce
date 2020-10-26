import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
// import {getProducts} from '../actions/productsActions'



class ProductPage extends Component {
    constructor() {
        super()
        this.state = {
           
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
            </div>
        ))}
            </div>
        );
    }
}

function mapStateToProps(state) { //Accéder aux données de notre store dans les props
    return {
        token: state.isLogged.token,
        products: state.products.products

    };
  }
  
  const mapDispatchToProps = { //Permettre de modifier les données par l'appel des actions en les appelant par les props
//   getProducts                 // A l'appel, de this.props.userLogin -> isUserLogged  = true
}


export default connect( 
    mapStateToProps, mapDispatchToProps
  )(withRouter(ProductPage));