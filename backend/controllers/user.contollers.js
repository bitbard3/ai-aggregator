import jwt from 'jsonwebtoken'
import { User } from "../db/db.js"
import dotenv from 'dotenv'

dotenv.config()

export const signup = async (req, res) => {
    try {
        if (req.googleJwt) {
            const payload = jwt.decode(req.googleJwt)
            const existingUser = await User.findOne({ email: payload.email })
            if (existingUser) {
                return res.status(403).json({ msg: "User already exist" })
            }
            const user = await User.create({ email: payload.email, googleSubject: payload.sub })
            const token = jwt.sign({ email: payload.email, userId: user._id }, process.env.JWT_SECRET)
            return res.json({ msg: "User created", token })
        }
        const user = await User.create({ email: req.email, password: req.password })
        const token = jwt.sign({ email: req.email, userId: user._id }, process.env.JWT_SECRET)
        return res.json({ msg: "User created", token })
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}
export const login = async (req, res) => {
    const token = jwt.sign({ email: req.email, userId: req.userId }, process.env.JWT_SECRET)
    return res.json({ msg: "User loggedin", token })
}
