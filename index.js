const express=require("express")
const exp=express()
exp.use(express.json())

exp.get("/",(req,res)=>{
 res.status(200).send("Home Page")
})
exp.get("/login",(req,res)=>{
 res.status(200).send("login Page")
})
exp.get("/signup",(req,res)=>{
 res.status(200).send("signup Page")
})

exp.post("/",(req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})
exp.post("/signup",(req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})
exp.post("/login",(req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})
exp.post("/content",(req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})

exp.listen(7777,()=>{
    console.log("Server 7777 start");
})