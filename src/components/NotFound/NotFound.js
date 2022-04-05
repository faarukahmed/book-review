import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='notFound'>
            <h1 style={{color: 'red', fontSize: '50px', fontWeight: 'bold'}}>404</h1>
            <h1 style={{color: '#40739e'}}>OPPS! PAGE NOT FOUND</h1>
            <Link to='/home'>Go To Home</Link>
        </div>
    );
};

export default NotFound;