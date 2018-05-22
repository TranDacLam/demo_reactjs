import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import routes from './routes';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <main id="mainContainer">
                        <div className="container">     
                            <Switch>
                                { this.showContentRoutes(routes) }
                            </Switch>
                        </div>
                    </main>
                    <Footer />
                </div>
            </Router>
        );
    }

    showContentRoutes = (routes) => {
        var result = null;
        if(routes.length > 0){
            result = routes.map((route, index) => {
                return (
                    <Route 
                        key={index}
                        path={route.path} 
                        exact={route.exact} 
                        component= {route.main}
                    />
                )
            })
        }
        return result;
    }
}

export default App;
