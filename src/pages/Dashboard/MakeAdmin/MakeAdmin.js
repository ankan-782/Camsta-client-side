import React, { useState } from 'react';
import './MakeAdmin.css';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://fierce-badlands-75560.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Admin set successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    return (
        <div className="ms-lg-5">
            <h5 className="mb-5 border-start border-3 ps-3 border-dark">Make an User Admin</h5>
            <div className="row g-5">
                <div className="col-12 col-lg-6">
                    <div className="make-admin-content-bg">
                        <form onSubmit={handleAdminSubmit} className="border border-2 border-dark p-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInputAdmin" className="form-label fs-6">Make an Admin User</label>
                                <input type="email" onBlur={handleOnBlur} className="form-control input-bg-make-admin-page py-3 rounded-0" id="exampleInputAdmin" placeholder="Email" required />
                            </div>
                            <button type="submit" className="btn btn-outline-dark rounded-0">Make Admin</button>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="d-flex justify-content-center align-items-center">
                        <i class="fas fa-user-cog user-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;