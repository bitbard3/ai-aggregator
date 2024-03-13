import { Router } from "express";
import { credits, generate } from "../controllers/credit.controllers.js";
import { validUser } from "../middlewares/userAuth.middleware.js";

const router = Router()

router.post('/generate', validUser, generate)
router.get('/credits', validUser, credits)


export default router