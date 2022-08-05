const express = require("express")
const app = express()
const dotenv = require("dotenv")
const cors = require("cors")
const mongoose = require("mongoose")
const db = require("./database")
const userRoute = require("./routes/User")
const urlRoute = require("./routes/Url")
dotenv.config()
db.connect()
app.use(cors())
app.use(express.json())

app.use('/user',userRoute)
app.use('/',urlRoute)
app.get('/health/test',(req,res) => {
    res.send("Server Running!")
})
app.listen(process.env.PORT||5000,() => {
    console.log("Server running")
})
