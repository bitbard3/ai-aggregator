import { User } from "../db/db.js"
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'
import { creditSchema } from "./validations/credit.validation.js"
dotenv.config()

export const generate = async (req, res) => {
    const validPayLoad = creditSchema.safeParse({ credit: req.body.credits })
    if (validPayLoad.error) {
        return res.status(411).json({ msg: "Please provide valid input" })
    }
    try {
        var user = await User.findOne({ _id: req.userId })
    } catch (error) {
        return res.status(404).json({ msg: "User doesnt exist" })
    }
    if (user.credits < req.body.credits) {
        return res.status(400).json({ msg: "Insufficient credits" })
    }
    try {
        await User.updateOne({ _id: req.userId }, { $inc: { credits: -req.body.credits } })
        res.json({ msg: "Credits deducted" })
    } catch (error) {
        return res.status(500).json({ msg: "Something went wrong" })
    }
}