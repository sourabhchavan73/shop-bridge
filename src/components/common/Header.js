import React from 'react'
import { Link } from 'react-router-dom'
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    appbarBrand: {
        ...theme.typography.appbarBrand
    },

    navRight: {
        marginLeft: '1.5rem',
        fontSize: '15.5px'
    },

    appbarLeft: {
        marginLeft: '55%',
    }
}))

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static" elevation={0}>
            <Container maxWidth="lg">
                <Toolbar style={{ padding: 0 }} >
                    <Link to="/" className={classes.appbarBrand}>
                        ShopBridge
                    </Link>

                    <div className={classes.appbarLeft} >
                        <Link to="/"  className={`${classes.appbarBrand} ${classes.navRight}`}>
                            Admin
                        </Link>

                        <Link to="/home"  className={`${classes.appbarBrand} ${classes.navRight}`}>
                            Home
                        </Link>
                    </div>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header
