import  { Router } from "express"
const User = require("../models/user")

const userRouter = Router()

userRouter.get("/", async (req,res) => {
    const allUser = await User.find() 
    res.send(allUser)
})
userRouter.put("/", async (req,res) => {
    const allUser = await User.find() 
    res.send(allUser)
})

export default userRouter