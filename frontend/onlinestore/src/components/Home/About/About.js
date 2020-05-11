import React from "react";

const About = () => {
    return (
        <div className={"container-fluid back-color"}>
            <div className={'container marketing'}>
                <div className={'container-fluid'}>
                    <hr className="featurette-divider-top" color={'white'} />
                    <div className=" row featurette">
                        <div className="col-md-7">
                            <h2 className="featurette-heading">About&nbsp;<span className="text-muted">Book<span className={"orange"}>Store</span></span>
                            </h2>
                            <p className="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula
                                porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                Fusce dapibus, tellus ac cursus commodo.</p>
                        </div>
                        <div className="col-md-5">
                            <img src={"http://localhost:8080/assets/about.jpg"} alt={"img-1"}/>
                        </div>
                    </div>
                    <hr className={"featurette-divider-bottom"} color={'transparent'}/>
                </div>


            </div>
        </div>
    )
};

export default About;