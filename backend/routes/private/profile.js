import express from "express"
import { PrismaClient } from "@prisma/client"

const router = express.Router()
const prisma = new PrismaClient()

router.get("/user-info", async (req, res) => {
  try {
    const userId = req.userId
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        email: true,
        name: true,
      },
    })
    if (!user) {
      return res.status(404).json("User not found")
    }
    res.status(200).json(user)
  } catch (e) {
    res.status(500).json(e)
  }
})

export default router
