import useReview from "../hooks/useReview";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews] = useReview([]);

  return (
    <div style={{padding: "100px 10%"}}>
      <h1 style={{color: '#40739e', textAlign: 'center'}}>What Our Customer Says!</h1>
        <div className="reviews">
          {reviews.map((review) => (
            <Review key={review.id} review={review}></Review>
          ))}
        </div>
    </div>
  );
};

export default Reviews;
