import React, {Component} from "react";

import BookService from "../../repository/bookRepository";
import Carousel from "./Carousel/carousel";
import Marketing from "./Marketing/marketing";
import About from "./About/About";


class Home extends Component {
    constructor(props) {
        super(props);

    }


    searchBooks(title) {
        return BookService.searchBooks(title);
    }


    render() {
        return (
            <div>
                <Carousel/>
                <Marketing title={"HIGHLY RECOMMENDED BOOKS"}/>
                <About/>
                <Marketing title={"BEST-SELLER"} />
            </div>
        )
    }
}

export default Home;