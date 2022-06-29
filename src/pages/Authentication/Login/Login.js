import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import HeaderForRestOfPages from '../../Shared/HeaderForRestOfPages/HeaderForRestOfPages';
import './Login.css';

const Login = () => {
    const { signInUsingGoogle, processLogin, authError } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const location = useLocation();
    const history = useHistory();


    const getEmail = e => {
        setEmail(e.target.value);
    }

    const getPassword = e => {
        setPassword(e.target.value);
    }

    // Google login
    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history);
    }


    //login method (sign in)
    const handleCustomLogin = (e) => {
        processLogin(email, password, location, history);
        e.preventDefault();
    }


    return (
        <>
            <HeaderForRestOfPages></HeaderForRestOfPages>
            <div id='login' className="login-bg text-dark d-flex justify-content-center align-items-center align-items-lg-start">
                <div className="container">
                    <div className="row ">
                        <div className="col-12 col-lg-6">
                            <div className="login-content-bg">
                                <div className="d-flex justify-content-between mb-5">
                                    <NavLink to="/login" className="text-decoration-none text-dark text-center py-2 w-100" activeStyle={{ backgroundColor: "rgb(207, 206, 199)" }}>Log In</NavLink>
                                    <NavLink to="/register" className="text-decoration-none text-dark py-2 text-center w-100" activeStyle={{ backgroundColor: "rgb(207, 206, 199)" }}>Registration</NavLink>
                                </div>
                                <form onSubmit={handleCustomLogin} className="px-3">
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label fs-6">Email address</label>
                                        <input type="email" onBlur={getEmail} className="form-control login-input-bg py-3 rounded-0" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="abc@pqr.xyz" required />
                                        <div id="emailHelp" className="form-text text-dark">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputPassword5" className="form-label fs-6">Password</label>
                                        <input type="password" onBlur={getPassword} id="inputPassword5" className="form-control login-input-bg py-3 rounded-0" aria-describedby="passwordHelpBlock" placeholder="Password" required />
                                        <div id="passwordHelpBlock" className="form-text text-dark">
                                            Your password must be at least 6 characters long, contain at least one lowercase letter and at least a number.
                                        </div>
                                    </div>
                                    <div className="text-danger">{authError}</div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-outline-dark rounded-0 mb-3">Login</button>
                                        <p>New User? <NavLink className="text-decoration-none text-dark account-switch ms-2" to="/register">Create Account</NavLink></p>
                                    </div>
                                </form>
                                <hr className="mt-4" />
                                <div className="text-center">
                                    <button onClick={handleGoogleLogin} className="mb-3 btn btn-outline-dark rounded-0"><p><i className="fab fa-google me-3"></i>Google Sign In</p></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="d-flex justify-content-center align-items-center">
                                <i className="fas fa-user-lock lock-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;