import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/index';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    title:{
        ...theme.typography.mainTitle,
    },

    titleDes: {
        fontSize: '14px',
        ...theme.typography.titleDes
    },

    homeContainer:{
        marginTop: '0.5rem',
        paddingTop: '3rem',
        paddingBottom: '3rem',
    },

    productTitle: {
        color: '#4a4a4a',
        fontSize: '14px',
        fontWeight: 400,
        textTransform:'uppercase',
        marginBottom: '0px',
        transition: 'all 300ms linear 0s',
        cursor: 'pointer',
        '&:hover': {
            color: '#71cd14'
        }
    },

    productFooter: {
        padding: '22px 25px 18px',
        border: '1px solid #f0f2f1',
        textAlign: 'left',
    },

    cartTitle: {
        marginTop: '25px',
        fontSize: '12px',
        fontWeight:' 700',
        color: '#ff084e',
        display: 'block',
        textTransform: 'uppercase'
    },

    productPrice: {
        fontSize: '19.5px',
        fontWeight: 500,
        lineHeight: '16px',
        color: '#2a2a2a',
    },

    striked: {
        color: '#797979',
        fontSize: '14px',
        fontWeight: 300,
        marginLeft: '1.5rem'
    },

    emptycartTitle:{
        color: '#000',
        fontSize: '14px',
        fontWeight: 400,
        marginLeft: '1.5rem'
    }
}))

function Home({ fetchProducts, products }) {
    const classes = useStyles();
    console.log( products )

    useEffect(() => {
        fetchProducts();
        console.log( products )
    }, []);

    const RendorProducts = () => {
        return (
            <Grid container>
                {products.map(product => (
                    <Grid className="grid-container" item lg={4} md={4} sm={6} xs={12}>
                        <div className={classes.singleProduct}>
                            <div>
                                <img className="img-fluid" src="https://technext.github.io/eiser/img/product/feature-product/f-p-3.jpg" alt="product-img"/>
                            </div>

                            <div className={classes.productFooter}>
                                <h4 className={classes.productTitle}>{product.name}</h4>
                                <div style={{ marginTop: '1rem'}}>
                                    <span className={classes.productPrice}>&#8377; {`${product.price}`}</span>
                                    <del className={classes.striked}>&#8377; 5000</del>
                                </div>
                                <h5 className={classes.cartTitle} style={{ marginTop: '20px'}}>add to cart</h5>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        )
    }

    const NoProductsFound = () => {
        return(
            <>
                <h4 className={classes.emptycartTitle}>Currently, We are working on the Website please visit after some time</h4>
            </>
        )
    }
    
    return (
        <div className={`${classes.homeContainer} container-fluid`}>
            <Grid container>
                <Grid item className="mx-auto" lg={10} md={11} sm={12} xs={12}>
                    <div style={{ marginBottom: '50px', textAlign: 'center' }}>
                        <h1 className={classes.title}>Featured Products </h1>
                        <p className={classes.titleDes}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sapiente!
                        </p>
                    </div>

                    {products.length > 0 ? <RendorProducts /> : <NoProductsFound />}
                </Grid>
            </Grid>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return { products: Object.values(state.products)}
}

export default connect(mapStateToProps, {
    fetchProducts: fetchProducts
})(Home);
