import * as express from "express";
import db from "../../db";
import { generateHashSalt } from "../../utils/passwords";
import { createToken } from "../../utils/tokens";

const router = express.Router();

/*
    http://localhost:3000/auth/register/
    { username: string, email: string, password: string }
*/
router.post("/", async (req, res) => {
  const newUserDTO = req.body;
  try {
    // console.log(newUserDTO);
    newUserDTO.password = generateHashSalt(newUserDTO.password);
    const { insertId } = await db.users.createUser(newUserDTO);
    const token = createToken({ userid: insertId, role: "guest" });
    res.json({ role: "guest", token });
  } catch (err) {
    console.log(err);
    res.status(500).json("My code isn't working");
  }
});

export default router;
