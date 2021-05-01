import React, { useEffect, useState } from 'react';
import history from '../../history';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { fetchProduct, deleteProduct } from '../../redux/actions/index'
import { makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import ClearIcon from '@material-ui/icons/Clear';

const useStyles = makeStyles(theme => ({
    confirmButton:{
        fontSize: '13px',
        fontWeight: 400,
        color: '#FFF',
        borderRadius: '0.25em',
        display:'flex',
        minWidth: '115px'
    }
}))


function DeleteModal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      history.push('/')
    };

    useEffect(() => {
        props.fetchProduct(props.match.params.id);
    }, [])

    const deleteContent = () => {
        if(!props.product){
            return 'Are you sure you want to delete this Product?'
        }

        return `Are you sure you want to delete this Product with name ${props.product.name}`
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            fullWidth
            maxWidth="sm">

            <DialogTitle id="alert-dialog-title">Delete Product</DialogTitle>
            <DialogContent>
                <DialogContentText id="">
                    {deleteContent()}
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <Link to="/">
                    <Button
                        style={{ background: '#555555' }} 
                        className={classes.confirmButton} 
                        color="primary">
                        < ClearIcon style={{ marginRight: '0.1rem', fontSize: '18px'}}  />Cancel
                    </Button>
                </Link>

                <Button 
                    style={{ background: '#c0392b' }} 
                    onClick={() => props.deleteProduct(props.match.params.id)}  
                    color="primary" 
                    className={classes.confirmButton} >
                        <DeleteForeverIcon style={{ marginRight: '0.3rem', fontSize: '18px'}} />Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}

const mapStateToProps = ( state, ownProps) => {
    return { product: state.products[ownProps.match.params.id]}
};


export default connect(mapStateToProps, {
    fetchProduct, deleteProduct
})(DeleteModal);
 