const http=require('http');
const fs = require('fs');
const { buffer } = require('stream/consumers');

const myserver=http.createServer((req,res)=>{
    console.log(req.url, req.method, req.headers);

    if (req.url === '/'){
        res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>Second_Project</title></head>');
        res.write('<body><h1>Enter your details!</h1>');
        res.write('<form action="/submit-details" method="POST">');

        res.write('<input type="text" name="username" placeholder="Enter your name"></br>');
        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male" />');
        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female" />');
        res.write('</br><input type="submit" value="submit">')

        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if(req.url.toLowerCase() === "/submit-details" && req.method == "POST"){

        const body = []
        req.on('data',chunk=>{
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end',()=>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
        });


        fs.writeFileSync('user.txt','vikash kumar');
        res.statusCode=302;
        res.setHeader('Location','/');           
    }

    res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>Second_Project</title></head>');
    res.write('<body><h1>This is my first node server!</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT=4001;
myserver.listen(PORT,()=>{
    console.log(`Second server is running on address http://localhost:${PORT}`);
});