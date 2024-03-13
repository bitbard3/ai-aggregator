import { Router } from "express";
import { generate } from "../controllers/credit.controllers.js";
import { validUser } from "../middlewares/userAuth.middleware.js";

const router = Router()

router.post('/generate', validUser, generate)

export default router