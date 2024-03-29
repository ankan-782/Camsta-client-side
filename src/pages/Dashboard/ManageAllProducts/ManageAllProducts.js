import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './ManageAllProducts.css';

const ManageAllProducts = () => {
    const { admin } = useAuth();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://camsta-server-side.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => setLoading(false));
    }, []);

    const deleteBooking = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this product?');
        if (proceed) {
            fetch(`https://camsta-server-side.onrender.com/products/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Products deleted successfully');
                        const remainingProducts = products.filter(product => product._id !== id);
                        setProducts(remainingProducts);
                    }
                });
        }
    };

    return (
        <div className="ms-lg-5">
            <h5 className="mb-5 me-3 border-start border-3 ps-3 border-dark d-inline-block">Manage All Products</h5>
            {loading ? (
                <div className="spinner-grow text-dark" style={{ width: "1.3rem", height: "1.3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>) : (
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 g-5">
                    {
                        products.map(product => (
                            <div className="col">
                                <div className="card product-manage-all-products-page border-0 rounded-3 h-100">
                                    <img src={product?.productImg} style={{ height: "250px" }} className="card-img-top rounded-3" alt="..." />
                                    <h5 className="card-title product-manage-all-products-page-name rounded-end text-center m-0 py-2 text-white">{product?.productName}</h5>
                                    <div className="card-body">
                                        <p className="card-text text-black lh-base mb-3">{product?.short_description}</p>
                                        <h5 className="border-bottom border-2 border-dark pb-1">Reason To Buy</h5>
                                        <p className="card-text text-black lh-base">{product?.reason}</p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-center align-items-center py-3">
                                        <h4 className="m-0">${product?.price}</h4>
                                    </div>
                                    <div className="delete-btn">
                                        <button onClick={() => deleteBooking(product?._id)} className="btn rounded-3 action-btn-delete-manage-all-products-page"><h1><i className="fas fa-trash-alt fs-3 mx-3"></i></h1></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {admin && <div className="d-flex justify-content-center align-items-center">
                        <NavLink to="addNewProduct" className="plus-text-manage-all-products-page"><i className="far fa-plus-square plus-icon-manage-all-products-page"></i></NavLink>
                    </div>}
                </div>
            )}
        </div>
    );
};

export default ManageAllProducts;