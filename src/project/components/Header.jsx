import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return(
            <header className = 'header-content'>
                <div className = 'header'>
                    <div className = 'header-text'>
                        <h1>THEMOVIEBOX</h1>
                    </div>
                    <div className = 'header-nav'>
                        <a href = '#' className = 'search-icon' >

                    </a>
                        <div className = 'btn btn-transparent'>
                            <a href = '#'>
                                LOG IN
                            </a>

                        </div>
                        <div className = 'btn btn-pink'>
                            <a href = '#'>
                                SIGN UP
                            </a>
                        </div>

                    </div>
                </div>
                <div className = 'movie-description'>
                    <div className = 'description-header'>
                        <h1>
                            WRATH OF THE TITANS
                        </h1>
                        <div className = 'description-text'>
                            <span>Fantasy</span>
                            <span>Animation</span>
                            <span>Family</span>
                            <span>|</span>
                            <span>Duration: 1h 52m</span>
                        </div>
                        <div className = 'description-nav'>
                            <div className = 'description-btn-pink'>
                                <a href = '#'>
                                    WATCH MOVIE
                                </a>
                            </div>
                            <div className = 'description-btn-border'>
                                <a href = '#'>
                                    VIEW INFO
                                </a>
                            </div>
                            <div className = 'description-btn-transparent'>
                                <a href = '#'>
                                    + ADD TO WISHLIST
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className = 'rating'>
                        <div className= 'rating-text'>
                            <span className = 'first-text'>Rating </span>
                            <span className = 'secondary-text'> based on 3.546 reviews</span>
                        </div>
                        <div className = 'stars-rating'>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="fas fa-star"> </i>
                            <i className="far fa-star"> </i>
                            <span className = 'rating-frame'> 4 </span>
                        </div>

                    </div>
                </div>
            </header>
        );
    }
}