import express, { json } from 'express'
import userRouter from './user'
const cors = require('cors')

const app = express()

app.use(json())
app.use(cors())
app.use("/user", userRouter)

export default app