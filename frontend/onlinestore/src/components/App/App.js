import React, {Component, Suspense} from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "font-awesome/css/font-awesome.css"
import Home from "../Home/home";
import BookService from '../../repository/bookService'
import Header from "../Home/Header/header";
import Profile from "../Home/MyAccount/profile"
import Login from "../Home/MyAccount/login"
import Register from "../Home/MyAccount/register"
import Books from "../Books/Books";
import BookDetails from "../Books/BookDetails";
import Contact from "../Home/Contact/contact";
import AuthService from "../../repository/auth-service"
import Test from "../test";
import Cart from "../Cart/cart";


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: undefined,
            shoppingCart: JSON.parse(localStorage.getItem("shoppingCart")) || []
        };

        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
        this.handleResetCart = this.handleResetCart.bind(this);
        this.handleBuyCart = this.handleBuyCart.bind(this);
        this.onToken = this.onToken.bind(this);
    }
    handleAddToCart(addToCartProduct, qty) {
        debugger;
        let shoppingCart = this.state.shoppingCart;
        const existingItemIndex = shoppingCart.findIndex((cartItem) => {
            return cartItem.product.id === addToCartProduct.id
        });

        if (existingItemIndex === -1) {
            shoppingCart.push({
                product: addToCartProduct,
                amount: qty
            });
        } else {
            shoppingCart[existingItemIndex].amount += qty;
        }

        this.setState({
            shoppingCart: shoppingCart
        }, () => {
            // After the state is changed, we store the products in local storage so when we
            // refresh the screen they are still in the cart
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        })
    }
    handleRemoveFromCart(removeFromCartProduct) {
        let shoppingCart = this.state.shoppingCart;
        const productInCartIndex = shoppingCart.findIndex((cartItem) => {
            return cartItem.product.id === removeFromCartProduct.id
        });

        if (productInCartIndex !== -1) {
            shoppingCart.splice(productInCartIndex, 1);
        }

        this.setState({
            shoppingCart: shoppingCart
        }, () => {
            localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        })
    }
    handleResetCart() {
        console.log("handleResetCart");
        this.setState({
            shoppingCart: []
        }, () => {
            localStorage.removeItem("shoppingCart");
        })
    }
    handleBuyCart() {
        console.log("handleBuyCart");
        this.setState({
            shoppingCart: []
        }, () => {
            localStorage.removeItem("shoppingCart");
        });
    }

    onToken(token) {
        console.log(token)
        const orderData = {
            token: token.id,
            productData: this.state.shoppingCart.map((cartItem) => {
                return {
                    productId: cartItem.product.id,
                    amount: cartItem.amount
                }
            })
        };
        console.log(orderData);

        // productsService.createOrder(orderData)
        //     .then(response => {
        //         console.log(response);
        //         this.handleBuyCart();
        //     });
    };

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
                            <Route path={"/books/details/:id"} component={(props) => {return <BookDetails {...props} handleAddToCart = {this.handleAddToCart} />}}/>
                            <Route path={"/test"} component={Test}/>
                            <Route path="/cart" exact component={() => {
                                return <Cart shoppingCart={this.state.shoppingCart.slice(1)}
                                                 onToken={this.onToken}
                                                 handleRemoveFromCart={this.handleRemoveFromCart}
                                                 handleResetCart={this.handleResetCart}
                                                 handleBuyCart={this.handleBuyCart}/>
                            }}/>


                        </Switch>
                    </Suspense>
                    <Contact/>
                </Router>
                </div>

            )

        };
    }

    export default App;
