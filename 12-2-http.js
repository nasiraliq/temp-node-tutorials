const http = require('http')

const links = `<a href="/">Home Page</a> <br> <a href="/about">About</a>`

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(`
            <h1>Home Page</h1>
            ${links}
        `)
    }
    else if(req.url === '/about'){
        res.end(`
            <h1>Here is our short story</h1>
            ${links}
        `)
    }
    else{
        res.end(`
            <h1>Oops!</h1>
            <p>Can't seem to find the page you are looking for</p>
            ${links}
        `)
    }
})

server.listen(5000)