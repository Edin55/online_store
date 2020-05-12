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
import AuthService from "../../repository/auth-service"
import Test from "../test";
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: undefined
        };
    }


    searchBook(title){
        return BookService.searchBookByTitle(title);
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: AuthService.getCurrentUser()
            });
        }
    }



    render() {
        return (
            <div className="App">
                <Router>
                    <Header  searchBooks={this.searchBook} isLoggedIn = {this.state.currentUser } />
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path={"/login"} component={Login}/>
                            <Route path={"/register"} component={Register}/>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/books" exact component={Books}/>
                            <Route path={"/books/details/:id"} component={BookDetails}/>
                            <Route path={"/test"} component={Test}/>

                        </Switch>
                    </Suspense>
                    <Contact/>
                </Router>
                </div>

            )

        };
    }

    export default App;
