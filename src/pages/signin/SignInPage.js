import React from "react";
import {Link} from "react-router-dom";
import SignInPresenter from "./SignInPresenter";
import {signInUseCase} from "../../usecases/user";
import {Button} from "nq-component";
import BasePage from "../../base/BasePage";
import withRouter from "../../withRouter";
import InputFactory from "../../components/InputFactory";

class SignInPage extends BasePage {
    constructor() {
        super();
        this.presenter = new SignInPresenter(this, signInUseCase());
        this.state = {progress: false};
    }

    formSubmit(e) {
        e.preventDefault();
        this.presenter.submit();
    }

    getMasterKey() {
        return this.props.params && this.props.params.masterKey;
    }

    onChange(value, field) {
        this.presenter.onChange(value, field);
    }

    render() {
        return (
            <div className="vh-100">
                <div className="d-flex h-100">
                    <div className="m-auto container p-3 p-lg-5">
                        <div className="bg-white shadow rounded p-3 p-lg-5">
                            <div className="row">
                                <div className="col-md-6 border-end border-1">
                                    <div className="h-100 d-flex align-items-center">
                                        <div className="text-center p-3 w-100">
                                            <img
                                                className="img-fluid login-img mb-3 w-50"
                                                alt="company logo"
                                                src="/logo.png"/>
                                            <h1 className="fw-bold text-black">Homeowner Association Admin</h1>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 p-3 px-lg-5 py-lg-4">
                                    <h2 className="fw-bold mb-3">Login</h2>
                                    <form onSubmit={this.formSubmit.bind(this)}>
                                        <div className="row g-3">
                                            <div className="col-md-12">
                                                <label className="form-label fs-sm">Email Address</label>
                                                <InputFactory
                                                    required
                                                    type="Email"
                                                    autoComplete="nope"
                                                    className="form-control"
                                                    placeholder="Email Address"
                                                    field="username"
                                                    onChange={this.onChange.bind(this)}
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <label className="form-label fs-sm">Password</label>
                                                <InputFactory
                                                    type="Password"
                                                    required
                                                    className="form-control"
                                                    placeholder="Password"
                                                    field="password"
                                                    onChange={this.onChange.bind(this)}
                                                />
                                            </div>
                                            <div className="text-end">
                                                <div className="mb-3 text-end">
                                                    <Link to="/forgot" className="fs-sm ms-2">
                                                        Forgot your password?
                                                    </Link>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <Button
                                                    progress={this.state.progress}
                                                    type="submit"
                                                    className="btn btn-primary w-50"
                                                >
                                                    {this.state.progress ? "Please wait..." : "LOGIN"}
                                                </Button>
                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(SignInPage);
