import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import {getProducts} from '../actions/productsActions'



class ProductPage extends Component {
    constructor() {
        super()
        this.state = {
            id: null
        }
    }

    render() {
        
        const id = this.props.match.params.id;
    
        return (
            <div>
            <h1>Titre {this.props.products[this.props.match.params.id].titre || "lol"}</h1>
            <img src="/"/>
            <p>Description du produit</p>
            <p>Prix</p>
            <p>Stock</p>

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
  )(withRouter(ProductPage));