import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import HeaderForRestOfPages from '../../Shared/HeaderForRestOfPages/HeaderForRestOfPages';
import './Registration.css';

const Registration = () => {
    const { signInUsingGoogle, processRegistration, authError } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const location = useLocation();
    const history = useHistory();

    const getName = e => {
        setName(e.target.value);
    };

    const getEmail = e => {
        setEmail(e.target.value);
    };

    const getPassword = e => {
        setPassword(e.target.value);
    };



    // Google login
    const handleGoogleLogin = () => {
        signInUsingGoogle(location, history);
    };



    //registration method (sign up)
    const handleRegistration = (e) => {
        e.preventDefault();
        if (!/(?=.*[0-9])(?=.*[a-z]).{6}/.test(password)) {
            setError('Password should be at least of 6 characters and must have one digits, one lowercase letter');
            return;
        }
        //admin password use admin0
        processRegistration(email, password, name, history);
    };

    return (
        <>
            <HeaderForRestOfPages></HeaderForRestOfPages>
            <div id='registration' className="registration-bg text-dark d-flex justify-content-center align-items-center align-items-lg-start">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <div className="registration-content-sizing rounded-3 overflow-hidden">
                                <div className="d-flex justify-content-between mb-5">
                                    <NavLink to="/login" className="text-decoration-none text-dark py-2 text-center w-100" activeStyle={{ backgroundColor: "rgb(207, 206, 199)" }}>Log In</NavLink>
                                    <NavLink to="/register" className="text-decoration-none text-dark py-2 text-center w-100" activeStyle={{ backgroundColor: "rgb(207, 206, 199)" }}>Registration</NavLink>
                                </div>
                                <form onSubmit={handleRegistration} className="px-3">
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputName" className="form-label fs-6">Name</label>
                                        <input type="text" onBlur={getName} className="form-control registration-input-bg py-3 rounded-3" id="exampleInputName" placeholder="Name" required />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="exampleInputEmail1" className="form-label fs-6">Email address</label>
                                        <input type="email" onBlur={getEmail} className="form-control registration-input-bg py-3 rounded-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="abc@pqr.xyz" required />
                                        <div id="emailHelp" className="form-text text-dark">We'll never share your email with anyone else.</div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="inputPassword5" className="form-label fs-6">Password</label>
                                        <input type="password" onBlur={getPassword} id="inputPassword5" className="form-control registration-input-bg py-3 rounded-3" aria-describedby="passwordHelpBlock" placeholder="Password" required />
                                        <div id="passwordHelpBlock" className="form-text text-dark">
                                            Your password must be at least 6 characters long, contain at least one lowercase letter and at least a number.
                                        </div>
                                    </div>
                                    <div className="text-danger">{error}</div>
                                    <div className="text-danger">{authError}</div>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-outline-dark rounded-3 mb-3">Register</button>
                                        <p>Already have an account? <NavLink className="text-decoration-none text-dark account-switch ms-2" to="/login">Please Login</NavLink></p>
                                    </div>
                                </form>
                                <hr className="mt-4" />
                                <div className="text-center">
                                    <button onClick={handleGoogleLogin} className="mb-3 btn btn-outline-dark rounded-3"><p><i className="fab fa-google me-3"></i>Google Sign In</p></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="d-flex justify-content-center">
                                <i className="fas fa-tools settings-icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Registration;