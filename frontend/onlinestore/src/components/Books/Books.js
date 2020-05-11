import React, {Component} from "react";
import Book from "./Book";
import BookService from "../../repository/bookRepository";
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import Table from "./Table";


class Books extends Component{

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    componentDidMount(): void {
        this.loadBooks();
    }
    loadBooks() {
        BookService
            .fetchBooks()
            .then((response) => {
                this.setState({
                    books: response.data
                });
            })
            .catch( error => console.log(error))
    }

    render() {
        let list;
        if(this.state.books.length === 0){
            list =
                <div className={"col-sm-12"}>
                    <h4 className={"text-muted"}>
                        Sorry there are no books available right now.
                    </h4>
                </div>
        }else{
            let books = this.state.books.map(book => <Book book={book}/>);

            list =
                <div className={"col-sm-12"}>
                   <table >
                       <thead>
                            <tr>
                                <th></th>
                            </tr>
                       </thead>
                       <tbody>
                            {books}
                       </tbody>
                   </table>
                </div>
        }

        return (
            <div className="container mt-5 pt-5">
                <div className={"row"}>
                    {list}
                </div>
            </div>)
    }
}


export default Books;