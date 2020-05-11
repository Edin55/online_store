import React, {Component} from "react";
import BookService from "../../../repository/bookRepository";

class Marketing extends Component {

    constructor(props) {
        super(props);
        this.state = {
            books: [],
            isLoading: true
        }
    }
    componentWillMount(): void {
        this.fetchBooks();
    }
    fetchBooks() {
        const self = this;
        BookService
            .fetchBooks()
            .then((response) => {
                self.setState({
                    books: response.data
                });
            })
            .catch(error => console.log(error))

    }

    render(){

        console.log(this.state.books);
        debugger;
        return (
            <div className="container marketing">
                <div className={"row pb-5"}>
                    <div className={'col-sm-12'}>

                        <div className={"row"}>
                            <div className={'col-sm-3'}>
                                <hr size="30" color="black" width={'300em'}/>
                            </div>
                            <div className={'col-sm-6'}>
                                <h2 className={'text-center'}>
                                    {this.props.title}
                                </h2>
                            </div>
                            <div className={'col-sm-3'}>
                                <hr size="30" color="black" width={'300em'}/>
                            </div>
                        </div>
                        { this.state && this.state.books && (<div className={"row"}>
                            <div className={"col-sm-2"}>
                                <div className="card mb-3">
                                    <img className="card-img-top" src={"this.state.books"} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{this.state.books[0].title}</h5>
                                            <p className="card-text">This is a wider card with supporting text below as
                                                a natural lead-in to additional content. This content is a little bit
                                                longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins
                                                ago</small></p>
                                            </div>
                                </div>
                            </div>
                        </div>)}

                    </div>
                </div>
            </div>
        )

    }
}

export default Marketing;