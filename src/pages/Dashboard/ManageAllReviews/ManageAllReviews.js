import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import './ManageAllReviews.css'

const ManageAllReviews = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fierce-badlands-75560.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .finally(() => setLoading(false));
    }, [])

    const deleteBooking = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete this review?');
        if (proceed) {
            fetch(`https://fierce-badlands-75560.herokuapp.com/reviews/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Review deleted successfully');
                        const remainingReviews = reviews.filter(review => review._id !== id);
                        setReviews(remainingReviews);
                    }
                });
        }
    }

    return (
        <div className="ms-lg-5 manage-all-reviews-content">
            <i className="fas fa-comment-alt comment-icon"></i>
            <h5 className="mb-5 me-3 border-start border-3 ps-3 border-dark d-inline-block">Manage All Reviews</h5>
            {loading ? (
                <div className="spinner-grow text-dark" style={{ width: "1.3rem", height: "1.3rem" }} role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>) : (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 row-cols-xxl-5 g-5">
                    {
                        reviews.map(review => (
                            <div className="col">
                                <div className="card reviews-manage-all-reviews-page border-0 rounded-0 h-100">
                                    <div className="reviews-manage-all-reviews-page-name my-4">
                                        <h5 className="card-title text-center m-0 py-2 text-white">{review?.name}</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-details">
                                            <h6 className="card-text text-black lh-base">{review?.feedback}</h6>
                                        </div>
                                    </div>
                                    <div className="card-footer d-flex justify-content-center align-items-center py-3">
                                        <Rating
                                            initialRating={review?.ratings}
                                            emptySymbol="far fa-star icon-color"
                                            fullSymbol="fas fa-star icon-color"
                                            readonly
                                        >
                                        </Rating>
                                    </div>
                                    <div className="delete-btn-manage-all-reviews-page">
                                        <button onClick={() => deleteBooking(review?._id)} className="btn rounded-0 action-btn-delete-manage-all-reviews-page"><h5><i className="fas fa-trash-alt fs-6 mx-2"></i></h5></button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default ManageAllReviews;