import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router()
const prisma = new PrismaClient()

router.post("/taks", async (req, res) => {
    try{
        const userId = req.userId
        const task = req.body
        const taskDB = await prisma.task.create({
            data: {
                title: task.title,
                content: task.content,
                userId: userId,
            }
        })
        res.status(200).json(taskDB)
    } catch(e){
        res.status(500).json(e)
    }
})

export default router