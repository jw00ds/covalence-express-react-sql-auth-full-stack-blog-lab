import * as express from 'express';
import * as passport from 'passport';
import { createToken } from '../../utils/tokens';
import { ReqUser } from '../../utils/interfaces';

const router = express.Router();

router.post('/', passport.authenticate('local'), async (req: ReqUser, res) => {
    const userDTO = req.user;
    try {
        const token = createToken({ userid: userDTO.id, role: userDTO.role });
        res.json({
            token,
            role: userDTO.role
        });
    } catch (err) {
        console.log(err);
        res.status(500).json("My code's not working");
    }
});

export default router;