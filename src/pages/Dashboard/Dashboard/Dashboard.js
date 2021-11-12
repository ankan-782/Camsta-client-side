import React from 'react';
import './Dashboard.css';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

import DashboardHome from '../DashboardHome/DashboardHome';

import AdminRoute from '../../Authentication/AdminRoute/AdminRoute';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageAllProducts from '../ManageAllProducts/ManageAllProducts';
import ManageAllReviews from '../ManageAllReviews/ManageAllReviews';
import AddNewProduct from '../AddNewProduct/AddNewProduct';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

import UserRoute from '../../Authentication/UserRoute/UserRoute';
import AddNewReview from '../AddNewReview/AddNewReview';
import Reviews from '../Reviews/Reviews';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';

const Dashboard = () => {

    let { path, url } = useRouteMatch();
    const { admin, user } = useAuth();

    return (
        <div>
            <div className="dashboard-bg text-dark">
                <div className="dashboard-content d-flex justify-content-center align-items-start">
                    <div className="container-fluid p-lg-5 p-4">
                        <div className="row g-4">
                            <div className="col-12 col-md-4 col-lg-2">
                                {(user.email && admin) && <div>
                                    <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link-dashboard text-black border-bottom-design-dashboard d-block mb-4" to={`${url}/makeAdmin`}><i class="fas fa-check-circle me-2"></i>Make Admin</NavLink>
                                    <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link-dashboard text-black border-bottom-design-dashboard d-block mb-4" to={`${url}/addNewProduct`}><i class="fas fa-plus me-2"></i>Add New Product</NavLink>
                                    <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link-dashboard text-black border-bottom-design-dashboard d-block mb-4" to={`${url}/manageAllProducts`}><i class="fas fa-cog me-2"></i>Manage All Products</NavLink>
                                    <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link-dashboard text-black border-bottom-design-dashboard d-block mb-4" to={`${url}/manageAllReviews`}><i class="fas fa-comment-alt me-2"></i>Manage All Reviews</NavLink>
                                    <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link-dashboard text-black border-bottom-design-dashboard d-block mb-4" to={`${url}/manageAllOrders`}><i class="fas fa-tasks me-2"></i>Manage All Orders</NavLink>
                                </div>}
                                {(user.email && !admin) && <div>
                                    <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link-dashboard text-black border-bottom-design-dashboard d-block mb-4" to={`${url}/addNewReview`}><i class="fas fa-plus me-2"></i>Give Us Feedback</NavLink>
                                    <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link-dashboard text-black border-bottom-design-dashboard d-block mb-4" to={`${url}/allReviews`}><i class="fas fa-comment-alt me-2"></i>See All Users Feedbacks</NavLink>
                                    <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link-dashboard text-black border-bottom-design-dashboard d-block mb-4" to={`${url}/payment`}><i class="fas fa-money-check-alt me-2"></i>Payment</NavLink>
                                    <NavLink activeStyle={{ fontWeight: "bold" }} className="nav-link-dashboard text-black border-bottom-design-dashboard d-block mb-4" to={`${url}/myOrders`}><i class="fas fa-shopping-basket me-2"></i>My Orders</NavLink>
                                </div>}
                            </div>
                            <div className="col-12 col-md-8 col-lg-10">
                                <Switch>
                                    <Route exact path={path}>
                                        <DashboardHome></DashboardHome>
                                    </Route>

                                    <AdminRoute path={`${path}/makeAdmin`}>
                                        <MakeAdmin></MakeAdmin>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageAllOrders`}>
                                        <ManageAllOrders></ManageAllOrders>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageAllProducts`}>
                                        <ManageAllProducts></ManageAllProducts>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manageAllReviews`}>
                                        <ManageAllReviews></ManageAllReviews>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/addNewProduct`}>
                                        <AddNewProduct></AddNewProduct>
                                    </AdminRoute>

                                    <UserRoute path={`${path}/addNewReview`}>
                                        <AddNewReview></AddNewReview>
                                    </UserRoute>
                                    <UserRoute path={`${path}/allReviews`}>
                                        <Reviews></Reviews>
                                    </UserRoute>
                                    <UserRoute path={`${path}/myOrders`}>
                                        <MyOrders></MyOrders>
                                    </UserRoute>
                                    <UserRoute path={`${path}/payment`}>
                                        <Payment></Payment>
                                    </UserRoute>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;