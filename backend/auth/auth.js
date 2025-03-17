import jwt from "jsonwebtoken"
import dotenv from "dotenv"
dotenv.config()

export const JWT = process.env.JWT_SECRET

export const auth = (req, res, next) => {
    const token = req.headers.authorization

    if (!token) {
        return res.status(401).json("Unauthorized")
    }

    try {
        const decoded = jwt.verify(token.replace("Bearer ", ""), JWT)
        req.userId = decoded.id
        next()
    } catch (err) {
        return res.status(401).json("Unauthorized")
    }
    next()
}