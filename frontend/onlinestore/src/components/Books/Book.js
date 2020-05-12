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
                                    <img alt={"img"} className="img-responsive shelf-book rounded "  width={"170px"} height={"250px"} src={this.props.book.bookImage}/*th:src={"#{adminPath}+@{/image/book/}+${book.id}+'.png'"*/ />
                                </a>
                            </div>
                            <div className="card-body col-sm-8 offset-1">
                                <a href={"/books/details/"+this.props.book.id}><h2 className={"card-title"}>{this.props.book.title}</h2></a>
                                <h6>Publication date :</h6> <span>{this.props.book.date}</span>
                                <h6 className={"d-inline"}>Author : </h6> <span>{this.props.book.author}</span> <br/>
                                <h6 className={"d-inline"}>Format : </h6><span>{this.props.book.format}</span> <br/>
                                <h6 className={"d-inline"}>Pages : </h6><span>{this.props.book.numberOfPages}</span> <br/>
                                <h5 className={"text-amber"}>
                                    <h6 className={"d-inline"}>Our Price : </h6><span>{this.props.book.ourPrice}$<span></span></span>

                                </h5>
                                <h6 className={"d-inline "}>List Price : </h6><s><span>{this.props.book.listPrice}$<span></span></span></s>


                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }

}
export default Book;