import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import service, { STORAGE_KEY } from '../utils/api-service';

export default function Admin() {

    const [title, setTitle] = useState<string>('');
    const [commentary, setCommentary] = useState<string>('');
    const [img, setImg] = useState<string>('');

    const history = useHistory();

    const { id } = useParams<{ id: string }>();
    useEffect(() => {
        service(`/api/reviews/${id}`)
            // .then(r => r.json())
            .then(review => {
                setTitle(review.Review_Title);
                setCommentary(review.Review_Commentary);
                setImg(review.Review_Img);
            });
    }, [id]);

    const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

    const handleCommentaryInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => setCommentary(e.target.value);

    const handleImgInput = (e: React.ChangeEvent<HTMLInputElement>) => setImg(e.target.value);

    const reviseReview = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let updatedReview = {
            title,
            // tags,
            commentary,
            image_url: img
        };
        // THIS IS THE BETTER WAY; JUST DOING IT THE HARD WAY BELOW TO MAINTAIN THAT UNDERSTANDING
        // service(`/api/reviews/${id}`, 'PUT', updatedReview)
        //     // .then(r => r.json())
        //     .then(editedResp => {
        //         console.log(editedResp);
        //         history.push('/');
        //     });
        const TOKEN = localStorage.getItem(STORAGE_KEY)
        fetch(`/api/reviews/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${TOKEN}`
            },
            body: JSON.stringify(updatedReview)
        })
            .then(r => r.json())
            .then(editedResp => {
                console.log(editedResp);
                history.push('/');
            });
    };

    const deleteReview = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        service(`/api/reviews/${id}`, 'DELETE')
            // .then(r => r.json())
            .then(r => {
                console.log(r);
                history.push('/');
            });
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-6 m-2">
                    <h1>Edit Review</h1>
                    <form className="form-group">
                        Title:
                            <input
                            value={title}
                            className="form-control"
                            type="text"
                            onChange={handleTitleInput} />
                        Content:
                            <textarea
                            value={commentary}
                            className="form-control"
                            onChange={handleCommentaryInput}
                            rows={15} />
                        Image URL:
                            <input
                            value={img}
                            className="form-control"
                            type="text"
                            onChange={handleImgInput} />
                        <button className="btn btn-outline-warning mx-1 my-1" onClick={reviseReview}>Post Revised Review</button>
                        <button className="btn btn-outline-danger mx-1 my-1" onClick={deleteReview}>Delete Review</button>
                    </form>
                </div>
            </div>
        </div>
    );
};