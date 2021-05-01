import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/index';
import Counters from './Counters';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import TablePagination from '@material-ui/core/TablePagination';

const useStyles = makeStyles(theme => ({
    invenContainer: {
        paddingTop: '3rem',
        paddingBottom: '3rem',
    },

    inventoryList:{
        borderRadius: '10px',
        boxShadow: '0 4px 20px 1px rgb(0 0 0 / 6%), 0 1px 4px rgb(0 0 0 / 8%)',
        border: 0,
        padding: '1.25rem'
    },

    editIcon:{
        color: '#FFC107',
    },

    buttonContainer:{
        margin: '0 0 1rem  0'
    },

    submitButton:{
        minWidth: '135px',
        marginTop: '1rem',
        textTransform: 'none'
    },

    emptycartTitle: {
        fontSize: '14px',
        fontWeight: 'normal',
        lineHeight: '24px',
        color: '#797979',
    },

    tableRow:{
        '&:hover': {
            backgroundColor: '#e0f3ff',
        }
    }
}))

function Inventory({ fetchProducts, products }) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        fetchProducts();
    }, []);
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const prodcutIndex = ( product ) => {
        const id = products.indexOf(product);
        return id + 1
    }

    const ProductTable = () => {
        return (
            <>
                <TableContainer >
                    <Table  aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>ID</TableCell>
                                <TableCell>Product Name</TableCell>
                                <TableCell>Product Price</TableCell>
                                <TableCell>Product Description</TableCell>
                                <TableCell>Action</TableCell>
                            </TableRow>
                        </TableHead>
                    
                        <TableBody>
                            {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => (
                                <TableRow className={classes.tableRow}  key={product.id}>
                                    <TableCell>{prodcutIndex(product)}</TableCell>
                                    <TableCell>{product.name}</TableCell>
                                    <TableCell>{product.price}</TableCell>
                                    <TableCell>{product.description}</TableCell>
                                    <TableCell>
                                            <Link to={`/inventory/edit/${product.id}`}>
                                                <EditIcon className={classes.editIcon} />
                                            </Link>

                                            <Link to={`/inventory/delete/${product.id}`}>
                                                <DeleteIcon  style={{ cursor: 'pointer' }} color="error" />
                                            </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={products.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </>
        )
    }

    const NullItems = () => {
        return (
            <h4 className={classes.emptycartTitle}>Currently, there are no Products added to the Inventory. Click on Add Product to add Products</h4>
        )
    }

    return (
        <Container className={classes.invenContainer} maxWidth="lg">
            <Counters />
            <div className={classes.inventoryList}>
                <div className={classes.buttonContainer}>
                    <Link to="/inventory/add">
                        <Button className={classes.submitButton} disableElevation variant="contained" color="primary">
                            Add Product
                        </Button>
                    </Link>
                </div>
                { products.length > 0 ? <ProductTable /> : <NullItems /> }
            </div>
        </Container>  
    )
}

const mapStateToProps = ( state ) => {
    return { products: Object.values(state.products)}
}

export default connect(mapStateToProps, {
    fetchProducts: fetchProducts
})(Inventory);
