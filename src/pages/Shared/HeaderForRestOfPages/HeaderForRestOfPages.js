import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import avatar from '../../../images/avatar/avatar.jpg';
import './HeaderForRestOfPages.css';

const HeaderForRestOfPages = () => {
    const { user, logOut } = useAuth();

    return (
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark navbar-bg">
            <div className="container px-lg-0">
                <NavLink className="navbar-brand" to="/home">
                    <div className="d-flex justify-content-between align-items-center">
                        <i className="fas fa-camera fs-2 me-1 font-color-header"></i>
                        <h5 className="ms-1 text-uppercase brand m-0 pt-1">C a m s t a</h5>
                    </div>
                </NavLink>
                <button className="navbar-toggler rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                        }} className="nav-link-header me-5" to="/home">Home</NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                        }} className="nav-link-header me-5" to="/products">Explore Products</NavLink>
                        <NavLink activeStyle={{
                            fontWeight: "bold",
                        }} className="nav-link-header me-5" to="/dashboard">Dashboard</NavLink>
                    </div>

                    <div className="ms-auto d-flex align-items-center">
                        <div className="nav-item ms-lg-4">
                            {user?.email ? <div className="d-flex justify-content-between align-items-center">
                                <button onClick={logOut} className="btn authentication-btn rounded-3 me-md-3 ms-3 order-last order-md-first"><p><i className="fas fa-sign-out-alt me-2"></i>Log Out</p></button>
                                <div className="order-first">
                                    <NavLink to="/">{user?.email && user?.photoURL ? <img src={user?.photoURL} className="user-img" alt="" /> : <img src={avatar} title="User not logged in" alt="" className="user-img" />}</NavLink>
                                    {user?.email && <span className="nav-text ms-3 text-uppercase">{user?.displayName}</span>}
                                </div>
                            </div>
                                : <div>
                                    <NavLink to="/login"><button className="btn authentication-btn rounded-3 me-3"><p><i className="fas fa-sign-in-alt me-2"></i>Log In</p></button></NavLink>
                                    <NavLink to="/register"><button className="btn authentication-btn rounded-3"><p><i className="fas fa-sign-in-alt me-2"></i>Register</p></button></NavLink>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default HeaderForRestOfPages;