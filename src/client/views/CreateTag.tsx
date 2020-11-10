import React, { useState } from 'react';
import { useHistory } from 'react-router';
import service from '../utils/api-service';

export default function CreateTag() {

    const [tag, setTag] = useState<string>('');

    const history = useHistory();

    const handleTagInput = (e: React.ChangeEvent<HTMLInputElement>) => setTag(e.target.value);

    const createTag = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        let newTag = {
            name: tag
        }
        // fetch('/api/tags', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newTag)
        // })
        //     .then(r => r.json())
        //     .then(r => {
        //         console.log(r);
        //         history.push('/');
        //     });
        service('/api/tags', 'POST', newTag)
            // .then(r => r.json())
            .then(r => {
                console.log(r);
                history.push('/');
            });
    };

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-9 m-2">
                    <h1>New Tag</h1>
                    <form className="form-group">
                        <input
                            value={tag}
                            className="form-control"
                            type="text"
                            placeholder="Type tag here"
                            onChange={handleTagInput} />
                        <button className="btn btn-warning my-1" onClick={createTag}>Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};