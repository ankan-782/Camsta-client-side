import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './AdminRoute.css';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();

    if (isLoading) {
        return (
            <>
                <div className="admin-route-bg">
                    <div className="admin-route-content d-flex justify-content-center align-items-center">
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
            render={({ location }) => (user?.email && admin) ? children : <Redirect
                to={{
                    pathname: "/dashboard",
                    state: { from: location }
                }}
            ></Redirect>
            }
        >
        </Route>
    );
};

export default AdminRoute;