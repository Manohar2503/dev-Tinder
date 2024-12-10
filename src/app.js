const express = require("express");

const app= express();
 
app.get("/user",
    (req,res,next)=>{
//res.send("getting data from users");
next();
},
(req,res,next)=>{
   // res.send("response2");
    next();
},
(req,res,next)=>{
   // res.send("response3");
    next();
},
(req,res,next)=>{
    res.send("response4");
}
);


app.listen(2020,()=>{
    console.log("server is successfully created!");
});