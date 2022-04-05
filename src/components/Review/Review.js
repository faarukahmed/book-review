import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Review.css';
const Review = (props) => {
    const {name, ratings, review, img} = props.review;
    return (
        <div className='review-container'>
            <div className='review'>
                <img src={img} alt="" />
                <div className='review-info'>
                    <h5>{name}</h5>
                    <h5 style={{color: 'orange', margin: '5px 0'}}>{ratings} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon><FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                    </h5>
                    <p title={review}>{review.slice(0, 300) + '...'}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;