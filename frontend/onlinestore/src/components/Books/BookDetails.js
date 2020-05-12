import React, {Component} from "react";
import BookService from "../../repository/bookService";
class BookDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            book: {},
            isBook: false,
            error : '',
            qty: 1
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);

    }
    componentDidMount(): void {
        this.loadBookById();
    }
    loadBookById(){
        const { id } = this.props.match.params;
        BookService
            .fetchBookById(id)
            .then(response => {
                console.log(response.data);
                this.setState({
                    book: response.data,
                    isBook : true
                });
            })
            .catch(err => {
                this.setState({
                   error: err.toString()
               })
            });

    }

    handleChange(event){
        this.setState({
            qty: event.target.value
        })
    }
    onFormSubmit(e) {
        debugger;
        e.preventDefault();
        console.log(this);
        this.props.handleAddToCart(this.state.book, this.state.qty);
        window.alert("Succesfully added to cart !!!")

    }
    render(){
        let bookDetails = (<div className={"container"}>
            <form method="post" onSubmit={this.onFormSubmit}>
                <input hidden="hidden" id="id" name="id" value="1" />
                <div className="row" style={{marginTop: "120px"}}>
                    <div className="col-xs-3">
                        <a href="/books">Back to book list</a><br />
                        <img className="img-responsive shelf-book" width={"230px"} height={"340px"} src={this.state.book.bookImage} />
                    </div>

                    <div className="col-sm-9">
                        <h3></h3>
                        <h3></h3>
                        <h3>{this.state.book.title}</h3>
                        <div className="row">
                            <div className="col-sm-5">
                                <h5><strong>Author: </strong><span>{this.state.book.author}</span></h5>
                                <p><strong>Publisher: </strong><span>{this.state.book.publisher}</span></p>
                                <p><strong>Publication Date: </strong><span>{this.state.book.publicationDate}</span></p>
                                <p><strong>Language: </strong><span>{this.state.book.language}</span></p>
                                <p><strong>Category: </strong><span>{this.state.book.category}</span></p>
                                <p><strong><span>{this.state.book.format}</span>: </strong><span>{this.state.book.numberOfPages}</span> pages</p>
                                <p><strong>ISBN: </strong><span>{this.state.book.isbn}</span></p>
                                <p><strong>Shipping Weight: </strong><span>{this.state.book.shippingWeight}</span> ounces</p>
                            </div>

                            <div className="col-sm-7">
                                <div className="panel panel-default" style={{borderWidth: "5px", marginTop: "20px"}}>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h4>Our Price: <span style={{color:"#db3208"}}>$<span>{this.state.book.ourPrice}</span></span></h4>
                                                <p>List Price: <span style={{textDecoration: "line-through"}}>$<span>{this.state.book.listPrice}</span></span></p>
                                                <p>You save: $<span>{parseFloat(this.state.book.listPrice - this.state.book.ourPrice).toFixed(2)}</span></p>
                                                <span>Qty: </span>
                                                <select name="qty" onChange={this.handleChange}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-6">
                                                <h4 className={"text-success"}>In Stock</h4>


                                                <button type="submit" className="btn btn-warning" style={{color: "black" ,border:"1px solid black", padding: "10px 40px 10px 40px"}}>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />
                    </div>
                </div>
                <input type="hidden" name="_csrf" value="1a13fa70-145d-4c51-9c14-9278b30f6029" />
            </form>
        </div>);
        let error = (<div className={"p-5 m-5 text-size-40"}><div className={"container p-5 text-center text- alert alert-danger"}> <span>{this.state.error}</span> </div> <div><a className={"link d-flex justify-content-center text-center"} href={"/"}>Go to Home Page</a></div></div>);
        return (
           <div>
               { this.state.isBook ? bookDetails : error}
           </div>
        )
    }

}
export default BookDetails;