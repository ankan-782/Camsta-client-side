import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './ManageAllProducts.css';

const ManageAllProducts = () => {
    const { admin } = useAuth();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fierce-badlands-75560.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .finally(() => setLoading(false));
    }, [])

    const deleteBooking = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this product?');
        if (proceed) {
            fetch(`https://fierce-badlands-75560.herokuapp.com/products/${id}`, {
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
    }

    return (
        <div className="ms-lg-5">
            <h5 className="mb-5 me-3 border-start border-3 ps-3 border-dark d-inline-block">Manage All Products</h5>
            {loading ? (
                <div className="spinner-grow text-dark" style={{ width: "1.3rem", height: "1.3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>) : (
                <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 g-5">
                    {
                        products.map(product => (
                            <div className="col">
                                <div className="card product-manage-all-products-page border-0 rounded-0 h-100">
                                    <img src={product?.productImg} className="card-img-top rounded-0" alt="..." />
                                    <div className="product-manage-all-products-page-name">
                                        <h5 className="card-title text-center m-0 py-2 text-white">{product?.productName}</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-details">
                                            <h6 className="card-text text-black lh-base">{product?.short_description}</h6>
                                        </div>
                                    </div>
                                    <div className="card-footer bg-transparent border-0 mb-3">
                                        <h6 className="border-bottom border-2 border-dark pb-1">Reason To Buy</h6>
                                        <p className="card-text text-black lh-base">{product?.reason}</p>
                                    </div>
                                    <div class="card-footer d-flex justify-content-center align-items-center py-3">
                                        <div>
                                            <h4 className="m-0">${product?.price}</h4>
                                        </div>
                                    </div>
                                    <div className="delete-btn">
                                        <button onClick={() => deleteBooking(product?._id)} className="btn rounded-0 action-btn-delete-manage-all-products-page"><h1><i class="fas fa-trash-alt fs-3 mx-3"></i></h1></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    {admin && <div className="d-flex justify-content-center align-items-center">
                        <NavLink to="addNewProduct" className="plus-text-manage-all-products-page"><i class="far fa-plus-square plus-icon-manage-all-products-page"></i></NavLink>
                    </div>}
                </div>
            )}
        </div>
    );
};

export default ManageAllProducts;