import React from 'react';
import './UserRoute.css';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const UserRoute = ({ children, ...rest }) => {

    const { user, admin, isLoading } = useAuth();

    if (isLoading) {
        return (
            <>
                <div className="user-route-bg">
                    <div className="user-route-content d-flex justify-content-center align-items-center">
                        <div className="spinner-border text-dark" style={{ width: "5rem", height: "5rem" }} role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) => (user?.email && (!admin)) ? children : <Redirect
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

export default UserRoute;