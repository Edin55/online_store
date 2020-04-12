import React from "react";

const login = () => {
    return (
        <div className={"container pt-5"}>
            <div className={"row"}>
                <div className={"col-sm-3"}></div>
                <div className={"col-sm-6"}>
                    <form>
                        <p className="h4 text-center mb-4">Sign in</p>
                        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
                            Your email
                        </label>
                        <input type="email" id="defaultFormLoginEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
                            Your password
                        </label>
                        <input type="password" id="defaultFormLoginPasswordEx" className="form-control" />
                        <div className={"mt-4 text-center"}>
                            <input type={"submit"} text={"Login"} className={"btn btn-warning btn-lg text-white"} />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default login;