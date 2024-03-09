import { userSchema } from "../controllers/validations/user.validation.js"

export const validReq = (req, res, next) => {
    const valid = userSchema.safeParse(req.body)
    if (!valid.success) {
        return res.status(411).json({ msg: "Invalid inputs" })
    }
    req.email = req.body.email
    req.password = req.body.password
    next()
}