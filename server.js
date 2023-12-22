const express = require('express')
const dotenv = require('dotenv');
const { Connect } = require('./config/connection');
const app = express();

app.use(dotenv.config())// to load the data to `process` variable
app.use(express.json())// parser to use json
const PORT = process.env.PORT || 4000
app.get("/", (req, res) => {
    
    res.send("Hello world")

})
// default path
app.use('/',(req,res)=>{
    res.send("<H1> NAMASTE </H1>")
})
app.listen(PORT, () => {
    Connect()
    console.log("Connected to server");

})