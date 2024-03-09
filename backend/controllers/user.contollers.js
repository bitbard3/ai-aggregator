import jwt from 'jsonwebtoken'
import { User } from "../db/db.js"
import dotenv from 'dotenv'

dotenv.config()

export const signup = async (req, res) => {
    try {
        const user = await User.create({ email: req.email, password: req.password })
        const token = jwt.sign({ email: req.email, userId: user._id }, process.env.JWT_SECRET)
        return res.json({ msg: "User created", token })
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}

