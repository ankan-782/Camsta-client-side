import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import ProductsInHome from '../ProductsInHome/ProductsInHome';
import ReviewsInHome from '../ReviewsInHome/ReviewsInHome';
import { NavLink } from 'react-router-dom';
import useProductsInfo from '../../../hooks/useProductsInfo';
import './Home.css';
import HeaderForLandingPage from '../../Shared/HeaderForLandingPage/HeaderForLandingPage';


const Home = () => {

    //custom hook used
    const [productsInfo, loading] = useProductsInfo();

    return (
        <div>
            <HeaderForLandingPage></HeaderForLandingPage>
            <Banner></Banner>
            {loading ? (<div className="home-spinner-bg">
                <div className="spinner-content d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-dark" style={{ width: "5rem", height: "5rem" }} role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>) : (<div className="home-bg text-dark">
                <div className="home-content">
                    <div className="container p-4 px-lg-0">
                        <h5 className="mb-5 border-start border-3 ps-3 border-dark">Amazing Action Cameras</h5>
                        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 row-cols-xxl-4 g-5">
                            {
                                productsInfo.slice(0, 6).map(product => <ProductsInHome
                                    key={product._id}
                                    product={product}
                                ></ProductsInHome>)
                            }
                        </div>
                        <div className="d-flex justify-content-center align-items-center">
                            <NavLink className="btn btn-outline-dark rounded-0 my-5" to="/products">View all products in Explore Products section</NavLink>
                        </div>
                    </div>
                </div>
            </div>)}

            <AboutUs></AboutUs>
            <ReviewsInHome></ReviewsInHome>
        </div>
    );
};

export default Home;