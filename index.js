const express=require("express")
const app=express()
const port=3000;
app.use(express.urlencoded({extended:true}));
app.use(express.json())

app.get("/register",(req,res)=>{
    let {user,pass}=req.query;
    console.log("accepted")
    res.send(`get is usedd ${user}`)

})

app.post('/register',(req,res)=>{
    console.log(req.body)
   // res.send("post req")
   const{user}=req.body;
    res.send(`post is usedd ${user}`)

})
app.listen(port,()=>{
    console.log("khushi")
})
