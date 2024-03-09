import { User } from "../db/db.js"

export const signup = async (req, res) => {
    try {
        await User.create({ email: req.email, password: req.password })
        return res.json({ msg: "User created" })
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }

}