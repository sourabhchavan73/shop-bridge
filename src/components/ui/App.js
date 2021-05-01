import React from 'react'
import {  Router,Switch,Route } from "react-router-dom";
import history from '../../history';
import Header from '../common/Header';
import Inventory from './Inventory';
import AddProduct from './AddProduct'
import EditProduct from './EditProduct';
import Home from './Home'
import theme from '../theme/Theme'
import { ThemeProvider } from '@material-ui/core/styles';
import DeleteModal from './DeleteModal';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router history={history}>
                <Header />
                <Switch>
                    <Route path="/" exact component={Inventory}/>
                    <Route path="/inventory/add" exact component={AddProduct} />
                    <Route path="/inventory/edit/:id" exact component={EditProduct} />
                    <Route path="/inventory/delete/:id" exact component={DeleteModal} />
                    <Route path="/home" exact component={Home} />
                </Switch>
            </Router>
        </ThemeProvider>
    )
}

export default App;
