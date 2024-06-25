import React from 'react';

function ExploreProFeatures() {
    const eaData = localize.eael_dashboard.explore_pro_features,
        assetPath = localize.eael_dashboard.reactPath;

    return (
        <>
            <div className="ea__pro-features flex justify-between items-center">
                <div className="ea__features-content">
                    <h2>Explore Premiere Pro features</h2>
                    <p className="mb-7">
                        Learn all about the tools and techniques you can use to edit videos, animate titles, add
                        effects, mix sound, and more.
                    </p>
                    <div className="ea__feature-list-wrap mb-6">
                        <div className="ea__feature-list-item flex gap-2 items-center mb-4">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 7L6.33333 8.33333L9 5.66667M1 7C1 7.78793 1.15519 8.56815 1.45672 9.2961C1.75825 10.0241 2.20021 10.6855 2.75736 11.2426C3.31451 11.7998 3.97595 12.2417 4.7039 12.5433C5.43185 12.8448 6.21207 13 7 13C7.78793 13 8.56815 12.8448 9.2961 12.5433C10.0241 12.2417 10.6855 11.7998 11.2426 11.2426C11.7998 10.6855 12.2417 10.0241 12.5433 9.2961C12.8448 8.56815 13 7.78793 13 7C13 6.21207 12.8448 5.43185 12.5433 4.7039C12.2417 3.97595 11.7998 3.31451 11.2426 2.75736C10.6855 2.20021 10.0241 1.75825 9.2961 1.45672C8.56815 1.15519 7.78793 1 7 1C6.21207 1 5.43185 1.15519 4.7039 1.45672C3.97595 1.75825 3.31451 2.20021 2.75736 2.75736C2.20021 3.31451 1.75825 3.97595 1.45672 4.7039C1.15519 5.43185 1 6.21207 1 7Z"
                                    stroke="#750EF4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>EA Fancy Chart Symbol display option in the fancy chart</p>
                        </div>
                        <div className="ea__feature-list-item flex gap-2 items-center mb-4">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 7L6.33333 8.33333L9 5.66667M1 7C1 7.78793 1.15519 8.56815 1.45672 9.2961C1.75825 10.0241 2.20021 10.6855 2.75736 11.2426C3.31451 11.7998 3.97595 12.2417 4.7039 12.5433C5.43185 12.8448 6.21207 13 7 13C7.78793 13 8.56815 12.8448 9.2961 12.5433C10.0241 12.2417 10.6855 11.7998 11.2426 11.2426C11.7998 10.6855 12.2417 10.0241 12.5433 9.2961C12.8448 8.56815 13 7.78793 13 7C13 6.21207 12.8448 5.43185 12.5433 4.7039C12.2417 3.97595 11.7998 3.31451 11.2426 2.75736C10.6855 2.20021 10.0241 1.75825 9.2961 1.45672C8.56815 1.15519 7.78793 1 7 1C6.21207 1 5.43185 1.15519 4.7039 1.45672C3.97595 1.75825 3.31451 2.20021 2.75736 2.75736C2.20021 3.31451 1.75825 3.97595 1.45672 4.7039C1.15519 5.43185 1 6.21207 1 7Z"
                                    stroke="#750EF4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>EA Instagram Feed Feed is getting broken on the front-end view</p>
                        </div>
                        <div className="ea__feature-list-item flex gap-2 items-center mb-4">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5 7L6.33333 8.33333L9 5.66667M1 7C1 7.78793 1.15519 8.56815 1.45672 9.2961C1.75825 10.0241 2.20021 10.6855 2.75736 11.2426C3.31451 11.7998 3.97595 12.2417 4.7039 12.5433C5.43185 12.8448 6.21207 13 7 13C7.78793 13 8.56815 12.8448 9.2961 12.5433C10.0241 12.2417 10.6855 11.7998 11.2426 11.2426C11.7998 10.6855 12.2417 10.0241 12.5433 9.2961C12.8448 8.56815 13 7.78793 13 7C13 6.21207 12.8448 5.43185 12.5433 4.7039C12.2417 3.97595 11.7998 3.31451 11.2426 2.75736C10.6855 2.20021 10.0241 1.75825 9.2961 1.45672C8.56815 1.15519 7.78793 1 7 1C6.21207 1 5.43185 1.15519 4.7039 1.45672C3.97595 1.75825 3.31451 2.20021 2.75736 2.75736C2.20021 3.31451 1.75825 3.97595 1.45672 4.7039C1.15519 5.43185 1 6.21207 1 7Z"
                                    stroke="#750EF4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <p>EA Woo Product Carouse Option to hide and show add to cart</p>
                        </div>
                    </div>
                    <a href="#">
                         <span className="primary-btn changelog-btn">
                           <i className="ea-dash-icon ea-link"></i>
                             Learn More
                         </span>
                    </a>
                </div>
                <div className="features-widget-wrapper">
                    <div className="features-widget-item">
                        <a href="#">
                            <img src={assetPath + 'images/img-7.png'} alt="img"/>
                            <span className="eael-tooltip">Event Calendar</span>
                        </a>
                    </div>
                    <div className="features-widget-item">
                        <a href="#">
                            <img src={assetPath + 'images/img-7.png'} alt="img"/>
                            <span className="eael-tooltip">Event Calendar</span>
                        </a>
                    </div>
                    <div className="features-widget-item">
                        <a href="#">
                            <img src={assetPath + 'images/img-7.png'} alt="img"/>
                            <span className="eael-tooltip">Event Calendar</span>
                        </a>
                    </div>
                    <div className="features-widget-item">
                        <a href="#">
                            <img src={assetPath + 'images/img-7.png'} alt="img"/>
                            <span className="eael-tooltip">Event Calendar</span>
                        </a>
                    </div>
                    <div className="features-widget-item">
                        <a href="#">
                            <img src={assetPath + 'images/img-7.png'} alt="img"/>
                            <span className="eael-tooltip">Event Calendar</span>
                        </a>
                    </div>
                    <div className="features-widget-item">
                        <a href="#">
                            <img src={assetPath + 'images/img-7.png'} alt="img"/>
                            <span className="eael-tooltip">Event Calendar</span>
                        </a>
                    </div>
                    <div className="features-widget-item">
                        <a href="#">
                            <img src={assetPath + 'images/img-7.png'} alt="img"/>
                            <span className="eael-tooltip">Event Calendar</span>
                        </a>
                    </div>

                </div>
            </div>
        </>
    );
}

export default ExploreProFeatures;