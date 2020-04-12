import React, {Component} from "react";

class Book extends Component{
    constructor(props) {
        super(props);

    }

    render(){
        console.log(this.props);
        return (
            <tr className="book-item">
                <td>
                    <div>
                        <div className="row">
                            <div className="col-sm-2">
                                <a href={"/books/details/"+this.props.book.id}>
                                    <img className="img-responsive shelf-book"  width={"140px"} height={"210px"} src={this.props.book.bookImage}/*th:src={"#{adminPath}+@{/image/book/}+${book.id}+'.png'"*/ />
                                </a>
                            </div>
                            <div className="col-sm-9">
                                <a><h4>{this.props.book.title}</h4></a> <
                                span>Publication date</span>
                                <p >{this.props.book.author}</p>
                                <a><span> Format</span></a> <span><span> pages</span></span><br/>

                                <a><span>$<span></span></span></a>

                                <span>$<span></span></span>

                                <p> Lorem Ipsum</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }

}
export default Book;