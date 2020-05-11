import React, {Component} from "react";

class Book extends Component{



    render(){
        return (
            <tr className="book-item">
                <td>
                    <div className={"card flex-frow flex-wrap offset-1"}>

                        <div className="row p-4">
                            <div className="card-img-100 col-sm-2">
                                <a href={"/books/details/"+this.props.book.id}>
                                    <img alt={"img"} className="img-responsive shelf-book rounded"  width={"170px"} height={"250px"} src={this.props.book.bookImage}/*th:src={"#{adminPath}+@{/image/book/}+${book.id}+'.png'"*/ />
                                </a>
                            </div>
                            <div className="card-body col-sm-8 offset-1">
                                <a href={"/books/details/"+this.props.book.id}><h2>{this.props.book.title}</h2></a> <span>Publication date</span>
                                <p >{this.props.book.author}</p>
                                <span> Format</span> <span><span> pages</span></span><br/>

                                <span>$<span></span></span>

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