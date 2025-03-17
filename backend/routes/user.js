import express from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { JWT } from "../auth/auth.js"

import { PrismaClient } from "@prisma/client"

const router = express.Router()
const prisma = new PrismaClient()

router.post("/register", async (req, res) => {
  try {
    const user = req.body
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(user.password, salt)

    const userDB = await prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        password: hashPassword,
      },
    })

    const userDBReponse = {
      id: userDB.id,
      email: userDB.email,
      name: userDB.name,
    }

    res.status(201).json(userDBReponse)
  } catch (e) {
    res.status(500).json(e.message)
  }
})

router.post("/login", async (req, res) => {
  try {
    const userInfo = req.body

    const user = await prisma.user.findUnique({
      where: { email: userInfo.email },
      select: { id: true, password: true },
    })

    if (!user) {
      return res.status(404).json("User not found")
    }

    const isMatch = await bcrypt.compare(userInfo.password, user.password)

    if (!isMatch) {
      return res.status(400).json("Password incorrect")
    }

    const token = jwt.sign({ id: user.id }, JWT, { expiresIn: "1h" })

    return res.status(200).json({ token })
  } catch (e) {
    return res.status(500).json(e.message)
  }
})

router.get("/list", async (req, res) => {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
      },
    })

    res.status(200).json(users)
  } catch (e) {
    res.status(500).json(e.message)
  }
})

router.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
      omit: {
        password: true,
      },
    })

    res.status(200).json(user)
  } catch (e) {
    res.status(500).json(e.message)
  }
})

export default router
