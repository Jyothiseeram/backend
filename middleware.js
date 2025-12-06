import express from "express";
const app=express();
app.use(express.json());
app.get('/get-user',(req,res)=>{
    res.send("api success");
})
app.post('/add-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("data added");
});
app.put('/put-user',(req,res)=>{
    let data=req.body;
    console.log(data);
    res.send("data was placed");
});
app.delete('/delete-user',(req,res)=>{
    res.send("data deleted");
})

app.listen(4000,()=>{
    console.log(`server is running at ${4000}`)
})