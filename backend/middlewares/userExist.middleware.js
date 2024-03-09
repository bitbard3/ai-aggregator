import { userSchema } from "../controllers/validations/user.validation.js"
import { User } from "../db/db.js"

export const userExist = async (req, res, next) => {
    const validReq = userSchema.safeParse(req.body)
    if (!validReq.success) {
        return res.status(411).json({ msg: "Invalid inputs" })
    }
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password })
        if (user) {
            req.email = req.body.email
            req.password = req.body.password
            req.user = user
        }
        next()
    } catch (error) {
        res.json({ error })
    }
}