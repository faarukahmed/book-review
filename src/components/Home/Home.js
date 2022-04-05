import { Link } from 'react-router-dom';
import image from '../../image/banner-image.jpg';
import useReview from '../hooks/useReview';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews] = useReview([]);
    return (
        <div className='home-container'>
            <div className='banner-container'>
                <div className='banner-image'>
                    <img src={image} alt="" />
                </div>
                <div className='banner-text'>
                    <h1>Best Book Reviews</h1>
                    <h1 style={{color: '#40739e'}}>Choose Your Book</h1>
                    <p>Book review is the non profit organisation and since we started we always try to review honestly. You can buy books by trusting our reviews.</p>
                    <button className='btn'>View Details</button>
                </div>
            </div>
            <div className='reviews-container'>
                <h1 style={{color: '#40739e'}}>Customer Review: {reviews.length}</h1>
                <div className='reviews'>
                    {
                        reviews.map( review => <Review
                            key = {review.id}
                            review = {review}
                        ></Review>).slice(0, 3)
                    }
                </div>
                <Link className='btn btn-review' to='/reviews'>See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;