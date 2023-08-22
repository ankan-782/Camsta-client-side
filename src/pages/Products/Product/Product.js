import React from 'react';
import { NavLink } from 'react-router-dom';
import './Product.css';
const Product = ({ product }) => {

    const { _id, productImg, productName, short_description, price, reason } = product;
    return (
        <div className="col">
            <div className="card product border-0 rounded-3 h-100">
                <img src={productImg} style={{ height: "250px" }} className="card-img-top rounded-3" alt="..." />
                <h5 className="card-title product-name rounded-end text-center m-0 py-2 text-white">{productName}</h5>
                <div className="card-body">
                    <p className="card-text text-black lh-base mb-3">{short_description}</p>
                    <h5 className="border-bottom border-2 border-dark pb-1">Reason To Buy</h5>
                    <p className="card-text text-black lh-base">{reason}</p>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center py-3">
                    <h4 className="m-0">${price}</h4>
                    <NavLink to={`/purchase/${_id}`}><button className="btn btn-outline-dark rounded-3"><i className="fas fa-chevron-right"></i></button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Product;