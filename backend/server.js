import express from "express"
import userRoutes from "./routes/user.js"

const app = express()
const port = 3000

app.use('/user', userRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})