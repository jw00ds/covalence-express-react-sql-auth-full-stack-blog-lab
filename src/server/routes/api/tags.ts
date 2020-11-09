import * as express from 'express';
import db from '../../db';

const router = express.Router();

// Post to /api/tags
router.post('/', async (req, res) => {
    const newTag = req.body;
    try {
        const tagInsertRes = await db.tags.createTag(newTag.tagName);
        res.status(201).json({ msg: 'New tag posted', tagInsertRes });
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'There was an error', err });
    }
});

// Get /api/tags/:id?
router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            const [tag] = await db.tags.retrieveOneTag(id);
            res.json(tag);
        } else {
            const tags = await db.tags.retrieveAllTags();
            res.json(tags);
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ msg: 'There was an error', err });
    }
});

export default router;