import { Router } from "express";
import { login, signup } from "../controllers/user.contollers.js";
import { userExist } from "../middlewares/userExist.middleware.js";
import { validReq } from "../middlewares/validUserInput.middleware.js";
import { userLogin } from "../middlewares/userLogin.middleware.js";

const router = Router()

router.post('/signup', validReq, userExist, signup)
router.post('/login', validReq, userLogin, login)


export default router