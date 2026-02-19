const http = require("http")

const myserver = http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);
    res.write('<html>');
    res.write('<head><title>Second_Project</title></head>');
    res.write('<body><h1>This is my first node server!</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3001;
myserver.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
});