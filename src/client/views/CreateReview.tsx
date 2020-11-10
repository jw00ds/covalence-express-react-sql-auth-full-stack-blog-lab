import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { ITag } from '../utils/types';
// import Select from 'react-select';
import service from '../utils/api-service';

export default function CreateBlog() {

    useEffect(() => {
        (async () => {
            // const res = await fetch('/api/tags');
            const resTags = await service('/api/tags');
            // const tags = await res.json(); // Service file does this for us
            setTagsList(resTags);
        })(); // Immediately-invoked anonymous fn
    }, []);
    const [tagsList, setTagsList] = useState<ITag[]>([]); // Blank array at start, then after useEffect, will be an ITag arr
    // console.log(tagsList);

    // const [authorid, setAuthorid] = useState<string>('');
    const [title, setTitle] = useState<string>('');
    const [commentary, setCommentary] = useState<string>('');
    const [img, setImg] = useState<string>('');
    const [tagId, setTagId] = useState<string>('1'); // Defaulting to the 1st tag so the dropdown has something for the user to not have to choose one if they don't care


    const history = useHistory();


    // setAuthorid("1"); // Assuming I'll do this via simulated/fake/synthetic authentication/login; doing this below now...

    const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);

    const handleCommentaryInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => setCommentary(e.target.value);

    const handleTagInput = (e: React.ChangeEvent<HTMLSelectElement>) => setTagId(e.target.value);

    const handleImgInput = (e: React.ChangeEvent<HTMLInputElement>) => setImg(e.target.value);




    const createReview = (e: React.MouseEvent<HTMLButtonElement>) => {

        // const handleTagInput = (e: React.ChangeEvent<HTMLSelectElement>) => setTag(e.target.value);
        // handleTagInput(getElementById('tagInput'));

        e.preventDefault();
        let newReview = {
            title,
            commentary,
            image_url: img,
            tagid: tagId
        } // ^THE ABOVE NEEDS TO MATCH THE CREATE QUERY & POST METHOD ON SERVER

        // fetch('/api/blogs', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newReview)
        // })
        //     .then(r => r.json())
        //     .then(r => {
        //         console.log(r);
        //         history.push('/');
        service('/api/reviews', 'POST', newReview)
            // .then(r => r.json())
            .then(r => {
                console.log(r);
                history.push('/');
            });

        // HYPOTHETICAL WAY TO TAKE CARE OF CASES IN WHICH USER DOESN'T SELECT A TAG IN THE CREATE DROPDOWN MENU:

        // if (selectedTag !== '0') {
        //     const res = await fetch('/api/blogtags', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify({ blogid: blogResult.id, tagid: selectedTag });
        //     });
        // }
    };


    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-9 m-2">
                    <h1>New Review</h1>
                    <form className="form-group">
                        <input
                            // value={this.state.userid}
                            value={title}
                            className="form-control"
                            type="text"
                            placeholder="Type title here"
                            onChange={handleTitleInput} />
                        <br />
                        <textarea
                            value={commentary}
                            className="form-control"
                            placeholder="Type your blog post here"
                            onChange={handleCommentaryInput} // Could also do inline: onChange={e => this.setState({ thing: e.target.value })}
                            rows={10} />
                        <br />

                        {/* <div className='dropdown-menu dropdown-menu-right border-secondary' aria-labelledby='navbarDropdown' onChange={handleTagInput}>
                            {tagsList}
                        </div> */}

                        {/* <br />
                        <select onChange={handleTagInput}>
                        <option value=
                        {tagsList.map(tagsListItem => (
                            tagsListItem.name
                                ))}
                                >
                                </option>
                            </select> */}

                        {/* <br />
                        <select multiple={true} value={tagsList} onChange={handleTagInput} /> */}
                        <input
                            // value={this.state.userid}
                            value={img}
                            className="form-control"
                            type="text"
                            placeholder="Paste image URL here"
                            onChange={handleImgInput} />
                        <br />
                        Select a Tag:
                        <select className='form-control' value={tagId} onChange={handleTagInput}>
                            {tagsList.map(tag => (
                                <option key={`tagoption-${tag.Review_Tag_ID}`} value={tag.Review_Tag_ID}>
                                    #{tag.Review_Tag}
                                </option>
                            ))}
                        </select>
                        <br />
                        <button className="btn btn-warning" onClick={createReview}>Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
};