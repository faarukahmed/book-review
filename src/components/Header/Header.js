import React from 'react';
import './Header.css';
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='nav-container'>
            <div>
                <h1>
                    <Link to="/home">Book Review</Link>
                </h1>
            </div>
            <nav className='nav-link'>
                <CustomLink to="/home">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">Dashboard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;