import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from '../../redux/actions/index';

import Grid from '@material-ui/core/Grid';
import DataUsageIcon from '@material-ui/icons/DataUsage';
import ExtensionIcon from '@material-ui/icons/Extension';
import GroupIcon from '@material-ui/icons/Group';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    counterCards:{
        ...theme.typography.counterCards
    } ,

    cardPrimary:{
        backgroundColor: '#007bff',
        color: '#FFF'
    },

    cardDanger:{
        backgroundColor: '#ef5350',
        color: '#FFF'
    },

    counterNumber:{
        fontSize: '24px',
        display: 'block',
    },

    counterText: {
        fontStyle: 'italic',
        textTransform: 'capitalize',
        opacity: 0.5,
        display: 'block',
        fontSize: '22px'
    },

    cardSuccess:{
        backgroundColor: '#66bb6a',
        color: '#FFF'
    },

    cardInfo:{
        backgroundColor: '#26c6da',
        color: '#FFF'
    },

    counterIcons:{
        ...theme.typography.counterIcons
    },
}))



function Counters({ fetchProducts, products }) {
    const classes = useStyles();

    useEffect(() => {
        fetchProducts();
        
    }, []);

    const totalInvestment = () => {
        const product = products.map(product => product.price)
        const counts = product.map( i => Number(i))
        return counts.reduce((a, b) => a + b, 0)
          
    }

    return (
        <Grid container style={{ marginBottom: '30px' }} >
        <Grid item lg={3}>
            <div className={`${classes.counterCards} ${classes.cardPrimary}`}>
                <ExtensionIcon className={classes.counterIcons} />
                <div>
                    <span className={classes.counterNumber}>{products.length}</span>
                    <span className={classes.counterText}>Products</span>
                </div>
            </div>
        </Grid>

        <Grid item lg={3}>
            <div className={`${classes.counterCards} ${classes.cardSuccess}`}>
                <DataUsageIcon className={classes.counterIcons} />
                <div>
                    <span className={classes.counterNumber}>
                        { products.length > 0 ? totalInvestment() : 0}
                    </span>
                    <span className={classes.counterText}>Total Value</span>
                </div>
            </div>
        </Grid>

        <Grid item lg={3}>
            <div className={`${classes.counterCards} ${classes.cardDanger}`}>
                <GroupIcon className={classes.counterIcons} />
                <div>
                    <span className={classes.counterNumber}>11</span>
                    <span className={classes.counterText}>Users</span>
                </div>
            </div>
        </Grid>

        <Grid item lg={3}>
            <div className={`${classes.counterCards} ${classes.cardInfo}`}>
                <VisibilityIcon className={classes.counterIcons} />
                <div>
                    <span className={classes.counterNumber}>11</span>
                    <span className={classes.counterText}>Visits</span>
                </div>
            </div>
        </Grid>
    </Grid>
    )
}

const mapStateToProps = ( state ) => {
    return { products : Object.values(state.products)}
}

export default connect(mapStateToProps, {
    fetchProducts: fetchProducts
})(Counters);
