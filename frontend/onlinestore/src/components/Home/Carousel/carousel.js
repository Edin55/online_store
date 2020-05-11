import React from 'react';

const Carousel = () => {

    return(
        <div className={"container-fluid"}>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={"http://localhost:8080/assets/books-1.jpg"}  alt={"img-1"}/>
                    </div>
                    <div className="carousel-item">
                       <img src={"http://localhost:8080/assets/books-2.jpg"} alt={"img-1"}/>

                    </div>
                    <div className="carousel-item">
                        <img src={"http://localhost:8080/assets/books-3.jpg"} alt={"img-1"}/>
                    </div>
                    <div className="carousel-caption text-center ">
                        <h1>Welcome to the Book<span className={"orange"}>Store</span></h1>
                        <p>DISCOVER THE BEST BOOKS WITH US</p>
                        <p><a className="btn btn-lg btn-warning text-white" href="/books" role="button">Shop Books</a></p>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )

};

export default Carousel;