import React, {Component} from "react";
import Book from "./Book";
import BookService from "../../repository/bookService";
import 'datatables.net-dt/css/jquery.dataTables.min.css'


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
        debugger;
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
                <div className={"col-sm-12 pb-5 mb-5"}>
                    <h4 className={"text-muted text-center alert alert-info p-5"}>
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
            <div className="container mt-5 pt-5 pb-5">
                <div className={"row offset-2 pb-5 mb-5 text-muted"}>
                    <div className={'col-sm-4 pt-2'}>
                        <hr size="30" color="gray" width={'285em'}/>
                    </div>
                    <div className={'col-sm-2 '}>
                        <h1 className={'text-center'}>
                            BOOKS
                        </h1>
                    </div>
                    <div className={'col-sm-4 pt-2'}>
                        <hr size="30" color="gray" width={'300em'}/>
                    </div>
                </div>
                <div className={"row"}>
                    {list}
                </div>
            </div>)
    }
}


export default Books;