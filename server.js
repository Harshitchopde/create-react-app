const express = require('express')

const app = express();
app.get("/",(req,res)=>{
    console.log("Hwll");
res.send("Hello world")
    
})
app.listen(3000,()=>{
    console.log("Connected to server");
    
})