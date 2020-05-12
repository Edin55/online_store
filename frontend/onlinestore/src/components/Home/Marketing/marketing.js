import React, {Component} from "react";
import BookService from "../../../repository/bookService";

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
                           <div className={"row"}>
                               <div className={"col-sm-3 p-2"}>
                                   <div className="card mb-3">
                                       <img className="card-img-top" src={"http://localhost:8080/assets/1.png"} alt="Card image cap"  width={"130px"} height={"320px"}/>
                                       <div className="card-body">
                                           <h5 className="card-title">Miles Davis for Solo Guitar</h5>
                                           <p className="card-text">Arts & Literature</p>
                                           <p className="card-text"><small className="text-muted">Last updated 3 mins
                                               ago</small></p>
                                       </div>
                                   </div>
                                   <a href={"/books/details/1"}>
                                       <button className={"btn btn-warning text-white"}>
                                           Read more >>
                                       </button>
                                   </a>
                               </div>
                               <div className={"col-sm-3 p-2"}>
                                   <div className="card mb-3">
                                       <img className="card-img-top" src={"http://localhost:8080/assets/6.png"} alt="Card image cap" width={"130px"} height={"320px"} />
                                       <div className="card-body">
                                           <h5 className="card-title">The First-Time Manager</h5>
                                           <p className="card-text">Arts & Literature</p>
                                           <p className="card-text"><small className="text-muted">Last updated 3 mins
                                               ago</small></p>
                                       </div>
                                   </div>
                                   <a href={"/books/details/6"}>
                                       <button className={"btn btn-warning text-white"}>
                                           Read more >>
                                       </button>
                                   </a>
                               </div>
                               <div className={"col-sm-3 p-2"}>
                                   <div className="card mb-3">
                                       <img className="card-img-top" src={"http://localhost:8080/assets/11.png"} alt="Card image cap"  width={"130px"} height={"320px"}/>
                                       <div className="card-body">
                                           <h5 className="card-title">Ordinary Grace</h5>
                                           <p className="card-text">Fiction</p>
                                           <p className="card-text"><small className="text-muted">Last updated 3 mins
                                               ago</small></p>
                                       </div>
                                   </div>
                                   <a href={"/books/details/11"}>
                                       <button className={"btn btn-warning text-white"}>
                                           Read more >>
                                       </button>
                                   </a>
                               </div>
                               <div className={"col-sm-3 p-2"}>
                                   <div className="card mb-3">
                                       <img className="card-img-top" src={"http://localhost:8080/assets/12.png"} alt="Card image cap"  width={"130px"} height={"320px"}/>
                                       <div className="card-body">
                                           <h5 className="card-title">Java: A Beginner's Guide</h5>
                                           <p className="card-text">Programming</p>
                                           <p className="card-text"><small className="text-muted">Last updated 3 mins
                                               ago</small></p>
                                       </div>
                                   </div>
                                   <a href={"/books/details/12"}>
                                       <button className={"btn btn-warning text-white"}>
                                           Read more >>
                                       </button>
                                   </a>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>

        )

    }
}

export default Marketing;