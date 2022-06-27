import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='slide1 min-vh-100'>
                        <div className="carousel-caption-first d-none d-md-block">
                            <p className="mb-5">Join with our family by <br /> buying from our shop<br /> <span className="banner-brand">CAMSTA</span></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide2 min-vh-100'>
                        <div className="carousel-caption-second d-none d-md-block">
                            <p className="mb-5">Get your choice and <br /> buy the best <br /> <span className="banner-brand">Action Cam only from Us</span></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='slide3 min-vh-100'>
                        <div className="carousel-caption-third d-none d-md-block">
                            <p className="mb-5">Enjoy, Travel, Capture <br /> Any<br /><span className="banner-brand">With Camsta Products</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;