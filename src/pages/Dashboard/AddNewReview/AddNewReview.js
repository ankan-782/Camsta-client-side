import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import './AddNewReview.css';

const AddNewReview = () => {

    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://camsta-server-side.onrender.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Feedback given successfully.');
                    reset();
                }
            })
    }

    return (
        <div className="ms-lg-5">
            <h5 className="mb-5 border-start border-3 ps-3 border-dark">Feedback Form</h5>
            <div className="row g-5">
                <div className="col-12 col-lg-6">
                    <div className="add-new-review-content-bg">
                        <form onSubmit={handleSubmit(onSubmit)} className="border border-2 border-dark p-4">
                            <div className="mb-3">
                                <label htmlFor="exampleInputName" className="form-label fs-6">Full Name</label>
                                <input type="text" className="form-control input-bg-add-new-review py-3 rounded-0" id="exampleInputName" placeholder="Name" defaultValue={user?.displayName} {...register("name")} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail" className="form-label fs-6">Email address</label>
                                <input type="email" className="form-control input-bg-add-new-review py-3 rounded-0" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="abc@pqr.xyz" defaultValue={user?.email} {...register("email")} required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputFeedback" className="form-label fs-6">Your Valuable Feedback</label>
                                <textarea className="form-control input-bg-add-new-review py-3 rounded-0"
                                    placeholder="Write your feedback/review about this website, product or something else." id="exampleInputFeedback" cols="20" rows="5" {...register("feedback")}>
                                </textarea>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fs-6">Ratings</label>
                                <input type="number" min="0" step="0.1" max="5" className="form-control input-bg-add-new-review py-3 rounded-0" placeholder="Give a rating out of 5" defaultValue="5" {...register("ratings")} required />
                            </div>
                            <button type="submit" className="btn btn-outline-dark rounded-0 mt-4">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="d-flex justify-content-center align-items-center">
                        <i className="fas fa-quote-right quote-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddNewReview;