import z from 'zod'

export const userSchema = z.object({
    email: z.string().email().trim().toLowerCase(),
    password: z.string().min(4)
})