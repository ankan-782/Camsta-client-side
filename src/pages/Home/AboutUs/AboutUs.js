import React from 'react';
import './AboutUs.css';
import img1 from '../../../images/about/img1.jpg';
import img2 from '../../../images/about/img2.jpg';
import img3 from '../../../images/about/img3.jpg';
import img4 from '../../../images/about/img4.jpg';

const AboutUs = () => {
    return (
        <div className="about-us-bg text-dark">
            <div className="about-us-content d-flex justify-content-center align-items-center">
                <div className="container px-lg-0">
                    <div className="row g-5">
                        <div className="col-12 col-xl-6">
                            <div className="row g-3">
                                <div className="col-12 col-md-6">
                                    <div className="img-content">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h3 className="position-absolute text-white">Best Deals</h3>
                                            <img src={img1} alt="" className="img-fluid border border-2 p-2 border-dark rounded-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="img-content">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h3 className="position-absolute text-white">Best Offers</h3>
                                            <img src={img2} alt="" className="img-fluid border border-2 p-2 border-dark rounded-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="img-content">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h3 className="position-absolute text-white">Great Cameras</h3>
                                            <img src={img3} alt="" className="img-fluid border border-2 p-2 border-dark rounded-3" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="img-content">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <h3 className="position-absolute text-white">Fast Booking</h3>
                                            <img src={img4} alt="" className="img-fluid border border-2 p-2 border-dark rounded-3" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-xl-6">
                            <h5 className="mb-4 border-start border-3 ps-3 border-dark">About Us</h5>
                            <h2 className="mb-4">Get to know a little about us!</h2>
                            <p>For over 34 years, Camsta - Action Camera has dedicated itself to providing service, quality, and professionalism to the photography community. Thanks to our amazing customers, we continue to thrive in our Sylhet location and have since opened up a second store in Fenchuganj, Sylhet.
                                We may be small in size, but we make sure to fill every inch of our stores with quality photographic equipment.
                                So, stop in for a visit! Our staff is here to assist you.</p><br />
                            <p>Our staff has all the knowledge and experience to help you find exactly what you’re looking for. Each of our locations offers a wonderful selection of new or experienced action cameras. Can’t find it in the store? We’ll order it for you.
                                We’re more than a retail action camera store, we are a community-first business. We proudly offer classes, workshops, a rental program, film processing, and more!! Whether you're a pro, hobbyist, or complete beginner, we are here to help you get the most out of your gear.</p>
                            <div className="mt-5 row g-3">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="text-center about-card h-100 rounded-3">
                                        <i className="fas fa-handshake fs-2 mb-3"></i>
                                        <h6 className="fw-bold text-dark text-uppercase">Best Deals</h6>
                                        <p>Affordable</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="text-center about-card h-100 rounded-3">
                                        <i className="fas fa-globe fs-2 mb-3"></i>
                                        <h6 className="fw-bold text-dark text-uppercase">Best Offers</h6>
                                        <p>Every Level</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="text-center about-card h-100 rounded-3">
                                        <i className="fas fa-camera fs-2 mb-3"></i>
                                        <h6 className="fw-bold text-dark text-uppercase">Great Cameras</h6>
                                        <p>Affordable</p>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="text-center about-card h-100 rounded-3">
                                        <i className="fas fa-user-check fs-2 mb-3"></i>
                                        <h6 className="fw-bold text-dark text-uppercase">Fast Booking</h6>
                                        <p>All Products</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;