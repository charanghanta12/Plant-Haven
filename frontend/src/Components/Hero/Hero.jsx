import React from 'react';
import './Hero.css';
import offer_img from '../Assets/slide2.jpg';

const Hero = () => {
    return (
        <div>
            <div className="hero">
                <div className="hero-text">
                    <div class="hero-content">
                        <h1 className="typewriter-text"> Welcome to <span className="yellow">Plant</span> Haven </h1>
                        <p>
                            Discover a world of beauty and tranquility with our exquisite collection
                            of <span className="yellow">plants</span>, <span className="yellow">seeds</span>, and <span className="yellow">pots</span>.
                        </p>
                        <a href="/Plant" className="btn-plnt">
                            Explore Now
                        </a>
                    </div>
                </div>
                <div className="container text-center quality">
                    <div className="row">
                        <div className="feature quality_feature ">
                            <i className="bi bi-heart"></i>
                            <h2>Quality Plants</h2>
                            <p>
                                Discover a wide variety of healthy and vibrant plants for your
                                garden.
                            </p>
                        </div>
                    
                        <div className="feature delivery">
                            <i className="bi bi-truck"></i>
                            <h2>Fast Delivery</h2>
                            <p>We ensure prompt and safe delivery to your doorstep.</p>
                        </div>
                    
                        <div className="feature Quality">
                            <i className="bi bi-shield"></i>
                            <h2>Quality Assurance</h2>
                            <p>
                                Our plants are carefully selected and inspected to meet the
                                highest standards.
                            </p>
                        </div>
                    </div>
                    <div className="ofrs-sec">
                        <div className="off-cont" id='offer-content'>
                            <h1>30% Exclusive on Pots </h1>
                            <p>
                                We are offering 30% off on Pots. Don't Miss, Check it out now
                            </p>
                            <a href="/Pots" className="btn-plnts">
                                Check out
                            </a>
                        </div>
                        <div className="off-cont">
                            <img className="off-img" src={offer_img} alt="offer image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
