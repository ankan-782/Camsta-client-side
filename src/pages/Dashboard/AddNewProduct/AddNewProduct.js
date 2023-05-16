import React from 'react';
import { useForm } from 'react-hook-form';
import './AddNewProduct.css';

const AddNewProduct = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {

        console.log(data);
        fetch('https://camsta-server-side.onrender.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Products Added successfully.');
                    reset();
                }
            })
    }
    return (
        <div className="ms-lg-5">
            <h5 className="mb-5 border-start border-3 ps-3 border-dark">Add a new Product</h5>
            <div className="row g-5">
                <div className="col-12 col-lg-6">
                    <div className="add-new-product-content-bg">
                        <form onSubmit={handleSubmit(onSubmit)} className="border border-2 border-dark p-4">
                            <div className="mb-3">
                                <label className="form-label fs-6">Product Name</label>
                                <input type="text" className="form-control input-bg-add-new-product py-3 rounded-0" placeholder="Product Name" {...register("productName")} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fs-6">Image Link of the product</label>
                                <input type="text" className="form-control input-bg-add-new-product py-3 rounded-0" placeholder="Product Image Link" {...register("productImg")} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fs-6">Short Description about the product</label>
                                <input type="text" className="form-control input-bg-add-new-product py-3 rounded-0" placeholder="Short text about the product" {...register("short_description")} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fs-6">Detail description</label>
                                <textarea className="form-control input-bg-add-new-product py-3 rounded-0" placeholder="Description" cols="20" rows="3" {...register("description")}></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fs-6">Specification</label>
                                <textarea className="form-control input-bg-add-new-product py-3 rounded-0" placeholder="Specification" cols="20" rows="3" {...register("specification")}></textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fs-6">Reason for buying the product</label>
                                <input type="text" className="form-control input-bg-add-new-product py-3 rounded-0" placeholder="Reason for buying the product" {...register("reason")} required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fs-6">Price</label>
                                <input type="text" className="form-control input-bg-add-new-product py-3 rounded-0" placeholder="Price" {...register("price")} required />
                            </div>
                            <button type="submit" className="btn btn-outline-dark rounded-0 mt-4">Add this Product to the database</button>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="d-flex justify-content-center align-items-center">
                        <i className="fas fa-database database-icon mt-5"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;