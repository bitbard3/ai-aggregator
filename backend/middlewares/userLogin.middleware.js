import { User } from "../db/db.js"

export const userLogin = async (req, res, next) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email, password: req.body.password })
        if (!existingUser) {
            return res.status(404).json({ msg: "User doesn't exist" })
        }
        else {
            req.userId = existingUser._id
            next()
        }
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
