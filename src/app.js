const express = require("express");

const app= express();
 
app.use("/user",(req,res)=>{
res.send("user deatils in server getting answer");
});

app.listen(2020,()=>{
    console.log("server is successfully created!");
});