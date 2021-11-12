import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useProductsInfo from '../../../hooks/useProductsInfo';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {

    //custom hook used
    const [productsInfo, loading] = useProductsInfo();
    const {admin} = useAuth();

    return (
        <>
            {loading ? (<div className="products-page-spinner-bg">
                <div className="spinner-content d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-dark" style={{ width: "5rem", height: "5rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>) : (<div className="products-bg text-dark">
                <div className="products-content">
                    <div className="container p-4 px-lg-0">
                        <h5 className="mb-5 border-start border-3 ps-3 border-dark">Amazing Action Cameras</h5>
                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 g-5">
                            {
                                productsInfo.map(product => <Product
                                    key={product._id}
                                    product={product}
                                ></Product>)
                            }
                            {admin && <div className="d-flex justify-content-center align-items-center">
                                <NavLink to="dashboard/addNewProduct" className="plus-text-products"><i class="far fa-plus-square plus-icon-products"></i></NavLink>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>)}
        </>
    );
};

export default Products;