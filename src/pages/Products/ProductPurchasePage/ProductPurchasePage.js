import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './ProductPurchasePage.css';

const ProductPurchasePage = () => {

    const { user, admin } = useAuth();
    const [specificProduct, setSpecificProduct] = useState({});
    const { specificProductID } = useParams();

    useEffect(() => {
        fetch(`https://fierce-badlands-75560.herokuapp.com/products/${specificProductID}`)
            .then(res => res.json())
            .then(data => setSpecificProduct(data));
    }, [])

    const { _id, productName, productImg, short_description, price, description, specification, reason } = specificProduct;

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.productImg = productImg;
        data.bookingID = _id;
        data.productName = productName;
        data.price = price;
        data.status = 'pending';

        fetch('https://fierce-badlands-75560.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert(`order placed successfully.`);
                    reset();
                }
            })
    }
    return (
        <div className="product-purchase-page-bg text-dark">
            <div className="product-purchase-page-content">
                <div className="container p-4 px-lg-0 pt-lg-5">
                    <h4 className="mb-5 border-start border-3 ps-3 border-dark">Product details</h4>
                    <div className="row g-5">
                        <div className="col-12 col-lg-5">
                            <img src={productImg} className="img-fluid mb-3" alt="..." />
                            <div className="product-purchase-page-price">
                                <h3 className="m-0">${price}</h3>
                            </div>
                        </div>
                        <div className="col-12 col-lg-7">
                            <div className="mb-3 product-purchase-page-product-name py-4">
                                <h4 className="card-title text-center fw-bold m-0 text-white">{productName}</h4>
                            </div>
                            <div className="mb-4">
                                <div className="card-details mb-3">
                                    <h5 className="card-text text-black lh-base">{short_description}</h5>
                                </div>
                                <div className="card-details">
                                    <p className="card-text text-black lh-base">{description}</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h6 className="border-bottom border-2 border-dark pb-1">Specification</h6>
                                <p className="card-text text-black lh-base">{specification}</p>
                            </div>
                            <div className="mb-5">
                                <h6 className="border-bottom border-2 border-dark pb-1">Reason To Buy</h6>
                                <p className="card-text text-black lh-base">{reason}</p>
                            </div>
                            {!admin && <button type="button" className="btn btn-outline-dark rounded-0" data-bs-toggle="modal" data-bs-target="#exampleModal">Place Order to Purchase this</button>}
                        </div>



                        {/* as my thinking, admin can not order anything. so I filter the place order button. 
                            But normal user can order by pressing the place order button */}


                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                            <div class="modal-content rounded-0 modal-bg">
                                <div class="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Order Information</h5>
                                    <button type="button" class="btn-close rounded-0" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputName" className="form-label fs-6">Full Name</label>
                                            <input type="text" className="form-control input-bg-product-purchase-page py-3 rounded-0" id="exampleInputName" placeholder="Name" defaultValue={user?.displayName} {...register("name")} required readOnly />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail" className="form-label fs-6">Email address</label>
                                            <input type="email" className="form-control input-bg-product-purchase-page py-3 rounded-0" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="abc@pqr.xyz" defaultValue={user?.email} {...register("email")} required readOnly />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputPhNo" className="form-label fs-6">Phone Number</label>
                                            <input type="text" className="form-control input-bg-product-purchase-page py-3 rounded-0" id="exampleInputPhNo" placeholder="01XXXXXXXXX" {...register("phoneNo")} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputAddress" className="form-label fs-6">Address</label>
                                            <textarea className="form-control input-bg-product-purchase-page py-3 rounded-0"
                                                placeholder="Your Full Address" id="exampleInputAddress" cols="20" rows="3" {...register("address")}>
                                            </textarea>
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputCity" className="form-label fs-6">City</label>
                                            <input type="text" className="form-control input-bg-product-purchase-page py-3 rounded-0" id="exampleInputCity" placeholder="City" {...register("city")} required />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputQuantity" className="form-label fs-6">Product Quantity</label>
                                            <input type="number" min="1" className="form-control input-bg-product-purchase-page py-3 rounded-0" id="exampleInputQuantity" placeholder="Quantity" {...register("quantity")} defaultValue="1" required />
                                        </div>
                                        <button type="submit" class="mt-4 btn btn-outline-dark rounded-0" data-bs-dismiss="modal">Place Order</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPurchasePage;