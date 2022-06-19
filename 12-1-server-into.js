const http = require('http')

// Creating server
const server = http.createServer((req,res)=>{
    res.write('This is my first page on my server.')
    console.log(req.url);
    res.end()
})

server.listen(5000)