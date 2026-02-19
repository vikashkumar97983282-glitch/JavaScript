const http=require('http');

const myserver=http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);

    if (req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Second_Project</title></head>');
        res.write('<body><h1>Welcome to Home Page!</h1></body>');
        res.write('</html>');
        return res.end();
    } else if(req.url === '/about'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Second_Project</title></head>');
        res.write('<body><h1>This is about page!</h1></body>');
        res.write('</html>');
        return res.end();
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Second_Project</title></head>');
    res.write('<body><h1>This is my first node server!</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT=4000;
myserver.listen(PORT,()=>{
    console.log(`Second server is running on address http://localhost:${PORT}`);
});