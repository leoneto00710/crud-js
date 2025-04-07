import express from "express"
import userRoutes from "./routes/public/user.js"
import taskRoutes from "./routes/private/task.js"
import profileRoutes from "./routes/private/profile.js"

import { auth } from "./middlewares/auth.js"

const app = express()
const port = 3333

app.use(express.json())
app.use('/user', userRoutes)
app.use('/profile', auth, profileRoutes)
app.use('/task', auth, taskRoutes)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})