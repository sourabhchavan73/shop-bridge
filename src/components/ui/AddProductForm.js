import React from 'react';
import { Field, reduxForm } from 'redux-form';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const formLabel = {
    fontSize: '12px',
    color: '#70657b',
    marginBottom: '4px',
    display:'inline-block'
}

const formInput = {
    display: 'block',
    width: '100%',
    height: 'calc(1.9695rem + 2px)',
    padding: '0.375rem 0.75rem',
    fontSize: '0.813rem',
    lineHeight: 1.5,
    color: '#665c70',
    border: '1px solid #ced4da',
    borderRadius: '0.25rem'
}

const formsGroup = {
    marginBottom: '1rem',
}

const formContainer ={
    marginTop: '2.5rem'
}

const submitButton = {
    minWidth: '135px',
    marginTop: '1rem',
    textTransform: 'none'
}

const errorMessage = {
    fontSize: '12px',
    color: '#ff0000',
    marginBottom: '4px',
    display:'inline-block',
    marginTop: '.5rem'
}

class AddProductForm extends React.Component{
    rendorError({touched, error}){
        if (touched && error){
            return(
                <div>
                    <span style={errorMessage}>{ error }</span>
                </div>
            )
        }
    }

    rendorInput = ({ input, label, meta, labelname }) => {
        return(
            <div style={formsGroup}>
                <label style={formLabel} htmlFor={labelname}>{label}</label>
                <input type="text" style={formInput} {...input} placeholder={`${label}`} />
                {this.rendorError(meta)}
            </div>
        )
    }

    rendorPrice = ({ input, meta }) => {
        return(
            <div style={formsGroup}>
                <label style={formLabel} htmlFor="name">Enter Product Price</label>
                <input type="number" style={formInput} {...input} placeholder="Enter Price" />
                {this.rendorError(meta)}
            </div>
        )
    }

    // rendorImage = ({ input,  meta }) => {
    //     console.log(input)
    //     return(
    //         <div style={formsGroup}>
    //             <label style={formLabel} htmlFor="name">Enter Product Price</label>
    //             <input type="file" {...input} value={undefined} style={formInput} />
    //             {this.rendorError(meta)}
    //         </div>
           
    //     )
    // }

    onSubmit = ( formValues ) => {
        this.props.onSubmit(formValues)
    }

    render() {
        return(
            <div >
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} autoComplete="off">
                    <Grid container style={{ display: 'block' }} >
                        <Grid item lg={5} md={7} sm={9} xs={12}>
                            <Field
                                labelname="name" 
                                name="name" 
                                component={this.rendorInput} 
                                label="Enter Product Name" 
                            />
                        </Grid>

                        <Grid item lg={5} md={7} sm={9} xs={12}>
                            <Field 
                                name="price" 
                                component={this.rendorPrice} 
                                label="Enter Product Price" 
                            />
                        </Grid>

                        <Grid item lg={5} md={7} sm={9} xs={12}>
                            <Field 
                                labelname="description" 
                                name="description" 
                                component={this.rendorInput} 
                                label="Enter Product Description" 
                            />
                        </Grid>

                        {/* <Grid item lg={5} md={7} sm={9} xs={12}>
                            <Field 
                                name="image" 
                                component={this.rendorImage} 
                                label="Upload Product Image" 
                            />
                        </Grid> */}

                        <Grid item  xs={12}>
                            <Button color="primary" disableElevation type="submit" variant="contained" style={submitButton}>
                                Add Product
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        )
    }
}

const validate = (formValues) => {
    const errors = {};

    if(!formValues.name){
        errors.name = "Please Enter Product Name"
    }

    if(!formValues.description){
        errors.description = "Please Enter Product Description"
    }

    if(!formValues.price){
        errors.price = "Please Enter Product Price"
    }

    // if(!formValues.image){
    //     errors.image = "Please Enter Product Image"
    // }

    return errors;
}

export default reduxForm({
    form: 'AddEditProductForm',
    validate: validate
})(AddProductForm)

