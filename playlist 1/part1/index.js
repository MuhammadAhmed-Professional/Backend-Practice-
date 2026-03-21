// console.log("test")

import express from "express"

const app = express()

// app.use(cors())

app.get("/", (req, res)=>{
    res.send("the Server is Running")
})
app.get("/users", (req, res)=>{
    res.send([{name:"Muhammad Ahmed"}])
})

app.listen("8000" , ()=>{
    console.log("The server is running on Port: 8000")
})

