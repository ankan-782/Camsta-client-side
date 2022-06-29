import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './LoginRoute.css';

const LoginRoute = ({ children, ...rest }) => {

    const { user, admin, isLoading } = useAuth();

    if (isLoading) {
        return (
            <>
                <div className="login-route-bg">
                    <div className="login-route-content d-flex justify-content-center align-items-center">
                        <div className="spinner-border text-dark" style={{ width: "5rem", height: "5rem" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    console.log(admin);
    return (
        <Route
            {...rest}
            render={({ location }) => (!user?.email) ? children : <Redirect
                to={{
                    pathname: "/",
                    state: { from: location }
                }}
            ></Redirect>
            }
        >
        </Route>
    );
};

export default LoginRoute;