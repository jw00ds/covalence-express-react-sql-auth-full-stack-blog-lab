// THIS IS ALL DONE IN REGISTER / LOGIN

// import * as express from 'express';
// import db from '../../db';

// const router = express.Router();

// // router.post('/', async (req, res) => {
// //     const newUser = req.body;
// //     try {
// //         console.log(newUser);
// //         const userInsertRes = await db.users.createUser(newUser);
// //         res.status(201).json({ msg: 'New user posted', userInsertRes });
// //     } catch (err) {
// //         console.log(err);
// //         res.status(500).json({ msg: 'There was an error', err });
// //     }
// // });

// // // Get from /api/users/:id?
// // router.get('/:id?', async (req, res) => {
// //     const id = Number(req.params.id);
// //     try {
// //         if (id) {
// //             const [review] = await db.users.retrieveOneUser(id);
// //             res.json(review);
// //         } else {
// //             const reviews = await db.users.retrieveAllUsers();
// //             res.json(reviews);
// //         }
// //     } catch (err) {
// //         console.log(err);
// //         res.status(500).json({ msg: 'There was an error', err });
// //     }
// // });

// export default router;
