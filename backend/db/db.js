import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()
mongoose.connect(process.env.DB_URL)

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    },
    credits: {
        type: Number,
        required: true,
        default: 25
    }
})

export const User = mongoose.model('User', userSchema)