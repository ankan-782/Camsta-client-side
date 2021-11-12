import React from 'react';
import './Banner.css';
import img1 from '../../../images/Banner/img1.png'
import img2 from '../../../images/Banner/img2.jpg'
import img3 from '../../../images/Banner/img3.jpg'

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div className="banner-img-content">
                        <div>
                            <img src={img1} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-caption-first d-none d-md-block">
                        <p className="mb-5">Join with our family by <br /> buying from our shop<br /> <span className="banner-brand">CAMSTA</span></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="banner-img-content">
                        <div>
                            <img src={img2} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-caption-second d-none d-md-block">
                        <p className="mb-5">Get your choice and <br /> buy the best <br /> <span className="banner-brand">Action Cam only from Us</span></p>
                    </div>
                </div>
                <div class="carousel-item">
                    <div className="banner-img-content">
                        <div>
                            <img src={img3} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <div className="carousel-caption-third d-none d-md-block">
                        <p className="mb-5">Enjoy, Travel, Capture <br /> Any<br /><span className="banner-brand">With Camsta Products</span></p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;