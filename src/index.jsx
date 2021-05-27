import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Brands from './brands';
import ProductListRouter from './productList';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html,body{
    margin:0;
    padding:0;
    font-size: 62.5%;
}
`;

const Home = () => {
    return (
        <div>
            <h1>Fetching frontend interview</h1>
            <h2>이동현 github: <a href="https://github.com/lee-donghyun">@lee-donghyun</a></h2>
            {/* <Link to='/fetching-frontend-interview/productList'><button>ProductList</button></Link>
            <Link to='/fetching-frontend-interview/brands'><button>brands</button></Link> */}
            <Link to='/productList'><button>/ProductList</button></Link>
            <Link to='/brands'><button>/brands</button></Link>
        </div>
    );
}

const Main = () => {
    return (
        <BrowserRouter>
            <GlobalStyle />
            {/* <Route exact path="/fetching-frontend-interview" component={Home} />
            <Route path="/fetching-frontend-interview/brands" component={Brands} />
            <Route path="/fetching-frontend-interview/productList" component={ProductListRouter} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/brands" component={Brands} />
            <Route path="/productList" component={ProductListRouter} />
        </BrowserRouter>
    );
}


export default Main;