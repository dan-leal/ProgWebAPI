import express from 'express';
import usersController from '../controllers/users.js';
const router = express.Router();

router.get("/", usersController.index);
router.post("/", usersController.create);


export default router;
