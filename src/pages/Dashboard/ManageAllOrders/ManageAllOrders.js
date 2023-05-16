import React, { useEffect, useState } from 'react';
import notfoundImg from '../../../images/notFound/not.png';
import './ManageAllOrders.css';

const ManageAllOrders = () => {

    const [manageOrders, setManageOrders] = useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(() => {
        fetch('https://camsta-server-side.onrender.com/orders')
            .then(res => res.json())
            .then(data => setManageOrders(data));
    }, [updated]);

    const deleteBooking = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this order?');
        if (proceed) {
            fetch(`https://camsta-server-side.onrender.com/orders/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Bookings deleted successfully');
                        const remainingOrders = manageOrders.filter(allBookings => allBookings._id !== id);
                        setManageOrders(remainingOrders);
                    }
                });
        }
    }

    const updateBookingStatus = (id) => {
        fetch(`https://camsta-server-side.onrender.com/orders/${id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'shipped' })
        })
            .then(res => res.json())
            .then(data => {
                setUpdated(!updated);
            })

    }
    return (
        <div>
            <div className="ms-lg-5">
                <h5 className="mb-5 border-start border-3 ps-3 border-dark">Manage All Orders</h5>
                {manageOrders.length === 0
                    ? (
                        <div>
                            <div className="text-center"><img src={notfoundImg} alt="" /></div>
                            <h1 className="text-center mt-2">No Data Found</h1>
                        </div>
                    )
                    : <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"># Order ID</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Address</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    manageOrders.map(order => (
                                        <tr key={order._id}>
                                            <th scope="row">{order._id}</th>
                                            <td>{order.name}</td>
                                            <td>{order.email}</td>
                                            <td>{order.phoneNo}</td>
                                            <td>{order.address}, {order.city}</td>
                                            <td>{order.productName}</td>
                                            <td>{order.quantity}</td>
                                            <td>
                                                {order.status === 'pending' ? (<small className="status-red text-center">{order?.status}</small>) : (<small className="status-green text-center">{order?.status}</small>)}
                                            </td>
                                            <td>
                                                <div className="dropdown">
                                                    <button className="btn btn-outline-dark rounded-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Action
                                                    </button>
                                                    <ul className="dropdown-menu rounded-0" style={{ width: '200px' }} aria-labelledby="dropdownMenuButton1">
                                                        <li>{order.status === 'pending' && <button className="btn rounded-0 mb-2 action-btn-approve" onClick={() => updateBookingStatus(order._id)}><i className="fas fa-check-double fs-6 me-2"></i>Approve the order</button>}</li>
                                                        <li><button className="btn rounded-0 action-btn-delete" onClick={() => deleteBooking(order._id)}><i className="fas fa-trash-alt fs-6 me-2"></i>Delete the order</button></li>
                                                    </ul>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
        </div>
    );
};

export default ManageAllOrders;