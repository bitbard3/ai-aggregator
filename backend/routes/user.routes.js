import { Router } from "express";
import { signup } from "../controllers/user.contollers.js";
import { userExist } from "../middlewares/userExist.middleware.js";
import { validReq } from "../middlewares/validUserInput.middleware.js";

const router = Router()

router.post('/signup', validReq, userExist, signup)


export default router