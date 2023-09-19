const express=require("express")
const exp=express()
exp.use(express.json())

const db = [
    {
        name: "vraj",
        grid: 2533,
        course: "backend",
    }
]
exp.get("/student",(req,res)=>{
    res.status(200).send(db)
})
exp.post("/student",(req,res)=>{
    let newstudent={
        name:req.body.name,
        grid:req.body.grid,
        course:req.body.course
    }
    db.push(newstudent)
    res.status(201).send(newstudent)
})
exp.patch("/student/:id",(req,res)=>{
    res.status(200).send("student enter")
    let {id}=req.params
    
    let updatedStudent=db.filter(stud=>stud.id==id)
    updatedStudent[0].name = req.body.name
    updatedStudent[0].grid = req.body.grid
    updatedStudent[0].course = req.body.course
    res.status(200).send(...updatedStudent)
})
app.delete("/student/:id", (req, res) => {
    let {id }= req.params 
    let deletestudents = db.filter(student => student.id != id)
    console.log(deletestudents)
    res.send(...deletestudents)
})
exp.listen(7777,()=>{
    console.log("Server 7777 start");
})