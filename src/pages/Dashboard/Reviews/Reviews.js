import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { NavLink } from 'react-router-dom';
import notfoundImg from '../../../images/notFound/not.png';
import './Reviews.css';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://camsta-server-side.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <div className="ms-lg-5">
            <h5 className="mb-5 border-start border-3 ps-3 border-dark">User Feedbacks</h5>
            {reviews.length === 0
                ? (
                    <div>
                        <div className="text-center"><img src={notfoundImg} alt="" /></div>
                        <h1 className="text-center mt-2">No Data Found</h1>
                    </div>
                )
                :
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-5">
                    {
                        reviews.map(review => (
                            <div className="col">
                                <div className="card reviews-page-card border-0 rounded-3 h-100">
                                    <div className="reviews-page-card-name my-4 rounded-end">
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
                                    <i className="fas fa-comment-alt comment"></i>
                                </div>
                            </div>
                        ))
                    }
                    <div className="d-flex justify-content-center align-items-center">
                        <NavLink to="addNewReview" className="plus-text-reviews-home"><i className="far fa-plus-square plus-icon-reviews-home"></i></NavLink>
                    </div>
                </div>
            }
        </div>
    );
};

export default Reviews;