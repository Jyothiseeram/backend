import http from "http";
const server=http.createServer((req,res)=>{
    if(req.url==="/users"){
    res.writeHead(200,{"content-type":"text/plain"});
    res.end(JSON.stringify({name:"Jyothi"}))
    }
    else{
         res.writeHead(200,{"content-type":"text/plain"});
    res.end("Hello this is from backend");
    }
})

server.listen(7002,()=>{
         console.log(`server is running at ${7002}`);
})