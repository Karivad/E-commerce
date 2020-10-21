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
        
    
        return (
            <div>

            <h1>{this.props.products[this.props.match.params.id - 1].titre}</h1>
            <img alt={`product-${this.props.products[this.props.match.params.id - 1].titre}`} src={this.props.products[this.props.match.params.id - 1].image}/>
            <p>{this.props.products[this.props.match.params.id - 1].description}</p>
            <p>{this.props.products[this.props.match.params.id - 1].prix}</p>
            <p>{this.props.products[this.props.match.params.id - 1].stock}</p>

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