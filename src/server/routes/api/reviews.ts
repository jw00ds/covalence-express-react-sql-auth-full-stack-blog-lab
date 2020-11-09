import * as express from 'express';
import * as passport from 'passport';
import db from '../../db';
import { ReqUser } from '../../utils/interfaces';

const router = express.Router();

// Get from /api/reviews/:id?
router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [review] = await db.reviews.retrieveOneReview(id);
            res.json(review);
        } else {
            const reviews = await db.reviews.retrieveAllReviews();
            res.json(reviews);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'There was an error', err });
    }
});

// Request body for reviews will have this format: { title: string, commentary: string, image_url: string, riderId: number }
// Request body for reviewtags will have this format: { reviewId: number, tagId: number }
router.post('/', passport.authenticate('jwt'), async (req: ReqUser, res) => {
    const newFormEntry = req.body;
    try {
        const reviewInsertRes = await db.reviews.createReview(newFormEntry.title, newFormEntry.commentary, newFormEntry.image_url, req.user.id);
        // const reviewInsertRes = await db.reviews.createReview(newFormEntry);
        if (newFormEntry.tagId) {
            await db.reviewtags.createReviewTag(reviewInsertRes.insertId, newFormEntry.tagId);
        }
        res.status(201).json({ msg: 'New review & tag(s) posted'});
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'There was an error', err });
    }
});

// Delete from /api/reviews/:id
router.delete('/:id', passport.authenticate('jwt'), async (req, res) => {
    const id = Number(req.params.id);
    try {
        await db.reviews.destroyReview(id);
        res.json({ msg: 'Review deleted', id });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'There was an error', err });
    }
});

// Request body for reviews will have this format: { title: string, commentary: string, image_url: string, riderId: number, id: number }
// Put to /api/reviews/:id
router.put('/:id', passport.authenticate('jwt'), async (req, res) => {
    const id = Number(req.params.id);
    const revisedReview = req.body;
    try {
        const reviewRes = await db.reviews.reviseReview(revisedReview.title, revisedReview.commentary, revisedReview.image_url, revisedReview.riderId, id);
        res.json({ msg: 'review edited', id, reviewRes });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'There was an error', err });
    }
});

export default router;