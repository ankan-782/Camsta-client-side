import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import img1 from '../../../images/footerGallery/img1.jpg';
import img2 from '../../../images/footerGallery/img2.jpg';
import img3 from '../../../images/footerGallery/img3.jpg';
import img4 from '../../../images/footerGallery/img4.jpg';
import img5 from '../../../images/footerGallery/img5.jpg';
import img6 from '../../../images/footerGallery/img6.jpg';
import img7 from '../../../images/footerGallery/img7.jpg';
import img8 from '../../../images/footerGallery/img8.jpg';
import img9 from '../../../images/footerGallery/img9.jpg';
import './Footer.css';

const Footer = () => {
    const { user } = useAuth();

    const submit = () => {
        alert('Thank you for subscribing us. We will notify you for every update of this website.');
    }

    return (
        <div id="big-footer">
            <div className="container font-color-footer pt-5 pb-4 px-4 px-lg-0">
                <div className="row g-5">
                    <div className="col-12 col-lg-4">
                        <div className="d-flex align-items-center mb-4">
                            <i class="fas fa-camera fs-2 me-3"></i>
                            <h5 className="footer-brand m-0 pt-2">C a m s t a</h5>
                        </div>
                        <p>For over 34 years, Camsta - Action Camera has dedicated itself to providing service, quality, and professionalism to the photography community. We may be small in size, but we make sure to fill every inch of our stores with quality photographic equipment. So, stop in for a visit! Our staff is here to assist you.</p>
                        <div className="mt-4">
                            <h5>Receive Email Updates</h5>
                            <div className="d-flex">
                                <input type="text" placeholder="Your Email Address" className="form-control footer-input-bg rounded-0" value={user?.email} />
                                <button className="btn footer-submit-btn btn-outline-dark rounded-0" onClick={submit}>SUBMIT</button>
                            </div>
                        </div>
                        <div className="mt-5">
                            <i class="fs-1 me-2 fab fa-cc-paypal"></i>
                            <i class="fs-1 me-2 fab fa-cc-visa"></i>
                            <i class="fs-1 me-2 fab fa-cc-mastercard"></i>
                            <i class="fs-1 me-2 fab fa-cc-amex"></i>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2">
                        <div className="pt-2 ps-2">
                            <h5 className="fw-bold">Navigation</h5>
                            <div className="mt-4 ps-2">
                                <p className="mb-4"><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none font-color-footer" to="/home">Home</NavLink></p>
                                <p className="mb-4"><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none font-color-footer" to="/products">Explore Products</NavLink></p>
                                <p className="mb-4"><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none font-color-footer" to="/dashboard">Dashboard</NavLink></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-2">
                        <div className="pt-2 ps-2">
                            <h5 className="fw-bold">Need Help?</h5>
                            <div className="mt-4">
                                <div className="mb-4">
                                    <p>Call Us</p>
                                    <h6 className="fw-bold">01636456927</h6>
                                </div>
                                <div className="mb-4">
                                    <p>Email Us</p>
                                    <h6 className="fw-bold">royavijit782@gmail.com</h6>
                                </div>
                                <div className="mb-4">
                                    <p>Main Location</p>
                                    <h6 className="fw-bold">Sylhet, Bangladesh</h6>
                                </div>
                                <div className="mb-4">
                                    <p>Follow us</p>
                                    <div className="d-flex fs-5 social-links">
                                        <a href="https://www.facebook.com/ankan.roy.50999" target="_blank" className="me-3">
                                            <i className="fab fa-facebook font-color-footer"></i>
                                        </a>
                                        <a href="https://www.instagram.com/ankan_782/" target="_blank" className="me-3">
                                            <i className="fab fa-instagram font-color-footer"></i>
                                        </a>
                                        <a href="https://twitter.com/AvijitAnkan" target="_blank" className="me-3">
                                            <i className="fab fa-twitter font-color-footer"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="pt-2 ps-2">
                            <h5 className="fw-bold mb-4">Gallery</h5>
                            <div className="row g-3">
                                <div className="col-4">
                                    <img src={img1} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img2} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img3} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img4} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img5} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img6} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img7} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img8} alt="" className="w-100" />
                                </div>
                                <div className="col-4">
                                    <img src={img9} alt="" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="container mt-5 mb-3" />
                <div className="d-lg-flex justify-content-between align-items-center">
                    <p>Copyright © 2021  |  CAMSTA  |  Avijit Roy  |  All Rights Reserved.</p>
                    <div className="d-flex mt-3 mt-lg-0">
                        <p><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none mx-2 font-color-footer" to="/privacy">Privacy Policy</NavLink>  |</p>
                        <p><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none mx-2 font-color-footer" to="/terms">Terms of Use</NavLink>  |</p>
                        <p><NavLink activeStyle={{ fontWeight: "bold" }} className="text-decoration-none mx-2 font-color-footer" to="/cookie">Cookie Policy</NavLink></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;