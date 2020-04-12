import React from "react";

import BookService from "../../repository/bookRepository";
import Carousel from "./Carousel/carousel";
import Marketing from "./Marketing/marketing";
import About from "./About/About";
import Contact from "./Contact/contact";


class Home extends React.Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
  componentDidMount(): void {
    // this.loadBooks();
  }

  searchBooks(title){
    return BookService.searchBooks(title);
  }
  fetchRecommendedBooks(){
      BookService
          .fetchBooks()
          .then( (resp) => {
                this.setState({
                    books: resp.data.slice(resp.data.length - 5, resp.data.length)
                });
          })
          .catch( (err) =>{
              console.log(err);
          })
  }
  fetchBestSellerBooks(){
      BookService
          .fetchBooks()
          .then( (resp) => {
              this.setState({
                  books: resp.data.slice(0, 5)
              });
          })
          .catch( (err) =>{
              console.log(err);
          })
  }
    render() {

        return (
            <div>
              <Carousel/>
              <Marketing title = {"HIGHLY RECOMMENDED BOOKS"} books = {this.fetchRecommendedBooks}/>
              <About/>
              <Marketing title = {"BEST-SELLER"} books = {this.fetchBestSellerBooks} />
            </div>
        )
    }
}

export default Home;