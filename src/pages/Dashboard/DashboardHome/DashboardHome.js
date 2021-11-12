import React from 'react';
import useAuth from '../../../hooks/useAuth';
import './DashboardHome.css';

const DashboardHome = () => {
    const { user, admin } = useAuth();
    return (
        <div>
            <div className="ms-lg-5">
                <h1>Welcome to DashBoard Mr. {user.displayName}</h1>
                <div className="ms-3 mt-4">
                    {(user?.email && admin) && <div>
                        <div className="mb-1">
                            <i class="fas fa-angle-double-right me-2"></i>
                            <span>Click on the button <b>Add New Product</b> for adding new product.</span>
                        </div>
                        <div className="mb-1">
                            <i class="fas fa-angle-double-right me-2"></i>
                            <span>Click on the button <b>Manage All Orders</b> to manage all users orders.</span>
                        </div>
                        <div className="mb-1">
                            <i class="fas fa-angle-double-right me-2"></i>
                            <span>Click on the button <b>Manage All Products</b> to manage all products.</span>
                        </div>
                        <div className="mb-1">
                            <i class="fas fa-angle-double-right me-2"></i>
                            <span>Click on the button <b>Manage All Reviews</b> to manage all the feedbacks getting from the all the users of this website.</span>
                        </div>
                        <div className="mb-1">
                            <i class="fas fa-angle-double-right me-2"></i>
                            <span>Click on the button <b>Make Admin</b> to make admin to another management users of this website.</span>
                        </div>
                    </div>}
                    {(user?.email && (!admin)) &&<div>
                        <div className="mb-1">
                            <i class="fas fa-angle-double-right me-2"></i>
                            <span>Click on the button <b>My Orders</b> to to see all your orders so far.</span>
                        </div>
                        <div className="mb-1">
                            <i class="fas fa-angle-double-right me-2"></i>
                            <span>Click on the button <b>See All Users Feedbacks</b> to to see all reviews about our all activities so far.</span>
                        </div>
                        <div className="mb-1">
                            <i class="fas fa-angle-double-right me-2"></i>
                            <span>Click on the button <b>Give us Feedback</b> to give review.</span>
                        </div>
                        <div className="mb-1">
                            <i class="fas fa-angle-double-right me-2"></i>
                            <span>Click on the button <b>Payment</b> to pay for every products and checkout your orders so far.</span>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;