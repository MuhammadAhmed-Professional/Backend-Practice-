// console.log("test")

import express from "express"
import connectDB from "./config/db.js"
import "dotenv/config"
import { userSchema } from "./schema/index.js"

const app = express()
connectDB()

// app.use(cors())
app.use(express.json())

let users = []

app.get("/", (req, res)=>{
    res.send("the server is running")
})
app.get("/users", (req, res)=>{
    res.send(users)
})
app.post("/users", async (req, res)=>{
    try{
        await userSchema.validateAsync(req.body)
        users.push({...req.body, id:  Date.now().toString(36)})
        res.send({user: req.body, message: "user added successfully"})
    }catch(err){
        res.status(400).send({error : err.details[0].message || "something went wrong"})
    }
})
app.delete("/users/:id", (req, res)=>{
    const { id } =req.params
    users = users.filter(obj=> obj.id !== id)
    res.send("user deleted successfully")
})
app.put("/users/:id", (req, res)=>{
    const { id } = req.params
    let index = users.findIndex(obj => obj.id === id)
    users.splice(index, 1, {...req.body, id})
    res.send("user updated successfully")
})
app.listen("8000" , ()=>{
    console.log("The server is running on Port: 8000")
})

