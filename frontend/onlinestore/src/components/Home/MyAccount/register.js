import React from "react";

const register = () => {
    return (
        <div className={"container"}>
            <div className={"row mt-4"}>
                <div className={"col-sm-3"}></div>
                <div className={"col-sm-6"}>
                    <form action={"loc"}>
                        <p className="h4 text-center mb-4">Sign up</p>
                        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                            Your name
                        </label>
                        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
                            Your email
                        </label>
                        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                            Confirm your email
                        </label>
                        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
                        <br />
                        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                            Your password
                        </label>
                        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
                        <div className={"mt-4 text-center"}>
                            <input type={"submit"} text={"Register"} className={"btn btn-warning btn-lg text-white"} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default register;