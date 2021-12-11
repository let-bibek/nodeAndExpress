const http=require("http");
const server=http.createServer((req,resp)=>{
    if(req.url==="/"){
        resp.end("This is homepage");
    }
    if(req.url==="/about"){
        resp.end("This is about page");
    }
   
    resp.end(`
        <h1>Oops!!</h1>
        <p>The page you are looking for is not found.</p>
        <a href="/">Back to home?</a>
    `);
})

server.listen("3000");