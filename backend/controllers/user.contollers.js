import { User } from "../db/db.js"

export const signup = async (req, res) => {
    if (req.user) {
        return res.status(403).json({ msg: "User already exist" })
    }
    const email = req.body.email
    const password = req.body.password
    await User.create({ email, password })
    return res.json({ msg: "User created" })
}