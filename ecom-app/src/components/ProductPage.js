import React, { Component } from 'react';
import { withRouter } from "react-router-dom";




class ProductPage extends Component {
    constructor() {
        super()
        this.state = {
            id: null
        }
    }
    componentDidMount() {
        const id = this.props.match.params.id;
        this.getId(id);
        console.log(id)
    }
    getId = (id) => {
        this.setState({id: id})
    }
    render() {
        return (
            <div>
                <h1>Product number: {this.state.id}</h1>
            </div>
        );
    }
}


export default withRouter(ProductPage);