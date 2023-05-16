import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import notfoundImg from '../../../images/notFound/not.png';
import './MyOrders.css';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrders, setMyOrders] = useState([]);

    useEffect(() => {
        fetch(`https://camsta-server-side.onrender.com/specificUsersOrders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data));
    }, [user.email]);

    const deleteBooking = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            fetch(`https://camsta-server-side.onrender.com/orders/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Bookings deleted successfully');
                        const remainingOrders = myOrders.filter(myOrder => myOrder._id !== id);
                        setMyOrders(remainingOrders);
                    }
                });
        }
    }

    return (
        <div className="ms-lg-5">
            <h5 className="mb-5 border-start border-3 ps-3 border-dark">My Orders</h5>
            {myOrders.length === 0
                ? (
                    <div>
                        <div className="text-center"><img src={notfoundImg} alt="" /></div>
                        <h1 className="text-center mt-2">No Data Found</h1>
                    </div>
                )
                : <div className="row row-cols-1 row-cols-lg-2 g-5">
                    {
                        myOrders.map(myOrder =>
                            <div className="col">
                                <div className="card my-orders-card-info p-3 rounded-0 border-0">
                                    <div className="row gx-2">
                                        <div className="col-md-5">
                                            <div className="d-flex flex-column justify-content-center align-items-center">
                                                <img src={myOrder?.productImg} className="img-fluid" alt="..." />
                                                {myOrder?.status === 'pending' ? (<small className="status-red-my-order-page text-center">{myOrder?.status}</small>) : (<small className="status-green-my-order-page text-center">{myOrder?.status}</small>)}
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="card-body text-center text-lg-start">
                                                <h5 className="card-title">{myOrder?.productName}</h5>
                                                <p className="mb-1">Price: <span className="price">$ {myOrder?.price}</span> per pc</p>
                                                <p>Quantity: {myOrder?.quantity}pc</p>
                                                <button className="btn rounded-0 action-btn-delete-my-orders-page mt-3" onClick={() => deleteBooking(myOrder._id)}><p><i className="fas fa-trash-alt me-2"></i>Cancel the order</p></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                    }
                </div>
            }
        </div>
    );
};

export default MyOrders;