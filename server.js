import express from "express";
import 'dotenv/config'
// const dotenv = require("dotenv")
import { Connect } from "./config/connection.js";
import demoRoutes from "./routes/demoRoutes.js"

const app = express();

// app.use(dotenv.config())// to load the data to `process` variable
app.use(express.json())// parser to use json
const PORT = process.env.PORT || 4000
app.get("/", (req, res) => {
    
    res.send("Hello world")

})
// console.log(dotenv.config());
app.use('/api/demo',demoRoutes)
// default path
app.use('/',(req,res)=>{
    res.send("<H1> NAMASTE </H1>")
})
console.log(process.env.MONGODB);

app.listen(PORT, () => {
    Connect()
    console.log("Connected to server");

})