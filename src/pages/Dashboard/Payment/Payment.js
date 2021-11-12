import React from 'react';
import './Payment.css';

const Payment = () => {
    return (
        <div className="ms-lg-5">
            <h5 className="mb-5 border-start border-3 ps-3 border-dark d-inline-block me-2">Payment Functionality Coming Soon</h5>
            <div className="spinner-grow text-dark" style={{ width: "1.3rem", height: "1.3rem" }} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="text-center">
                <i class="fas fa-money-check-alt money-icon"></i>
            </div>
        </div>
    );
};

export default Payment;