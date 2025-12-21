//Calling a function in another function

function userdetails(id,subject)
{
    console.log("user details",id);
    subject({roll:"123"});
}
function subject(rollobj,marks)
{
    console.log("user subjects by roll",rollobj.roll);
    marks({subid:"en"});
}
function marks(subobj)
{
    console.log("user marks by subid",subobj.subid);
}

userdetails("76",function(subjectdata)
{
    subject(subjectdata,function(marksData){
    marks(marksData);
});
});

