import React from 'react';

import AddProductForm from './AddProductForm'
import { connect } from 'react-redux';
import { addProduct } from '../../redux/actions/index'
import Container from '@material-ui/core/Container';


const formContainer ={
    marginTop: '2.5rem'
}

class AddProduct extends React.Component{
    onSubmit = ( formValues ) => {
        this.props.addProduct(formValues)
    }

    render() {
        return(
            <Container style={formContainer}>
                <h2 style={{marginBottom: '1rem'}}>Add Product</h2>
                <AddProductForm onSubmit={this.onSubmit} />
            </Container>
        )
    }
}

export default connect(null,{
    addProduct: addProduct   
})(AddProduct);