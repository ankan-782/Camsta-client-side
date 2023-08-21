import React from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css';
const Product = ({ product }) => {

    const { _id, productImg, productName, short_description, price, reason } = product;
    return (
        <div className="col">
            <div className="card product border-0 rounded-3 h-100">
                <img src={productImg} className="card-img-top rounded-3" alt="..." />
                <div className="product-name rounded-end">
                    <h5 className="card-title text-center m-0 py-2 text-white">{productName}</h5>
                </div>
                <div className="card-body">
                    <div className="card-details">
                        <h6 className="card-text text-black lh-base">{short_description}</h6>
                    </div>
                </div>
                <div className="card-footer bg-transparent border-0 mb-3">
                    <h6 className="border-bottom border-2 border-dark pb-1">Reason To Buy</h6>
                    <p className="card-text text-black lh-base">{reason}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center py-3">
                    <div>
                        <h4 className="m-0">${price}</h4>
                    </div>
                    <NavLink to={`/purchase/${_id}`}><button className="btn btn-outline-dark rounded-3"><i className="fas fa-chevron-right"></i></button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Product;