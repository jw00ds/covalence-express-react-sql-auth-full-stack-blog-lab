import * as React from 'react';
import { Link } from 'react-router-dom';
import { IReview } from '../utils/types';

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewObjData }) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-12">
                    <div className="card shadow-lg">
                        <div className="card-body">
                            <h2 className="card-title">{reviewObjData.Review_Title}</h2>
                            <h3 className="card-subtitle mb-2 text-muted">By rider: @{reviewObjData.Review_Author}</h3>
                            <img src={reviewObjData.Review_Img} alt="Trail img" className="thumbnail" />
                            <p className="card-text">{reviewObjData.Review_Commentary.substring(0, 125)}</p>
                            Tags:
                            <p className="card-text text-muted">{reviewObjData.Review_Tags ? reviewObjData.Review_Tags.split(';;').map(el => (`#${el}`)).join(', ') : 'None'}</p>
                            <div className="d-flex justify-content-end">
                                <Link to={`/reviews/${reviewObjData.Review_ID}`} className="btn btn-link">Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

interface ReviewCardProps {
    reviewObjData: IReview;
}
/*
    IReview {
        Review_ID: number;
        Review_Author: string;
        Review_Img: string;
        Review_Title: string;
        Review_Commentary: string;
        Review_Tags: string;
    }
*/

export default ReviewCard;