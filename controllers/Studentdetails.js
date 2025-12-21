

const getStudents=(req,res)=>{
     const mydata={name:"thub",roll:"12345"};
     res.send(mydata);
};
const addStudents=(req,res)=>{
    const data=req.body;
    console.log(data);
    res.send("data added");
};
export {getStudents,addStudents};