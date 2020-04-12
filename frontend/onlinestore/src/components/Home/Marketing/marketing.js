import React from "react";

class Marketing extends React.Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    componentDidMount(): void {
        this.props.books()
    }

    render() {

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

                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-lg-2">
                        <img src={"http://localhost:8080/assets/2.png"} width={130} height={170}/>
                        <h2></h2>
                        <p></p>
                        <p><a className="btn btn-warning text-white" href="#" role="button">Buy now &raquo;</a></p>
                    </div>
                    <div className="col-lg-2">
                        <img src={"http://localhost:8080/assets/1.png"} width={130} height={170}/>
                        <h2>Book 2</h2>
                        <p></p>
                        <p><a className="btn btn-warning text-white" href="#" role="button">Buy now &raquo;</a></p>
                    </div>
                    <div className="col-lg-2">
                        <img src={"http://localhost:8080/assets/3.png"} width={130} height={170}/>
                        <h2>Book 3</h2>
                        <p></p>
                        <p><a className="btn btn-warning text-white" href="#" role="button">Buy now &raquo;</a></p>

                    </div>
                    <div className="col-lg-2">
                        <img src={"http://localhost:8080/assets/4.png"} width={130} height={170}/>
                        <h2>Book 4</h2>
                        <p></p>
                        <p><a className="btn btn-warning text-white" href="#" role="button">Buy now &raquo;</a></p>
                    </div>
                    <div className="col-lg-2">
                        <img src={"http://localhost:8080/assets/5.png"} width={130} height={170}/>
                        <h2>Book 5</h2>
                        <p></p>
                        <p><a className="btn btn-warning text-white" href="#" role="button">Buy now &raquo;</a></p>
                    </div>
                    <div className="col-lg-2">
                        <img src={"http://localhost:8080/assets/6.png"} width={130} height={170}/>
                        <h2>Book 6</h2>
                        <p></p>
                        <p><a className="btn btn-warning text-white" href="#" role="button">Buy now &raquo;</a></p>
                    </div>
                </div>
            </div>
        )

    }
}

export default Marketing;