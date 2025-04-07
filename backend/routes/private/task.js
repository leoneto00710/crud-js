import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router()
const prisma = new PrismaClient()

router.post("/create", async (req, res) => {
  try {
    const userId = req.userId
    const task = req.body
    const taskDB = await prisma.task.create({
      data: {
        title: task.title,
        content: task.content,
        userId: userId,
      },
    })
    res.status(200).json(taskDB)
  } catch (e) {
    res.status(500).json(e)
  }
})

router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { title, content } = req.body
    const userId = req.userId

    const existingTask = await prisma.task.findUnique({
      where: { id },
      select: { userId: true },
    })

    if (!existingTask) {
      return res.status(404).json({ message: "Task not found" })
    }

    if (existingTask.userId !== userId) {
      return res
        .status(403)
        .json({ message: "You are not authorized to update this task" })
    }

    const updatedTask = await prisma.task.update({
      where: { id },
      data: {
        title,
        content,
      },
    })

    res.status(200).json(updatedTask)
  } catch (e) {
    res.status(500).json(e)
  }
})

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params
    const { title, content } = req.body
    const userId = req.userId

    const existingTask = await prisma.task.findUnique({
      where: { id },
      select: { userId: true },
    })

    if (!existingTask) {
      return res.status(404).json({ message: "Task not found" })
    }

    if (existingTask.userId !== userId) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this task" })
    }

    await prisma.task.delete({
      where: { id }
    })

    res.status(200).json("Task sucessfully deleted")
  } catch (e) {
    res.status(500).json(e)
  }
})

router.get("/list", async (req, res) => {
  try {
    const userId = req.userId
    const tasks = await prisma.task.findMany({
      where: {
        userId: userId,
      },
    })
    res.status(200).json(tasks)
  } catch (e) {
    res.status(500).json(e)
  }
})

export default router
