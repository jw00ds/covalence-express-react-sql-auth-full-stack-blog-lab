import * as React from 'react';
import ReviewCard from '../components/ReviewCard';
import { useState, useEffect } from 'react';
import { IReview } from '../utils/types';
import service from '../utils/api-service';

const Home: React.FC = () => {
    const [reviews, setReviews] = useState<IReview[]>([]);
    useEffect(() => {
        (async () => {
            const resReviews = await service('/api/reviews');
            setReviews(resReviews);
        })();
    }, []);
    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-12">
                    <ul className="list-group list-group-flush font-weight-bold text-uppercase">
                        {reviews.map(review => (
                            <ReviewCard key={`review-${review.Review_ID}`} reviewObjData={review} />
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
};

export default Home;