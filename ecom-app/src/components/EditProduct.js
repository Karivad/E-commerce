import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { connect } from 'react-redux';


class EditProduct extends Component {
    render() {
        return (
            <div>
                <h1>Edit Product</h1>

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
        )
}
}

export default EditProduct;
