import React from 'react'
import TopBar from './TopBar';
import NavBar from './NavBar/NavBar';
import ProductList from './Product';
import Footer from './Footer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Spinner from './Spinner';
import { BrowserRouter, Route, useHistory } from 'react-router-dom';



const PList = () => {
    return (
        <>
            <TopBar />
            <NavBar />
            <ProductList />
            <Footer />
            <Spinner />
        </>
    );
}
const PDetail = () => {

    const history = useHistory();

    return (
        <div>
            <h1>product detail</h1>
        </div>
    )
}
const ProductListRouter = ({match}) => {
    
    return (
        <BrowserRouter>
            <Provider store={store}>
                <Route exact path={match.path} component={PList} />
                <Route exact path={`${match.path}/:id`} component={PDetail} />
            </Provider>
        </BrowserRouter>
    );
}

export default ProductListRouter;