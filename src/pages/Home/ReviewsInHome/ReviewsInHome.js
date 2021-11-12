import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './ReviewsInHome.css';

const ReviewsInHome = () => {
    const { admin } = useAuth();
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://fierce-badlands-75560.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .finally(() => setLoading(false));
    }, [])
    return (
        <div className="reviews-in-home-bg">
            <div className="container text-dark reviews-in-home-content px-4 px-lg-0">
                <h5 className="mb-5 me-3 border-start border-3 ps-3 border-dark d-inline-block">Feedback Section</h5>
                {loading ? (
                    <div className="spinner-grow text-dark" style={{ width: "1.3rem", height: "1.3rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>) : (
                    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-5">
                        {
                            reviews.map(review => (
                                <div className="col">
                                    <div className="card reviews-in-home-page-card border-0 rounded-0 h-100">
                                        <div className="reviews-in-home-page-card-name my-4">
                                            <h5 className="card-title text-center m-0 py-2 text-white">{review?.name}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="card-details">
                                                <h6 className="card-text text-black lh-base">{review?.feedback}</h6>
                                            </div>
                                        </div>
                                        <div class="card-footer d-flex justify-content-center align-items-center py-3">
                                            <Rating
                                                initialRating={review?.ratings}
                                                emptySymbol="far fa-star icon-color"
                                                fullSymbol="fas fa-star icon-color"
                                                readonly
                                            >
                                            </Rating>
                                        </div>
                                        <i class="fas fa-comment-alt comment"></i>
                                    </div>
                                </div>
                            ))
                        }
                        {!admin && <div className="d-flex justify-content-center align-items-center">
                            <NavLink to="dashboard/addNewReview" className="plus-text-reviews-home"><i class="far fa-plus-square plus-icon-reviews-home"></i></NavLink>
                        </div>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReviewsInHome;