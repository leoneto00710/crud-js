import express from "express"
import userRoutes from "./routes/user.js"
import taskRoutes from "./routes/privates/task.js"

import { auth } from "./middlewares/auth.js"

const app = express()
const port = 3333

app.use(express.json())
app.use('/user', userRoutes)
app.use('/task', auth, taskRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})