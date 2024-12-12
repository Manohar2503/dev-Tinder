const adminauth =(req, res,next)=>{
    const token = "xyz";
    const isAuthorized = token === "xyz";
    if( isAuthorized){
        res.send("initial server was created!");
    }
    else{
        res.status(401).send("unathoeized data");
    }
     next();
}

module.exports = {
    adminauth,
}