import React from 'react';
// import './checkout.css';
import ReactCurrencyFormatter from "react-currency-formatter";
import {Link} from "react-router-dom";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props);
    }
    loadCartItems(){
        return  JSON.parse(localStorage.getItem("shoppingCart")) || [];
    }
    handleRemoveCartItem(e){
        e.preventDefault();
    }
    render() {
        let cartItems = this.loadCartItems();
        const totalPrice = cartItems.length ? this.loadCartItems().reduce((sum, cartItem) =>
            sum + (cartItem.amount * +cartItem.product.ourPrice), 0) : '';

        const shoppingCartTableRowsHTML = this.loadCartItems().length ? this.loadCartItems().map((cartItem, index) => {
                const product = cartItem.product;
                const cartAmount = cartItem.amount;
                return (
                    <tr key={product.id}>
                        <th scope="row">{index + 1}</th>
                        <td className="checkout-image"><img src={product.bookImage} width={"70px"} height={"100px"}  className="img-thumbnail"/></td>
                        <td>
                            <h4>{product.title}</h4>
                            <h6 className={"text-muted"}>{product.category}</h6>
                            <h6 className={"text-muted"}>{product.publicationDate}</h6>

                        </td>
                        <td><ReactCurrencyFormatter quantity={product.ourPrice}/></td>
                        <td>{cartAmount}</td>
                        <td><ReactCurrencyFormatter quantity={product.ourPrice * cartAmount}/></td>
                        <td>
                            <button className="btn btn-danger"
                                    onClick={this.handleRemoveCartItem}>
                                <i className="fa fa-remove"/>
                            </button>
                        </td>
                    </tr>
                )
            })
            : (
                <tr>
                    <td colSpan="7" className="text-center">
                        There are no items in your cart. You can find the products&nbsp;
                        <Link className="text-info" to="/books">here</Link>
                    </td>
                </tr>
            );

        return (
            <div className="container p-5">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-striped table-white mt-4">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Image</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {shoppingCartTableRowsHTML}
                            </tbody>
                        </table>
                        <div className="text-right">
                            <h4 className="text-monospace">
                                Total Price: <ReactCurrencyFormatter quantity={totalPrice}/>
                            </h4>
                            <div>
                                <button className="btn btn-success"
                                        disabled={!this.props.shoppingCart.length}
                                        onClick={() => {
                                            window.alert("succesfully ought your items");
                                            window.location = "http://localhost:3000/books";
                                        }}>
                                    <i className="fa fa-check"/> Buy Now
                                </button>
                                &nbsp;
                                &nbsp;
                                <button className="btn btn-warning"
                                        disabled={!this.props.shoppingCart.length}
                                        onClick={() => this.props.handleResetCart()}>
                                    <i className="fa fa-remove"/> Reset Cart
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Cart;