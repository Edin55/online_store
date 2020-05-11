import React from 'react';
import FormSearch from "../FormSearch/formSearch";
import {Link} from "react-router-dom";

class Header extends React.Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            user:{},
            isLoggedIn: true

        }
    }
    render() {

        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(!isLoggedIn){
            button = <div className={"row"}>
                <form className="col-sm-12 form-inline mt-2 mt-md-0 ml-3">
                    <a className="btn btn-outline-warning my-2 my-sm-0" href={"/login"}>Login</a>
                </form>
            </div>;
        }else{
            button =
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle text-muted" href="/profile" id="navbarDropdownMenuLink"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            My Account
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href={"/profile"}>Profile</a>
                            <form className="form-inline">
                                <a className="dropdown-item btn btn-link text-danger" href={"http://localhost:8080"}>Logout</a>
                            </form>
                        </div>
                    </li>;
        }
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-light navbar-fixed bg-light">
                    <div className={"container"}>
                        <a className="navbar-brand bookstore text-muted" href="/">Book<span
                            className={"orange"}>Store</span></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarCollapse"
                                aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse mt-2" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto mt-2">
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/"}><h5>Home</h5></Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to={"/books"}><h5>Books</h5></Link>
                                </li>
                                <li>

                                </li>
                            </ul>
                            <div className={"pr-3"}>
                                <a href={"/cart"}><i className="fa fa-lg fa-shopping-cart text-muted" aria-hidden="true"></i></a>
                            </div>
                            <FormSearch onSearch={this.props.searchBooks}/>
                            {button}
                        </div>
                    </div>
                </nav>
            </header>
        )
    }


}

export default Header;
