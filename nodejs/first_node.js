const http = require('http');

const myserver = http.createServer((req, res) => {
    console.log(req);
    process.exit(); // Terminate the server after logging the request
});

const PORT=3000;
myserver.listen(PORT,()=>{
    console.log(`Server is running on address http://localhost:${PORT}`);
});
