import React from "react";

const Contact = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="address">
                            <h4>Our Address</h4>
                            <h6>The BookStore Theme, 4th Store
                                Beside that building, USA</h6>
                            <h6>Call : 800 1234 5678</h6>
                            <h6>Email : info@bookstore.com</h6>
                        </div>
                        <div className="timing">
                            <h4>Timing</h4>
                            <h6>Mon - Fri: 7am - 10pm</h6>
                            <h6>​​Saturday: 8am - 10pm</h6>
                            <h6>​Sunday: 8am - 11pm</h6>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="navigation">
                            <h4>Navigation</h4>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="privacy-policy.html">Privacy Policy</a></li>
                                <li><a href="terms-conditions.html">Terms</a></li>
                                <li><a href="products.html">Products</a></li>
                            </ul>
                        </div>
                        <div className="navigation">
                            <h4>Help</h4>
                            <ul>
                                <li><a href="">Shipping & Returns</a></li>
                                <li><a href="#">Privacy</a></li>
                                <li><a href="#">FAQ’s</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="form">
                            <h3>Quick Contact us</h3>
                            <h6>We are now offering some good discount
                                on selected books go and shop them</h6>
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <input placeholder="Name" required />
                                    </div>
                                    <div className="col-md-6">
                                        <input type="email" placeholder="Email" required />
                                    </div>
                                    <div className="col-md-12">
                                        <textarea placeholder="Messege"></textarea>
                                    </div>
                                    <div className="col-md-12">
                                        <button className="btn btn-secondary btn-lg">Alright, Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy-right">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>(C) 2020. All Rights Reserved. Edin Elezi</h5>
                        </div>
                        <div className="col-md-6">
                            <div className="share align-middle">
                                <span className="fb"><i className="fa fa-facebook"></i></span>
                                <span className="instagram"><i className="fa fa-instagram"></i></span>
                                <span className="twitter"><i className="fa fa-twitter"></i></span>
                                <span className="pinterest"><i className="fa fa-pinterest"></i></span>
                                <span className="google"><i className="fa fa-google-plus"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Contact;