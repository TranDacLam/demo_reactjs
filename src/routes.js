import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Checkout from './components/Checkout';
import NotFound from './components/NotFound';
import ProductsContainer from './containers/ProductsContainer';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/contact',
        exact: false,
        main: () => <Contact />
    },
    {
        path: '/checkout',
        exact: false,
        main: () => <Checkout />
    },
    {
        path: '/products',
        exact: false,
        main: () => <ProductsContainer />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;
