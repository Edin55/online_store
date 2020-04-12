import React, {Component, Suspense} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "font-awesome/css/font-awesome.css"
import Home from "../Home/home";
import BookService from '../../repository/bookRepository'
import Header from "../Home/Header/header";
import Profile from "../Home/MyAccount/profile"
import Login from "../Home/MyAccount/login"
import Register from "../Home/MyAccount/register"
import Books from "../Books/Books";
import BookDetails from "../Books/BookDetails";
import Contact from "../Home/Contact/contact";

class App extends Component {

    searchBook(title){
        return BookService.searchBookByTitle(title);
    }

    render() {
        return (
            <div className="App">
                <Router>
                    <Header searchBooks={this.searchBook}/>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/books" exact component={Books}/>
                            <Route path={"/login"} component={Login}/>
                            <Route path={"/register"} component={Register}/>
                            <Route path="/profile" component={Profile}/>
                            <Route path={"/books/details/:id"} component={BookDetails}/>
                        </Switch>
                    </Suspense>
                    <Contact/>
                </Router>
                </div>

            )

        };
    }

    export default App;
