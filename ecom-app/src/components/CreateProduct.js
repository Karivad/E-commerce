import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { connect } from 'react-redux';
import {pushProducts} from '../actions/productsActions'


class CreateProduct extends Component {
    constructor() {
        super()
        this.state = {
            titre: "",
            description: "",
            prix: "",
            stock:"",
            image:"",
            
        };
    }

    handleChange = event => {
        const targetName = event.target.name

        this.setState({[targetName]: event.target.value})  
        
    }

    handleSubmit = event => {
        event.preventDefault();
        const product = {
            titre: this.state.titre,
            description: this.state.description,
            prix: this.state.prix,
            stock: this.state.stock,
            image: this.state.image,
            user_affiliate_id: this.props.userId
        
        }


        axios.post(`http://localhost:8080/products`, product,
        { headers:
            {
              "Content-Type": "application/json",
              authorization: this.props.token
            }
        }
        )
        .then(res => {
            // console.log(res);
            console.log(res.data);

        this.props.pushProducts(
          product
        )


        }).catch((err) => {
          console.log(err);
      })
        // console.log(this.state)
    }



    render() {
        return (
            <div>
                <h1>CreateProduct</h1>

                <Form onSubmit={this.handleSubmit} >
  <Form.Group controlId="formBasicTitre">
    <Form.Label>Titre</Form.Label>
    <Form.Control type="text" placeholder="Titre du produit" name="titre" onChange={this.handleChange} />
  </Form.Group>

  <Form.Group controlId="formBasicDescription">
    <Form.Label>Description </Form.Label>
    <Form.Control type="text" placeholder="Description" name="description" onChange={this.handleChange} />
  </Form.Group>
                    
  <Form.Group controlId="formPrix">
    <Form.Label>Prix</Form.Label>
    <Form.Control type="text" placeholder="Prix" name="prix" onChange={this.handleChange} />
  </Form.Group>

  <Form.Group controlId="formBasicStock">
    <Form.Label>Stock</Form.Label>
    <Form.Control type="text" placeholder="Stock" name="stock" onChange={this.handleChange} />
  </Form.Group>

<Form.Group controlId="formBasicImage">
    <Form.Label>URL de l'image</Form.Label>
    <Form.Control type="text" placeholder="URL de l'image" name="image" onChange={this.handleChange} />
  </Form.Group>

  <Button variant="warning" type="submit">
    Add
  </Button>
</Form>


            </div>
        );
    }
}


const mapDispatchToProps = { 
    pushProducts
  }
  

function mapStateToProps(state) { //Accéder aux données de notre store dans les props
    return {
        token: state.isLogged.token,
        userId: state.isLogged.id
    };
  }
  


  export default connect(mapStateToProps, mapDispatchToProps)(CreateProduct);