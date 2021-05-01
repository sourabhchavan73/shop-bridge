import React from 'react';
import _ from 'lodash'
import AddProductForm from './AddProductForm'
import { connect } from 'react-redux';
import { editProduct, fetchProduct } from '../../redux/actions/index'
import Container from '@material-ui/core/Container';


const formContainer ={
    marginTop: '2.5rem'
}

class AddProduct extends React.Component{
    componentDidMount() {
        this.props.fetchProduct(this.props.match.params.id)
    }

    onSubmit = ( formValues ) => {
        this.props.editProduct(this.props.match.params.id, formValues);
        
    }

    render() {
        if (!this.props.product){
            return <div>Loading the title...</div>
        }

        return(
            <Container style={formContainer}>
                <h2 style={{marginBottom: '1rem'}}>Edit Product</h2>
                <AddProductForm 
                    initialValues={_.pick(this.props.product, 'name', 'price', 'description')}
                    onSubmit={this.onSubmit} />
            </Container>
        )
    }
}

const mapStateToProps = ( state, ownProps) => {
    return {
        product: state.products[ownProps.match.params.id]
    }
} 

export default connect(
    mapStateToProps,
    { fetchProduct, editProduct }
)(AddProduct);